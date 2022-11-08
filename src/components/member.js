import React from "react";
import { List, Datagrid, TextField, ReferenceField ,EditButton ,Edit,SimpleForm,TextInput,ReferenceInput,Create,useRecordContext,UrlField,ArrayField,ArrayInput,SimpleFormIterator,ReferenceOneField  } from 'react-admin';

const MemberTitle = () => {
    const record = useRecordContext();
    return <span>Member {record ? `"${record.title}"` : ''}</span>;
}

const memberFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="role" label="Role" reference="role" />,
];

export const MemberList = () => (
    <List filters={memberFilters}>
        <Datagrid>
            <TextField source="_id" />
            <TextField source="name" />
            <ArrayField source="avatar">
                <Datagrid>
                <TextInput source="public_id" />
                <TextInput source="url" />
                </Datagrid>
            </ArrayField>
            <TextField source="role" />
            <TextField source="session" />
            <TextField source="year" />
            <ArrayField source="socialMedia">
                <Datagrid>
                    <TextField source="instagram" />
                    <TextField  source="linkedin" />
                    <TextField  source="github" />
                    <TextField  source="facebook" />
                </Datagrid>
            </ArrayField>
            <EditButton />
        </Datagrid>
    </List>
);

export const MemberEdit = () => (
    <Edit title={<MemberTitle />}>
        <SimpleForm>
        <TextField disabled source="_id"/>
            <TextInput source="name" />
            <ArrayInput source="avatar">
                <SimpleFormIterator>
                <TextInput source="public_id" />
                <TextInput source="url" />
                </SimpleFormIterator>
            </ArrayInput>
            <TextInput source="role" />
            <TextInput source="session" />
            <TextInput source="year" />
            <ArrayInput source="socialMedia">
                <SimpleFormIterator>
                    <TextInput source="instagram" />
                    <TextInput  source="linkedin" />
                    <TextInput  source="github" />
                    <TextInput  source="facebook" />
                </SimpleFormIterator>
            </ArrayInput>
        </SimpleForm>
    </Edit>
);

export const MemberCreate = () => (
    <Create>
        <SimpleForm>
            {/* <TextField source="_id" /> */}
            <TextInput source="name" />
            <ArrayInput source="avatar">
                <SimpleFormIterator>
                <TextInput source="public_id" />
                <TextInput source="url" />
                </SimpleFormIterator>
            </ArrayInput>
            <TextInput source="role" />
            <TextInput source="session" />
            <TextInput source="year" />
            <ArrayInput source="socialMedia">
                <SimpleFormIterator>
                    <TextInput source="instagram" />
                    <TextInput  source="linkedin" />
                    <TextInput  source="github" />
                    <TextInput  source="facebook" />
                </SimpleFormIterator>
            </ArrayInput>
        </SimpleForm>
    </Create>
);