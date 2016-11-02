import Backbone from 'backbone';
import $ from 'jquery';
import secret from '../secret';
import router from '../router';
export default Backbone.Model.extend({
    defaults: {
        name: '',
        email: '',
        'user-token': ''
    },
    userRegister(email, password) {
        this.save({
            email,
            password
        }, {
            url: 'https://api.backendless.com/v1/users/register',
            success: () => {
                this.userLogin(email, password);
                console.log('register success');
            }

        });
    },
    validatePassword(password, confirmPassword) {
        if (password.trim() && password === confirmPassword) return true;
        return false;
    },
    userLogin(email, password) {
        this.save({
            login: email,
            password
        }, {
            url: 'https://api.backendless.com/v1/users/login',
            success: (response) => {
                this.set(response);
                router.navigate('home', {
                    trigger: true
                });
            },
            error: () => {
                console.log('did not work');
            }
        });
    },
    addContact(firstName, lastName, nickName, address, phoneNumber) {
        this.save({
            firstName,
            lastName,
            nickName,
            address,
            phoneNumber
        }, {
            url: 'https://api.backendless.com/v1/data/contacts',
            success: (response) => {
                console.log('Added');
                console.log(response);
            },
            error: (response) => {
                console.log('Not posted');
                console.log(response);
            }
        });
    }
  });


//   logout(){}
// });
