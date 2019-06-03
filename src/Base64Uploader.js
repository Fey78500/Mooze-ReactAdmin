import firebase from 'firebase';
import uuidv1 from 'uuid/v1';
/**
 * For posts update only, convert uploaded image in base 64 and attach it to
 * the `picture` sent property, with `src` and `title` attributes.
 */
const addUploadCapabilities = requestHandler => (type, resource, params) => {
    if ((type === 'UPDATE' || type === 'CREATE')) {
        
        if (params.data.image && params.data.image.rawFile) {
            const file = params.data.image.rawFile;
            const fileName = uuidv1();
            const metadata = {
                contentType: 'image/jpeg'
            };
              
            const storage = firebase.storage();
            const ref = storage.ref();
            // Upload file and metadata to the object 'images/mountains.jpg'
            let uploadTask = ref.child('photoUser/' + fileName).put(file, metadata);

            // Listen for state changes, errors, and completion of the upload.
            let value = uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
            function(snapshot) {
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                case firebase.storage.TaskState.PAUSED: // or 'paused'
                    console.log('Upload is paused');
                    break;
                case firebase.storage.TaskState.RUNNING: // or 'running'
                    console.log('Upload is running');
                    break;
                }
            }, function(error) {

            // A full list of error codes is available at
            // https://firebase.google.com/docs/storage/web/handle-errors
            switch (error.code) {
                case 'storage/unauthorized':
                // User doesn't have permission to access the object
                break;

                case 'storage/canceled':
                // User canceled the upload
                break;
                case 'storage/unknown':
                // Unknown error occurred, inspect error.serverResponse
                break;
            }
            }, function() {
            // Upload completed successfully, now we can get the download URL
                return uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                    //window.location.reload();
                    return requestHandler(type, resource, {
                        ...params,
                        data: {
                            ...params.data,
                            image: downloadURL,
                        },
                    })  
                });
            });
            return params ? { data: params } : { data: {} };
            
        }else{
            return requestHandler(type, resource, params);
        }
    }else{
        return requestHandler(type, resource, params);

    }
};

export default addUploadCapabilities;