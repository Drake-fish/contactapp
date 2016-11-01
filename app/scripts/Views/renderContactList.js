import $ from 'jquery';
import singleContact from './singleContact';
import wholeContact from './wholeContact';

function renderContactList(contacts){
  let contactsDiv=$(`
    <div class="contacts"></div>
    `);
  
  let contactsList=$(`
  <ul></ul>
    `);
    contactsList.empty();
    contacts.forEach((contact,i,arr)=>{
      contactsList.append(singleContact(contact));


    });
contacts.on('update',()=>{
  contactsList.empty();
  contacts.forEach((contact,i,arr)=>{
    contactsList.append(singleContact(contact));
  });
});

contactsDiv.append(contactsList);
$('main').append(contactsDiv);
return contactsList;
}

export default renderContactList;
