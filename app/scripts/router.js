import Backbone from 'backbone';
import $ from 'jquery';
import renderLogin from './Views/renderLogin';
import renderSignup from './Views/renderSignup';
import renderNewContact from './Views/renderNewContact';
import renderContactList from './Views/renderContactList';
import Session from './Models/Session';
import Contacts from './Collections/Contacts';
import Contact from './Models/Contact';
import secret from './secret';
let contacts = new Contacts();
let contact = new Contact();
let session= new Session();
let main=$('main');
//ajaxSend intercepts all ajax request and set the headers to this. That way I don't have to keep writing the same headers on each request!
$(document).ajaxSend((evt, xhr, opts) => {
	console.log('interception!');
	console.log(opts.type);

	xhr.setRequestHeader('application-id', '617D9729-0F09-B7B7-FF0F-77CC3945FD00');
	xhr.setRequestHeader('secret-key', secret);
	xhr.setRequestHeader('application-type', 'REST');
	if (session.get('user-token')) {
		xhr.setRequestHeader('user-token', session.get('user-token'));
	}
});

const Router= Backbone.Router.extend({
  routes:{
    ''           :'login',
    'signup'     : 'signup',
    'home'       : 'home',
    'contact/:id': 'contact'
  },
  login(){
    if(session.get('user-token')){
      this.navigate('home',{trigger: true});
    }else{
    main.empty();
    main.append(renderLogin(session));
  }
},
  signup(){
    if(session.get('user-token')){
      this.navigat('home',{trigger:true});
    }else{
    main.empty();
    main.append(renderSignup(session));
  }
  },
  home(){
    if(!session.get('user-token')){
      this.navigate('',{trigger:true});
    }else{
    contacts.fetch();
    main.empty();
    main.append(renderNewContact(contacts,session));
		main.append(renderContactList(contacts,session));
  }
},
contact(){
	if(!session.get('user-token')){
		this.navigate('',{trigger:true});
	}else{
	contacts.fetch();
	main.empty();
	console.log('your lookin at a contact');
}

}
});

const router=new Router();

export default router;
