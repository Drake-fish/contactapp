import Backbone from 'backbone';
import $ from 'jquery';
import renderLogin from './Views/renderLogin';
import renderSignup from './Views/renderSignup';
import renderHomePage from './Views/renderHomePage';
import renderContacts from './Views/renderContacts';
import UserDetails from './Models/UserDetails';
import Users from './Collections/Users';

const Router= Backbone.Router.extend({
  routes:{
    '':'login',
    'signup': 'signup',
    'home': 'home',
    'contacts': 'contacts'
  },
  login(){
    $('main').append(renderLogin());
  },
  signup(){
    $('main').empty();
    $('main').append(renderSignup());
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
