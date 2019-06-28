import React from 'react';
import {Edit, SimpleForm, BooleanInput,ReferenceInput,FormDataConsumer,choices,RichTextField,SelectInput,required } from 'react-admin';
const validateChoices = choices([true], 'Doit être coché');
export const OrderEdit = (props) => (
    <Edit title=" " {...props}>
        <SimpleForm form={`post_edit_${props.id}`}>
            <FormDataConsumer style={{ display: 'inline', float: 'left'}}>
                {({ formData, ...rest }) => formData.checkedOut === true || formData.delivered === true ?
                    <BooleanInput source="paid" label="Payée" style={{ display: 'inline', float: 'left'}}  validate={[required(),validateChoices]}/>
                    :
                    <BooleanInput source="paid" label="Payée" style={{ display: 'inline', float: 'left'}} />
                }
            </FormDataConsumer>
            <FormDataConsumer style={{ display: 'inline', float: 'left'}}>
                {({ formData, ...rest }) => {
                    if(formData.paid === true && formData.delivered === true){
                        return <BooleanInput source="checkedOut" label="Préparée" style={{ display: 'inline', float: 'left'}} validate={[required(),validateChoices]}/>
                    }else if(formData.paid === true || formData.checkedOut === true){
                        return <BooleanInput source="checkedOut" label="Préparée" style={{ display: 'inline', float: 'left'}}/>
                    }
                }
                }
            </FormDataConsumer>
            <FormDataConsumer style={{ display: 'inline', float: 'left'}}>
                {({ formData, ...rest }) => {
                    if(formData.delivered === true){
                        return <BooleanInput source="delivered" label="Livrée" style={{ display: 'inline', float: 'left'}}/>
                    }else if(formData.checkedOut === true && formData.paid === true){
                        return <BooleanInput source="delivered" label="Livrée" style={{ display: 'inline', float: 'left'}}/>
                    }
                }
            }
            </FormDataConsumer>
            <br/><br/><br/>
            <ReferenceInput label="Bipper" source="biper" reference="bipers">
                <SelectInput optionValue="key" optionText="name" />
            </ReferenceInput>
            <RichTextField label="Commentaire" source="message"/>
        </SimpleForm>
    </Edit>
);