import Backbone from 'backbone';
import $ from 'jquery';
import secret from '../secret';

export default Backbone.Model.extend({
    defaults: {
        firstName: '',
        lastName: '',
        nickName: '',
        emailAddress: '',
        phoneNumber: ''
    }
});
