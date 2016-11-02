import $ from 'jquery';

function renderSignup(session) {
    const main = $('main');


    let registerMessage = $(`
  <h1>Welcome To The Most Robust Contacts App on the Planet!</h1>
  <h3>Just give us a little information about yourself below to get started!</h3>
  `);
    let mainContainer = $('main');
    let loginPage = $(`
<span>Already have an account?<a href=#>Login here!</a></span>
  `);
    let form = $(`
<form class="sign-up">
<input type="email" name="email", placeholder="Email" value="">
<input type="password" name="password", placeholder="Password" value="">
<input type="password" name="confirmPw", placeholder="Confirm Password" value="">
<input class="submit" type="submit" name="submit", value="Sign Up">
</form>
  `);

    form.on('submit', (e) => {
        e.preventDefault();
        const email = $(form).find('input[name="email"]').val();
        const password = $(form).find('input[name="password"]').val();
        const passwordConfirm = $(form).find('input[name="confirmPw"]').val();
        if (session.validatePassword(password, passwordConfirm)) {
            session.userRegister(email, password);
            console.log('form submitted');
            alert("your account has been created!");
        } else {
            alert('your passwords do not match!');
        }
    });
    $('main').append(registerMessage);
    form.append(loginPage);
    return form;
}

export default renderSignup;
