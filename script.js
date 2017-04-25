

var cats = [{name:'Max', image:'cat.jpg'},{name:'Tom', image:'cat2.jpg'}, {name:'Meow-Meow', image:'cat3.jpg'}, {name:'Tiger', image:'cat4.jpg'}, {name:'Kitty', image:'cat5.jpg'}];
for (var i=0; i < cats.length; i++) {
var theCat = cats[i];
var elCat =document.createElement('li');
elCat.textContent = theCat.name;
elCat.className = 'list_name';

elCat.addEventListener('click', (function(copyCat) {
	return function() {
var catPic = copyCat.image;
var catName = copyCat.name;
var myCatPic = document.getElementById('cat');
myCatPic.setAttribute('src', catPic);
var billboard = document.getElementById('headname');
billboard.innerHTML = 'This is ' + catName; 
var counter = document.getElementById('count');
counter.innerHTML = '';
var target=1;
myCatPic.addEventListener('click', (function(copyCatName,copyTarget) {	

	return function() {

var billboard = document.getElementById('headname');
billboard.innerHTML = 'This is ' + copyCatName; 
var counter = document.getElementById('count');
counter.innerHTML = copyCatName + ' has ' + copyTarget + ' <b>Click(s)</b>';
copyTarget++ ;
	};
})(catName,target));
	}; 
})(theCat));


document.getElementById("menu").appendChild(elCat);
};

