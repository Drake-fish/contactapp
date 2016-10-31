import Backbone from 'backbone';
import $ from 'jquery';
import renderLogin from './Views/renderLogin';
import renderSignup from './Views/renderSignup';
import renderHomePage from './Views/renderHomePage';
import renderContacts from './Views/renderContacts';
import UserDetails from './Models/UserDetails';
import Users from './Collections/Users';
let user= new UserDetails();
const Router= Backbone.Router.extend({
  routes:{
    '':'login',
    'signup': 'signup',
    'home': 'home',
    'contacts': 'contacts'
  },
  login(){
    $('main').append(renderLogin(user));
  },
  signup(){
    $('main').empty();
    $('main').append(renderSignup(user));
  },
  home(){
    $('main').empty();
    $('main').append(renderHomePage());
  },
  contacts(){
    $('main').empty();
    $('main').append(renderContacts());
  }
});

const router=new Router();

export default router;
