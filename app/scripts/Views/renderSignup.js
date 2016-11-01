import $ from 'jquery';
function renderSignup(session){
const main=$('main');



let mainContainer=$('main');
let loginPage=$(`
<span>Already have an account?<a href=#>Login here!</a></span>
  `);
let form =$(`
<form class="sign-up">
<input type="email" name="email", placeholder="Email" value="">
<input type="password" name="password", placeholder="Password" value="">
<input type="password" name="confirmPw", placeholder="Confirm Password" value="">
<input type="submit" name="submit", value="Sign Up">
</form>
  `);

  form.on('submit',(e)=>{
    e.preventDefault();
    let email= $(form).find('input[name="email"]').val();
    let password= $(form).find('input[name="password"]').val();
    let passwordConfirm=$(form).find('input[name="confirmPw"]').val();
    if(session.validatePassword(password,passwordConfirm)){
    session.userRegister(email,password);
    console.log('form submitted');
    alert("your account has been created!");
  }else{
    alert('your passwords do not match!');
  }
  });
  form.append(loginPage);
  return form;
}

export default renderSignup;
