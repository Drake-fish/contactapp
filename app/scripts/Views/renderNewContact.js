import $ from 'jquery';
import singleContact from './singleContact';

function renderNewContact(contacts){

  let form =$(`
  <form class="new-contact">
  <input type="text" name="firstname", placeholder="First Name", value="">
  <input type="text" name="lastname", placeholder="Last Name", value="">
  <input type="text" name="nickname", placeholder="Nickname", value="NA">
  <input type="text" name="address", placeholder="Address", value="">
  <input type="text" name="phonenumber", placeholder="Phone Number", value="">
  <input type="submit" name="submit", value="Submit Contact">
  </form>
    `);

    form.on('submit',(e)=>{
      e.preventDefault();
      const firstName=form.find('input[name="firstname"]').val();
      const lastName=form.find('input[name="lastname"]').val();
      const nickName=form.find('input[name="nickname"]').val();
      const address=form.find('input[name="address"]').val();
      const phoneNumber=form.find('input[name="phonenumber"]').val();
      contacts.create({firstName,lastName,nickName,address,phoneNumber},
      {
        success: (response)=>{
        console.log(response);
        alert('your contact has been created!');
      }
    });
  });
  return form;
}
export default renderNewContact;
