import $ from 'jquery';
import singleContact from './singleContact';


function renderContactList(contacts) {
    let contactsDiv = $(`
    <div class="contacts">
      <h1 class="contact-title">Your Contacts</h1>
    </div>
    `);

    let contactsList = $(`
  <ul>
  </ul>
    `);
    contactsList.empty();
    contacts.forEach((contact, i, arr) => {
        contactsList.append(singleContact(contact));


    });
    contacts.on('update', () => {
        contactsList.empty();
        contacts.forEach((contact, i, arr) => {
            contactsList.append(singleContact(contact));
        });
    });

    contactsDiv.append(contactsList);
    return contactsDiv;
}

export default renderContactList;
