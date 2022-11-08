import React from "react";
import { List, Datagrid, TextField, ReferenceField ,EditButton ,Edit,SimpleForm,TextInput,ReferenceInput,Create,useRecordContext,UrlField,DateTimeInput,DateInput,DateField,ArrayField,ArrayInput,SimpleFormIterator } from 'react-admin';

const EventTitle = () => {
    const record = useRecordContext();
    return <span>Event {record ? `"${record.title}"` : ''}</span>;
}

const eventFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="role" label="Role" reference="role" />,
];

export const EventList = () => (
    <List filters={eventFilters}>
        <Datagrid>
            <TextField source="_id" />
            <TextField source="name" />
            <TextField source="description" />
            <ArrayField source="images">
                <Datagrid>
                    <TextField source="public_id" />
                    <TextField  source="url" />
                </Datagrid>
            </ArrayField>
            <UrlField source="formLink" />
            <DateField source="startTime" />
            <DateField source="startDate" />
            <DateField source="endDate" />
            <EditButton />
        </Datagrid>
    </List>
);

export const EventEdit = () => (
    <Edit title={<eventFilters />}>
        <SimpleForm>
        <TextField disabled source="_id"/>
            <TextInput source="name" />
            <TextInput source="description" />
            <ArrayInput source="images">
                <SimpleFormIterator>
                    <TextInput source="public_id" />
                    <TextInput  source="url" />
                </SimpleFormIterator>
            </ArrayInput>
            <TextInput source="formLink" />
            <DateTimeInput source="startTime" />
            <DateInput source="startDate" />
            <DateInput source="endDate" />
        </SimpleForm>
    </Edit>
);

export const EventCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="description" />
            <ArrayInput source="images">
                <SimpleFormIterator>
                    <TextInput source="public_id" />
                    <TextInput  source="url" />
                </SimpleFormIterator>
            </ArrayInput>
            <TextInput source="formLink" />
            <DateTimeInput source="startTime" />
            <DateInput source="startDate" />
            <DateInput source="endDate" />
        </SimpleForm>
    </Create>
);