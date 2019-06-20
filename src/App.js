import * as React from 'react';
import { Admin, Resource } from 'react-admin';
 
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

import { RatingShow } from './Components/Rating/Show';
import { RatingEdit } from './Components/Rating/Edit';
import { RatingCreate } from './Components/Rating/Create';
import { RatingList } from './Components/Rating/List';

import { DessertShow } from './Components/Dessert/Show';
import { DessertEdit } from './Components/Dessert/Edit';
import { DessertCreate } from './Components/Dessert/Create';
import { DessertList } from './Components/Dessert/List';

import { BiperShow } from './Components/Biper/Show';
import { BiperEdit } from './Components/Biper/Edit';
import { BiperCreate } from './Components/Biper/Create';
import { BiperList } from './Components/Biper/List';

/* Icone */
import PersonIcon from '@material-ui/icons/Person';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import StarIcon from '@material-ui/icons/Star';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import LocalDrinkIcon from '@material-ui/icons/LocalDrink';
import LocalDiningIcon from '@material-ui/icons/LocalDining';
import LocalPizzaIcon from '@material-ui/icons/LocalPizza';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import ViewCarouselIcon from '@material-ui/icons/ViewCarousel';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';
import SettingsRemoteIcon from '@material-ui/icons/SettingsRemote';

import { RestProvider, AuthProvider } from 'ra-data-firebase-client';
import addUploadCapability from './Base64Uploader'

import frenchMessages from 'ra-language-french';

/* Configuration firebase */
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
};
/* Les ressources etant tracker venant de firebase */
const trackedResources = [
  {name: "bipers",isPublic: true,},
  {name: "orders",isPublic: true,},
  {name: "desserts",isPublic: true,},
  {name: "users",isPublic: true},
  {name: "drinks",isPublic: true},
  {name: "ratings",isPublic: true},
  {name: "mains",path:"moozemains",isPublic: true},
  {name: "extras",isPublic: true},
  {name: "restos",isPublic: true},
  {name: "starters",isPublic: true},
  {name: "tables",isPublic: true}
];
/* Pour l'authentification */
const authConfig = {userProfilePath: '/users/', userAdminProp: 'admin'};

const shouldUseAuth = true;
/* Pour l'accès au données (utilisation de provider firebase) */
const dataProvider = addUploadCapability(RestProvider(firebaseConfig, { trackedResources }));
/* Pour la traduction */
const messages = {
  fr: frenchMessages,
}
const i18nProvider = locale => messages[locale];

class App extends React.Component {
  render() {
    return (
      /* Configuration du composant de base admin de react admin */
      <Admin 
        locale="fr"
        i18nProvider={i18nProvider}
        dataProvider={dataProvider}
        authProvider={shouldUseAuth ? AuthProvider(authConfig) : null}>
        {/* Atribue des composant au ressources venant de firebase */}
        <Resource name="orders" options={{ label: 'Commandes' }} list={OrderList} create={OrderCreate} edit={OrderEdit} show={OrderShow} icon={MonetizationOnIcon}/>
        <Resource name="mains" options={{ label: 'Plats' }} list={MainList} create={MainCreate} edit={MainEdit} show={MainShow} icon={LocalPizzaIcon}/>
        <Resource name="drinks" options={{ label: 'Boissons' }} list={DrinkList} create={DrinkCreate} edit={DrinkEdit} show={DrinkShow} icon={LocalDrinkIcon}/>
        <Resource name="starters" options={{ label: 'Entrées' }} list={StarterList} create={StarterCreate} edit={StarterEdit} show={StarterShow} icon={LocalDiningIcon}/>
        <Resource name="desserts" options={{ label: 'Desserts' }} list={DessertList} create={DessertCreate} edit={DessertEdit} show={DessertShow} icon={BubbleChartIcon}/>
        <Resource name="extras" options={{ label: 'Suppléments' }} list={ExtraList} create={ExtraCreate} edit={ExtraEdit} show={ExtraShow} icon={AddCircleIcon}/>
        <Resource name="restos" options={{ label: 'Restaurants' }} list={RestoList} create={RestoCreate} edit={RestoEdit} show={RestoShow} icon={RestaurantIcon}/>
        <Resource name="tables" options={{ label: 'Tables' }} list={TableList} create={TableCreate} edit={TableEdit} show={TableShow} icon={ViewCarouselIcon}/>
        <Resource name="ratings" options={{ label: 'Notes' }} list={RatingList} create={RatingCreate} edit={RatingEdit} show={RatingShow} icon={StarIcon}/>
        <Resource name="users" options={{ label: 'Utilisateurs' }} list={UserList} create={UserCreate} edit={UserEdit} show={UserShow} icon={PersonIcon}/>
        <Resource name="bipers" options={{ label: 'Bippers' }} list={BiperList} create={BiperCreate} edit={BiperEdit} show={BiperShow} icon={SettingsRemoteIcon}/>
      </Admin>
    );
  }
}
 
export default App;