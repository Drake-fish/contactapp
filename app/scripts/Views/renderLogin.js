

import $ from 'jquery';
function renderLogin(session){
const main=$('main');


let loginPage=$(`<span>Don't Have an account?<a href="#signup"> SIGN UP!</a></span>`);
let form =$(`
<form class="login">
<input type="email" name="email", placeholder="Email" value="">
<input type="password" name="password", placeholder="Password" value="">
<input type="submit" name="submit", value="Login">
</form>
  `);

  form.on('submit',(e)=>{
    e.preventDefault();
    let email= $(form).find('input[name="email"]').val();
    let password= $(form).find('input[name="password"]').val();
    session.userLogin(email,password);
    console.log('form submitted');

  });
  form.append(loginPage);
  return form;
}

export default renderLogin;
