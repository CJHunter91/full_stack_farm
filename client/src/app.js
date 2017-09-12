var AjaxRequest = require('./services/ajax_request');
var AnimalsView = require('./views/animals_view');

function app(){
  var animalsData = new AjaxRequest('http://localhost:3000/api/animals');
  var ul = document.querySelector('#animals')
  var form = document.querySelector('#animal-form');
  form.addEventListener('submit', function(e){
    e.preventDefault();
    var body = {name: this.name.value, type: this.type.value};
    animalsData.post(animalsView.render, body);
  })
  var animalsView = new AnimalsView(ul);
  animalsData.get(animalsView.render);
}

window.addEventListener('load', app);