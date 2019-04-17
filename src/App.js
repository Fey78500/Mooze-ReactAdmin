import * as React from 'react';
import { Admin, Resource } from 'react-admin';
import addUploadFeature from './addUploadFeature';
 
import { ExtraShow } from './Components/Extra/Show';
import { ExtraEdit } from './Components/Extra/Edit';
import { ExtraCreate } from './Components/Extra/Create';
import { ExtraList } from './Components/Extra/List';

import { DrinkShow } from './Components/Drink/Show';
import { DrinkEdit } from './Components/Drink/Edit';
import { DrinkCreate } from './Components/Drink/Create';
import { DrinkList } from './Components/Drink/List';

import { MainShow } from './Components/Main/Show';
import { MainEdit } from './Components/Main/Edit';
import { MainCreate } from './Components/Main/Create';
import { MainList } from './Components/Main/List';

import { RestoShow } from './Components/Resto/Show';
import { RestoEdit } from './Components/Resto/Edit';
import { RestoCreate } from './Components/Resto/Create';
import { RestoList } from './Components/Resto/List';

import { StarterShow } from './Components/Starter/Show';
import { StarterEdit } from './Components/Starter/Edit';
import { StarterCreate } from './Components/Starter/Create';
import { StarterList } from './Components/Starter/List';

import { OrderShow } from './Components/Order/Show';
import { OrderEdit } from './Components/Order/Edit';
import { OrderCreate } from './Components/Order/Create';
import { OrderList } from './Components/Order/List';

import { UserShow } from './Components/User/Show';
import { UserEdit } from './Components/User/Edit';
import { UserCreate } from './Components/User/Create';
import { UserList } from './Components/User/List';

import { TableShow } from './Components/Table/Show';
import { TableEdit } from './Components/Table/Edit';
import { TableCreate } from './Components/Table/Create';
import { TableList } from './Components/Table/List';

import PersonIcon from '@material-ui/icons/Person';
import DonutIcon from '@material-ui/icons/DonutLarge';

import { RestClient,AuthClient } from 'aor-firebase-client';
import firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
};

const restClientOptions = {
  trackedResources: [
    {
      name: "orders", // The display/reference name for this resource
      isPublic: true, // Does it require auth? True by default!
    },
    {
      name: "users",
      isPublic: true
    },
    {
      name: "drinks",
      isPublic: true
    },
    {
      name: "mains",
      path:"moozemains",
      isPublic: true
    },
    {
      name: "extras",
      isPublic: true
    },
    {
      name: "restos",
      isPublic: true,
      uploadFields: ['restaurantPictureUrl','src']
    },
    {
      name: "starters",
      isPublic: true
    },
    {
      name: "tables",
      isPublic: true
    }
  ],
  // Additional options
  options: {
    initialQuerytimeout: 10000,
    timestampFieldNames: {
      createdAt: "createdAt",
      updatedAt: "updatedAt"
    },
    firebasePersistence: firebase.auth.Auth.Persistence.SESSION,
    methods: {
      // Allows to override internal methods to customize behavior
      // postRead: entry => {
      //   entry.id = isNaN(entry.id) ? entry.id : parseInt(entry.id);
      //   return entry;
      // }
    }
  }
};

const authClientOptions = {
  firebaseConfig,
  firebasePersistence: firebase.auth.Auth.Persistence.SESSION,
  userProfilePath: 'users',
  userAdminProp: 'admin'
}
const shouldUseAuth = true; // !(window && window.location && window.location.search && window.location.search === '?security=0')
class App extends React.Component {
  render() {
    return (
      <Admin 
        dataProvider={addUploadFeature(RestClient(firebaseConfig, restClientOptions))}
        authProvider={shouldUseAuth ? AuthClient(authClientOptions) : null}
      >
        <Resource name="extras" list={ExtraList} create={ExtraCreate} edit={ExtraEdit} show={ExtraShow} icon={DonutIcon}/>
        <Resource name="drinks" list={DrinkList} create={DrinkCreate} edit={DrinkEdit} show={DrinkShow}/>
        <Resource name="mains" list={MainList} create={MainCreate} edit={MainEdit} show={MainShow}/>
        <Resource name="restos" list={RestoList} create={RestoCreate} edit={RestoEdit} show={RestoShow}/>
        <Resource name="starters" list={StarterList} create={StarterCreate} edit={StarterEdit} show={StarterShow}/>
        <Resource name="orders" list={OrderList} create={OrderCreate} edit={OrderEdit} show={OrderShow}/>
        <Resource name="users" list={UserList} create={UserCreate} edit={UserEdit} show={UserShow} icon={PersonIcon}/>
        <Resource name="tables" list={TableList} create={TableCreate} edit={TableEdit} show={TableShow}/>
      </Admin>
    );
  }
}
 
export default App;