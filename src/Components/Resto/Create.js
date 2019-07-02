// in src/posts.js
import React from 'react';
import { Create, SimpleForm, ImageField, TextInput,SelectInput, ImageInput,required} from 'react-admin';
import Geocode from 'react-geocode';

// Get latidude & longitude from address.
Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAP_API);
let latitude,longitude;
function changeAddress (event){
    let value = event.currentTarget.value;
    if (value.length >= 5){
        Geocode.fromAddress(value).then(
            response => {
                const { lat, lng } = response.results[0].geometry.location;
                console.log(lat, lng);
                latitude=lat;
                longitude=lng;
            },
            error => {
                console.error(error);
                latitude=0;
                longitude=0;
            }
        );
    }
}

const autoFillAddress = (event)=>{
  if(event.restaurantAddress){
    if(event.restaurantAddress.length >= 5){
        event.latitude = latitude;
        event.longitude = longitude;
    }
  }
}
export const RestoCreate = (props) => (
    <Create title="Ajout d'un restaurant" {...props} >
        <SimpleForm onChange={autoFillAddress}>
            <ImageInput source="image" label="Image" accept="image/*" placeholder="Cliquer ici ou déposer une image pour l'uploader" validate={[required()]}>
                <ImageField source="src" title="title" />
            </ImageInput>
            <TextInput source="restaurantName" label="Nom du restaurant" validate={[required()]}/>
            <TextInput source="restaurantAddress" label="Adresse du restaurant" validate={[required()]} onBlur={changeAddress}/>
            <SelectInput source="restaurantType" label="Type du restaurant" validate={[required()]} choices={[
                { id: 'Tacos', name: 'Tacos' },
                { id: 'Kebab', name: 'Kebab' },
                { id: 'Sushi', name: 'Sushi' },
            ]} />
        </SimpleForm>
    </Create>
);