import Ember from 'ember';


export default Ember.Route.extend({
  model : function() {  	

  	return $.getJSON('https://gateway.marvel.com:443/v1/public/characters?apikey=6bd0ee806fbb8d26a9575992adc6b98b').then(function(data){
  		console.log(data.data.results);

  		return data.data.results;
  	});


  }
});
