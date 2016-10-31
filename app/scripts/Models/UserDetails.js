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
    {email,password},
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
}
});

//   logout(){}
// });
