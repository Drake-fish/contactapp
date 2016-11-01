import $ from 'jquery';

export default function (contact){
  let singleContact=$(`
    <li>
  <h1>Name: ${contact.get('firstName')} ${contact.get('lastName')}</h1>
  <h2>Nickname: ${contact.get('nickName')}</h2>
  <h3>Address: ${contact.get('address')}</h3>
  <h3>Phone-Number: ${contact.get('phoneNumber')}</h3>
    </li>
    `);



  return singleContact;

}
