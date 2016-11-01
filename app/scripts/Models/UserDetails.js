import Backbone from 'backbone';
import $ from 'jquery';
import secret from '../secret';

export default Backbone.Model.extend({
  idAttribute:'_id',
  name:'name',
  email:'email',
  contacts:[],
userRegister(email,password){
  this.save(
    {email,password,name},
    {
      url:'https://api.backendless.com/v1/users/register',
      headers: {
        'application-id':'617D9729-0F09-B7B7-FF0F-77CC3945FD00',
        'secret-key': secret,
        'application-type':'REST',
        'Content-Type':'application/json'
      },
      success:()=>{
        console.log('success');
      },
      error:()=>{
        console.log('did not work');
      }
    }
  );
},
userLogin(login,password){
  this.save(
    {login,password},
    {
      url:'https://api.backendless.com/v1/users/login',
      headers: {
        'application-id':'617D9729-0F09-B7B7-FF0F-77CC3945FD00',
        'secret-key': secret,
        'application-type':'REST',
        'Content-Type':'application/json'
      },
      success:(response)=>{
        console.log(response);
        location.hash="#home";
       this.token=response['user-token'];
       this.id=response.objectId;
      },
      error:()=>{
        console.log('did not work');
      }
    }
  );
},
saveContact(firstName,lastName,nickname,address,phonenumber){
  this.save([
    {"fistName":firstName},
    {"lastName":lastName},
    {"nickname":nickname},
    {"address":address},
    {"phonenumber":phonenumber}],
    {
      url:'https://api.backendless.com/v1/data/contacts',
      headers: {
        'application-id':'617D9729-0F09-B7B7-FF0F-77CC3945FD00',
        'secret-key': secret,
        'application-type':'REST',
        'Content-Type':'application/json'
      },
      success:()=>{
        console.log('success');
      },
      error:()=>{
        console.log('did not work');
      }
    }
  );
}
});

//   logout(){}
// });
