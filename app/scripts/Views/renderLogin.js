

import $ from 'jquery';
function renderLogin(user){
const main=$('main');


let loginPage=$(`<a href="#signup"><span>Don't Have an account? SIGN UP!</span></a>`);
let form =$(`
<form class="login">
<input type="text" name="email", placeholder="Email" value="">
<input type="text" name="password", placeholder="Password" value="">
<input type="submit" name="submit", value="Login">
</form>
  `);

  form.on('submit',(e)=>{
    e.preventDefault();
    let login= $(form).find('input[name="email"]').val();
    let password= $(form).find('input[name="password"]').val();
    user.userLogin(login,password);
    console.log('form submitted');

  });
  main.append(form);
  main.append(loginPage);
}

export default renderLogin;
