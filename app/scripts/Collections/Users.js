import Backbone from 'backbone';
import UserDetails from '../Models/UserDetails';


export default Backbone.Collection.extend({
  model:UserDetails,
  url: 'https://api.backendless.com/v1/users/login'
});
