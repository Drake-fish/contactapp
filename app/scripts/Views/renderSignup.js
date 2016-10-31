import $ from 'jquery';
import User from '../Models/UserDetails';
function renderSignup(user){
const main=$('main');



let mainContainer=$('main');

let form =$(`
<form class="sign-up">
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
  main.append(form);
}

export default renderSignup;
