import Backbone from 'backbone';
import Contact from '../Models/Contact';


export default Backbone.Collection.extend({
  model:Contact,
  url: 'https://api.backendless.com/v1/data/contacts',
  parse(data){
    console.log(data);
    return data.data;
  }
});
