import $ from 'jquery';


function renderHomePage(user){
  let main=$('main');
  let form =$(`
  <form class="new-contact">
  <input type="text" name="firstName", placeholder="First Name", value="">
  <input type="text" name="lastname", placeholder="Last Name", value="">
  <input type="text" name="nickname", placeholder="Nickname", value="NA">
  <input type="text" name="address", placeholder="Address", value="">
  <input type="text" name="phonenumber", placeholder="Phone Number", value="">
  <input type="submit" name="submit", value="Submit Contact">
  </form>
    `);

    form.on('submit',(e)=>{
      e.preventDefault();
      let firstName=form.find('input[name="firstName"]').val();
      let lastName=form.find('input[name="lastname"]').val();
      let nickname=form.find('input[name="nickname"]').val();
      let address=form.find('input[name="address"]').val();
      let phonenumber=form.find('input[name="phonenumber"]').val();
      user.saveContact(firstName,lastName,nickname,address,phonenumber);
    });
    main.append(form);
}

export default renderHomePage;
