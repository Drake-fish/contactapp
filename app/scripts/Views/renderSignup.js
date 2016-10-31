import $ from 'jquery';
import User from '../Models/UserDetails';
function renderSignup(){
const main=$('main');

let user = new User();


let form =$(`
<form class="sign-up">
<input type="text" name="name", placeholder="Name" value="">
<input type="text" name="email", placeholder="Email" value="">
<input type="text" name="password", placeholder="Password" value="">
<input type="submit" name="submit", value="Sign Up">
</form>
  `);

  form.on('submit',(e)=>{
    e.preventDefault();
    let email= $(form).find('input[name="email"]').val();
    let password= $(form).find('input[name="password"]').val();
    user.userRegister(email,password);
    console.log('form submitted');
  });
}

export default renderSignup;
