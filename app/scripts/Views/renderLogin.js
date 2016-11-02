import $ from 'jquery';

function renderLogin(session) {
    const main = $('main');

    let welcome = $(`
  <h1>Welcome To Drakes Super Awesome Contacts App!</h1>
    <h3>Why don't you just type up an email and password and get started!</h3>

  `);
    let loginPage = $(`<span>Don't Have an account?<a href="#signup"> SIGN UP!</a></span>`);
    let form = $(`
<form class="login">
<input type="email" name="email", placeholder="Email" value="">
<input type="password" name="password", placeholder="Password" value="">
<input class="submit" type="submit" name="submit", value="Login">
</form>
  `);

    form.on('submit', (e) => {
        e.preventDefault();
        const email = $(form).find('input[name="email"]').val();
        const password = $(form).find('input[name="password"]').val();
        session.userLogin(email, password);
        console.log('form submitted');

    });
    $('main').prepend(welcome);
    form.append(loginPage);
    return form;
}

export default renderLogin;
