var AnimalsView = function(ul){
this.ul = ul;
this.render = this.render.bind(this);
}

AnimalsView.prototype.render = function(data) {
  console.log(this);
  for (var animal of data){
    li = document.createElement('li');
    li.innerText = "Name: "+ animal.name + " Type: " + animal.type;
    this.ul.appendChild(li);
  };
};

module.exports = AnimalsView;