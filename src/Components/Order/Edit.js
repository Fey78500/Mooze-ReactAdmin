import React from 'react';
import {Edit, SimpleForm, BooleanInput } from 'react-admin';
import QRCode from 'qrcode.react';

export const OrderEdit = (props) => (
    <Edit title=" " {...props}>
        <SimpleForm form={`post_edit_${props.id}`}>
            <BooleanInput source="paid" label="Payé" style={{ display: 'inline', float: 'left', marginLeft: '20px' }}/>
            <BooleanInput source="checkedOut" label="Préparé" style={{ display: 'inline', float: 'left', marginLeft: '20px' }}/>
            <BooleanInput source="delivered" label="Livré" style={{ display: 'inline', float: 'left', marginLeft: '20px' }}/>
            <div className="HpQrcode" style={{ display: 'inline', float: 'left', marginLeft: '20px',width:'64px' }}>
                <QRCode
                    value={props.id}
                    size={64}
                    level={'H'}
                />
            </div>
            <br/><br/><br/><br/>
        </SimpleForm>
    </Edit>
);