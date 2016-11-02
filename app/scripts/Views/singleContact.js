import $ from 'jquery';

export default function(contact) {
    let singleContact = $(`
    <li>
    <img src="https://lh3.googleusercontent.com/jGKCzrKQ7_lmCW57v3P9T1N6w7u38HwA8e5AuPvdIWSg2FUKz6rF65X-HzCLO7R6RUkO=w300">
  <h2 class="name">${contact.get('firstName')} ${contact.get('lastName')}<h2>
  <h3 class="info">${contact.get('nickName')}<br>
  <i class="fa fa-envelope" aria-hidden="true"></i>${contact.get('emailAddress')}<br>
  <i class="fa fa-phone" aria-hidden="true"></i>${contact.get('phoneNumber')}</h3>
    </li>
    `);




    return singleContact;

}
