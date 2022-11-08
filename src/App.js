import React,{useState} from 'react';
import  Dashboard from './components/dashboard';
import authProvider from './components/auth';
import { UserList } from './components/user';
// import { PostList,PostEdit,PostCreate } from './components/post';
import { MemberList,MemberEdit,MemberCreate } from './components/member';
import { EventList,EventEdit,EventCreate } from './components/event';
import { Admin, Resource, ListGuesser,EditGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import PostIcon from '@mui/icons-material/Book';
import UserIcon from '@mui/icons-material/Group';
// const dataProvider = jsonServerProvider('http://localhost:5000/api/admin');
// const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
import dataProvider from './dataProvider';

function App() {
  return (
    <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
      {/* <Resource name="users" list={UserList} icon={PostIcon} recordRepresentation="name"/>
      <Resource name="posts" list={PostList} icon={UserIcon} edit={PostEdit} create={PostCreate}/> */}
      <Resource name="event" list={EventList} edit={EventEdit}  create={EventCreate}/>
      <Resource name="member" list={MemberList} edit={MemberEdit}  create={MemberCreate}/>
    </Admin>
  );
}

export default App;
