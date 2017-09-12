var AjaxRequest = require('./services/ajax_request');
var AnimalsView = require('./views/animals_view');

function app(){
  var animalsData = new AjaxRequest('http://localhost:3000/api/animals');
  var animalsView = new AnimalsView(animalsData);
  animalsData.get(animalsView.render);
}

window.addEventListener('load', app);