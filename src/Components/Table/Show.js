import React from 'react';
import { Show, SimpleShowLayout, TextField, ReferenceField,FormDataConsumer } from 'react-admin';
import QRCode from 'qrcode.react';

const PostTitle = ({ record }) => {
    return <span>Détail de {record ? `"${record.tableName}"` : ''}</span>;
};

let link = document.createElement('a');
link.textContent = 'Télécharger l\'image';

link.addEventListener('click', function(ev) {
    const canvas = document.querySelector('.HpQrcode > canvas');
    link.href = canvas.toDataURL();
    link.download = "QRCode.png";
}, false);

function interval(){
    // do whatever you like here
    if(!document.querySelector('.HpQrcode')){
        setTimeout(interval, 2000);
    }else{
        document.querySelector('.HpQrcode').appendChild(link);
    }
}

export const TableShow = (props) => (

    <Show title={<PostTitle/>} {...props} >
        <SimpleShowLayout>
            {interval()}
            <TextField source="tableName" label="Nom"/>
            <TextField source="tableZone" label="Zone"/>
            <ReferenceField label="Restaurant" source="resto_id" reference="restos">
                <TextField source="restaurantName" />
            </ReferenceField>
            <FormDataConsumer>
                {({ formData, ...rest }) =>
                    <div className="HpQrcode">  
                        <QRCode
                            value={`${formData.resto_id}.${formData.id}`}
                            size={180}
                            level={'H'}
                        />    
                    </div>
                }
            </FormDataConsumer>
        </SimpleShowLayout>
    </Show>
);
 