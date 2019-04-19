'use strict';
var player = {};
//Flag for selecting avatar --------------------------------------------------------->
var isFirst = true;
//Is called in HTML upon form submission ------------------------------------------->
function subbmitUserinfo() {
  console.log('user.js running sumbitUserinfo');
  event.preventDefault();
  var userName = document.getElementById('userName').value;
  var diffculity = getLevelValue(document.getElementById('userInfo'),'level');
  var shipName = 'Death-Co-lider';
  player = new User(userName,diffculity,shipName);
  localStorage.setItem('player', JSON.stringify(player));
  window.open ('mainHTML.html','_self',false);
}

// User object has default game setting :------------------------------------------->
var User = function(userName,level) {
  this.userName = userName;
  this.level = level;
  // this.shipName = shipName;
  // this.proPic = proPic;
  this.currentSector = 0;
  this.visitedSectorsArray = [];
  this.currentHolds = 500;
  this.turnsleft = 50;
  this.credits = 100000 ;
  this.maxHolds = 500;
  this.fuelHolds = 0;
  this.orgHolds = 0;
  this.equipHolds = 0;
  this.emptyHolds = 500;
};

function getLevelValue(form,name){
  var value ='';
  var radio = form.elements[name];

  for(var i =0 ; i< radio.length;i++){
    if(radio[i].checked){
      value = radio[i].value;
    }
  }
  return value;
}
