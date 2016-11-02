import $ from 'jquery';
import singleContact from './singleContact';

function renderNewContact(contacts) {

    let form = $(`
  <form class="new-contact">
  <h3 class="title">Add Some Friends!</h3>
  <input type="text" name="firstname", placeholder="First Name", value="">
  <input type="text" name="lastname", placeholder="Last Name", value="">
  <input type="text" name="nickname", placeholder="Nickname", value="">
  <input type="text" name="address", placeholder="Address", value="">
  <input type="text" name="phonenumber", placeholder="Phone Number", value="">
  <input class="submit" type="submit" name="submit", value="Submit Contact">
  </form>
    `);

    form.on('submit', (e) => {
        e.preventDefault();
        const firstName = form.find('input[name="firstname"]').val();
        const lastName = form.find('input[name="lastname"]').val();
        const nickName = form.find('input[name="nickname"]').val();
        const address = form.find('input[name="address"]').val();
        const phoneNumber = form.find('input[name="phonenumber"]').val();
        form.find('input[name="phonenumber"]').val('');
        form.find('input[name="firstname"]').val('');
        form.find('input[name="lastname"]').val('');
        form.find('input[name="nickname"]').val('');
        form.find('input[name="address"]').val('');
        form.find('input[name="phonenumber"]').val('');
        contacts.create({
            firstName,
            lastName,
            nickName,
            address,
            phoneNumber
        }, {
            success: (response) => {
                console.log(response);
                alert('your contact has been created!');
            }
        });
    });
    return form;
}
export default renderNewContact;
