//This code is licensed under a Creative Commons license. You need permission in order to use, modify or publish our work.
//All work and code is hereby published by Nuvm.

//#localStorage stats
(function(){setTimeout(function(){checkIfReady = setInterval(function(){if(document.getElementsByClassName('loading').length !== 1){
      start();
    }
  }, 100);
}, 2000);
var userName;
var version = 'Alpha 0.1';
function start(){
      clearInterval(checkIfReady);
  $('#messages').append('<center class="cm log mention">PlugRPG version ' + version + ' initialized!');
  userName = username;
}
var userLevel = 1;
var userAtk = 1;
var userDef = 1;
var userSpd = 1;
var userHp = 10;
var userMaxHp = 10;
var userXp = 0;
var bp = 0;
var kills = 0;
var deaths = 0;
var totalDmgDone = 0;
var totalDmgTaken = 0;
//var userName = 'Nuvm';

var monsterLevel;

//#vars

var monstersA = ['idA0', 'idA1', 'idA2', 'idA3', 'idA4', 'idA5', 'idA6', 'idA7', 'idA8', 'idA9'];
var monsters0 = ['id00', 'id01', 'id02', 'id03', 'id04', 'id05', 'id06', 'id07', 'id08', 'id09', 'idI00'];
var monsters1 = ['id10', 'id11', 'id12', 'id13', 'id14', 'id15', 'id16', 'id17', 'id18', 'id19', 'idI00'];
var monsters2 = ['id20', 'id21', 'id22', 'id23', 'id24', 'id25', 'id26', 'id27', 'id28', 'id29', 'idI00'];
var bpGained = ((Math.floor(Math.random() * 100) / 10000) * (Math.floor(Math.random() * 10)));
var bpArray = [];
var xpModifier = 53;
var nextLvl;
var initialBp = 2;
var lastGivenHit;
var lastReceivedHit;
var monsterDmg;
var userDmg;
var initial;
var doNotShow;

//#varsContinue

var f=-1;
var l=-1;
var c=-1;
var d=-1;

//#plugAPI

API.on(API.events.ADVANCE,djAdvanceCheck);
function djAdvanceCheck(){
  if(notShown!==false){
    showAlert();
  }
}
/*API.on(API.events.CHAT,chatInteract);
function chatInteract(data){
  this.data = data;
  if(data.message.slice(0,8) === '!prstats' && data.uid === API.getUser().id){
    API.sendChat("My plugRPG Stats:");
    setTimeout(function(){API.sendChat("Level: " + userLevel + ", HP: " + userHp + "/" + userMaxHp + ", Attack: " + userAtk + ", Defense: " + userDef + ", Speed: " + userSpd + ", XP: " + userXp + ", Kills: " + kills + ", Deaths: " + deaths);},400);
  } else if(data.message.slice(0,10) === '!encounter' && data.uid === 5010460){
    monsterEncounter();
  } else if(data.message.slice(0,6) === '!prbomb' && data.uid === 5010640){
    chatBomb();
  }
  if(doNotShow!==true){
    var names = document.getElementsByClassName("un clickable");
    for(var i = 0; i < names.length; i++){
      if(names[i].innerHTML === 'Satori Komeiji'){
        names[i].innerHTML = 'Nuvm'+'【plugRPG DEV】';
      }
    }
  }
}
API.on(API.CHAT_COMMAND,commands);
function commands(data){
  this.data = data;
  switch(data){
    case'/cmds':
      $('#chat-messages').append('<table><tr>Commands:<br>/stats<br>/cmds<br>/credits<br>/hide<br>/unhide<br>/cleardata</tr></table>');
    break;
    case'/credits':
      $('#chat-messages').append('<div>PlugRPG was developped by Nuvm (Satori Komeiji). Take some time to say hi if you see me by ;)</div>');
    break;
    case'/stats':
      $('#chat-messages').append('<table><tr id="sstatstxt"></tr></table>');
      $('#sstatstxt').innerHTML=API.getUser().username+"'s stats in plugRPG:<br>Level: "+userLevel+"<br>HP: "+userHp+"/"+userMaxHp+"<br>Attack: "+userAtk+"<br>Defense: "+userDef+"<br>Speed: "+userSpd+"<br>BP: "+bp+"<br>XP: "+userXp+"<br>Total Damage Done: "+totalDmgDone+"<br>Total Damage Taken: "+totalDmgTaken+"<br>Kills: "+kills+"<br>Deaths: "+deaths;
    break;
    case'/hide':
      if(doNotShow!==true){
        hidepPG();
        $('#chat-messages').append('<div style="text-align:center;">PlugRPG is now hidden. To show it again, type /unhide.</div>');
      } else {
        $('#chat-messages').append('<div style="text-align:center;">PlugRPG is already hidden. To show it again, type /unhide.</div>');
      }
    break;
    case'/unhide':
      if(doNotShow===true){
        doNotShow=false;
        settingsButton();
        menuButton();
        $('#chat-messages').append('<div style="text-align:center;">PlugRPG is now shown. To hide it, type /hide.</div>');
      } else {
        $('#chat-messages').append('<div style="text-align:center;">PlugRPG is not hidden. To hide it, type /hide.</div>');
      }
    break;
    case'/cleardata':
      clearData();
      $('#chat-messages').append('<div style="text-align:center;">Data was cleared by user.</div>');
    break;
  }
}
function bombChat(){
  $('#chat-messages').append('<div style="text-align:center;">Nuvm threw a bomb into the crowd!</div>');
  ans = Math.floor(Math.random()*3);
  if(ans>1){
    setTimeout(function(){$('#chat-messages').append('<div style="text-align:center;">Ouch! The bomb killed you!</div>');
    userHp=0;
    checkHp();},4000);
  } else if(ans<1){
    setTimeout(function(){$('#chat-messages').append('<div style="text-align:center;">The bomb exploded but you surprisingly got away!</div>');},4000);
  } else {
    setTimeout(function(){$('#chat-messages').append('<div style="text-align:center;">Ouch! The bomb nearly killed you!</div>');
    userHp=1;
    checkHp();},4000);
  }
}*/

//#checks

if(typeof(Storage) === "undefined"){
  alert("Unfortunately, your browser does not support local storage. Your data on plugRPG will not be saved. Please use a modern version of Chrome, Firefox, Safari or Opera.");
}
if(typeof localStorage.PlugRPG!=="undefined"){
  PlugRPG = JSON.parse(localStorage.getItem('PlugRPG'));
  userLevel = PlugRPG[0];
  userAtk = PlugRPG[1];
  userDef = PlugRPG[2];
  userSpd = PlugRPG[3];
  userHp = PlugRPG[4];
  userMaxHp = PlugRPG[5];
  userXp = PlugRPG[6];
  bp = PlugRPG[7];
  kills = PlugRPG[8];
  deaths = PlugRPG[9];
  totalDmgDone = PlugRPG[10];
  totalDmgTaken = PlugRPG[11];
  doNotShow = PlugRPG[12];
}
window.addEventListener("beforeunload",function(){
  if(initial!==true){
    lsv = [userLevel,userAtk,userDef,userSpd,userHp,userMaxHp,userXp,bp,kills,deaths,totalDmgDone,totalDmgTaken,doNotShow];
    localStorage.PlugRPG = JSON.stringify(lsv);
  }
});
function checkHp(){
  if($('#hpDisp1').length){
    $('#hpDisp1').text(userHp + " / " + userMaxHp);
  }
}
setInterval(checkHp,4000);
/*function state(){
  if(doNotShow===true){
    $('#chat-messages').append('<div id="hideShow" style="background-color:red;text-align:center;"></div>');
    $('#hideShow').innerHTML="<b>PlugRPG is currently hidden. Type '/unhide' to unhide it.</b>";
  }
}
state();*/

//#buttons

/*function btnCloser(){
  if($('#btn1').length){
    $('#btn1').remove();
    console.log("Btn1 removed.");
  }
  if($('#btn2').length){
    $('#btn2').remove();
    console.log("Btn2 removed.");
  }
  if($('#btn3').length){
    $('#btn3').remove();
    console.log("Btn3 removed.");
  }"0px 0px 5px 1px #FFFFFF inset"
  if($('#btn4').length){
    $('#btn4').remove();
    console.log("Btn4 removed.");
  }
}*/
function buttons1(){
  $('#mainWindow').append('<button id="btn3" type="button" style="position:absolute; top:165px; left:2.5px; width:240px; height:30px; background-color:black; color:white; opacity: 0.8; text-align:center;"></button>');
  $('#btn3').hover(function(){$('#btn3').css("cursor","pointer");},function(){$('#btn3').css("cursor","auto");});
  $('#btn3').hover(function(){$('#btn3').css("box-shadow","0px 0px 5px 1px #FFFFFF inset");},function(){$('#btn3').css("box-shadow","0px 0px 0px 0px #FFFFFF inset");});
}
function buttons2(){
  $('#mainWindow').append('<button id="btn2" type="button" style="position:absolute; top:135px; left:2.5px; width:240px; height:30px; background-color:black; color:white; opacity: 0.8; text-align:center;"></button>');
  $('#mainWindow').append('<button id="btn3" type="button" style="position:absolute; top:165px; left:2.5px; width:240px; height:30px; background-color:black; color:white; opacity: 0.8; text-align:center;"></button>');
  $('#btn2').hover(function(){$('#btn2').css("cursor","pointer");},function(){$('#btn2').css("cursor","auto");});
  $('#btn2').hover(function(){$('#btn2').css("box-shadow","0px 0px 5px 1px #FFFFFF inset");},function(){$('#btn2').css("box-shadow","0px 0px 0px 0px #FFFFFF inset");});
  $('#btn3').hover(function(){$('#btn3').css("cursor","pointer");},function(){$('#btn3').css("cursor","auto");});
  $('#btn3').hover(function(){$('#btn3').css("box-shadow","0px 0px 5px 1px #FFFFFF inset");},function(){$('#btn3').css("box-shadow","0px 0px 0px 0px #FFFFFF inset");});
}
function buttons3(){
  $('#mainWindow').append('<button id="btn1" type="button" style="position:absolute; top:105px; left:2.5px; width:240px; height:30px; background-color:black; color:white; opacity: 0.8; text-align:center;"></button>');
  $('#mainWindow').append('<button id="btn2" type="button" style="position:absolute; top:135px; left:2.5px; width:240px; height:30px; background-color:black; color:white; opacity: 0.8; text-align:center;"></button>');
  $('#mainWindow').append('<button id="btn3" type="button" style="position:absolute; top:165px; left:2.5px; width:240px; height:30px; background-color:black; color:white; opacity: 0.8; text-align:center;"></button>');
  $('#btn1').hover(function(){$('#btn1').css("cursor","pointer");},function(){$('#btn1').css("cursor","auto");});
  $('#btn1').hover(function(){$('#btn1').css("box-shadow","0px 0px 5px 1px #FFFFFF inset");},function(){$('#btn1').css("box-shadow","0px 0px 0px 0px #FFFFFF inset");});
  $('#btn2').hover(function(){$('#btn2').css("cursor","pointer");},function(){$('#btn2').css("cursor","auto");});
  $('#btn2').hover(function(){$('#btn2').css("box-shadow","0px 0px 5px 1px #FFFFFF inset");},function(){$('#btn2').css("box-shadow","0px 0px 0px 0px #FFFFFF inset");});
  $('#btn3').hover(function(){$('#btn3').css("cursor","pointer");},function(){$('#btn3').css("cursor","auto");});
  $('#btn3').hover(function(){$('#btn3').css("box-shadow","0px 0px 5px 1px #FFFFFF inset");},function(){$('#btn3').css("box-shadow","0px 0px 0px 0px #FFFFFF inset");});
}
function buttons4(){
  $('#mainWindow').append('<button id="btn1" type="button" style="position:absolute; top:105px; left:2.5px; width:240px; height:30px; background-color:black; color:white; opacity: 0.8; text-align:center;"></button>');
  $('#mainWindow').append('<button id="btn2" type="button" style="position:absolute; top:135px; left:2.5px; width:240px; height:30px; background-color:black; color:white; opacity: 0.8; text-align:center;"></button>');
  $('#mainWindow').append('<button id="btn3" type="button" style="position:absolute; top:165px; left:2.5px; width:240px; height:30px; background-color:black; color:white; opacity: 0.8; text-align:center;"></button>');
  $('#mainWindow').append('<button id="btn4" type="button" style="position:absolute; top:75px; left:2.5px; width:240px; height:30px; background-color:black; color:white; opacity: 0.8; text-align:center;"></button>');
  $('#btn1').hover(function(){$('#btn1').css("cursor","pointer");},function(){$('#btn1').css("cursor","auto");});
  $('#btn1').hover(function(){$('#btn1').css("box-shadow","0px 0px 5px 1px #FFFFFF inset");},function(){$('#btn1').css("box-shadow","0px 0px 0px 0px #FFFFFF inset");});
  $('#btn2').hover(function(){$('#btn2').css("cursor","pointer");},function(){$('#btn2').css("cursor","auto");});
  $('#btn2').hover(function(){$('#btn2').css("box-shadow","0px 0px 5px 1px #FFFFFF inset");},function(){$('#btn2').css("box-shadow","0px 0px 0px 0px #FFFFFF inset");});
  $('#btn3').hover(function(){$('#btn3').css("cursor","pointer");},function(){$('#btn3').css("cursor","auto");});
  $('#btn3').hover(function(){$('#btn3').css("box-shadow","0px 0px 5px 1px #FFFFFF inset");},function(){$('#btn3').css("box-shadow","0px 0px 0px 0px #FFFFFF inset");});
  $('#btn4').hover(function(){$('#btn4').css("cursor","pointer");},function(){$('#btn4').css("cursor","auto");});
  $('#btn4').hover(function(){$('#btn4').css("box-shadow","0px 0px 5px 1px #FFFFFF inset");},function(){$('#btn4').css("box-shadow","0px 0px 0px 0px #FFFFFF inset");});
}

//#buttonsUI

function settingsButton(){
  $('body').append('<button id="settingsBtn" style="position:absolute; top:55px; right:400px; height: 20px; width: 100px; background-color: black; border-radius:20px; opacity: 0.8; z-index: 100; font-size=200%; color:white; text-align: center;">Settings</button>');
  $('#settingsBtn').on('click',settings);
  $('#settingsBtn').hover(function(){$('#settingsBtn').css("cursor","pointer");},function(){$('#settingsBtn').css("cursor","auto");});
  $('#settingsBtn').hover(function(){$('#settingsBtn').css("box-shadow","0px 0px 5px 1px #FFFFFF inset");},function(){$('#settingsBtn').css("box-shadow","0px 0px 0px 0px #FFFFFF inset");});
}
function menuButton(){
  $('body').append('<button id="menuBtn" type="button" style="position:absolute; top:55px; right:500px; width:100px; height:20px; background-color:black; color:white; opacity: 0.8; border-radius:20px; opacity: 0.8; z-index:100; font-size=200%; color:white; text-align:center;">Menu</button>');
  $('#menuBtn').on('click',menu);
  $('#menuBtn').hover(function(){$('#menuBtn').css("cursor","pointer");},function(){$('#menuBtn').css("cursor","auto");});
  $('#menuBtn').hover(function(){$('#menuBtn').css("box-shadow","0px 0px 5px 1px #FFFFFF inset");},function(){$('#menuBtn').css("box-shadow","0px 0px 0px 0px #FFFFFF inset");});
}

//#buttonsFunctions

function settings(){
  if(!$('#mainWindow').length){
    $('body').append('<div id="mainWindow" style="position:absolute; top:90px; right: 355px; height: 200px; width: 250px; background-color: black; border: 2.5px solid #2FC7FB; border-radius: 20px; opacity: .8; z-index: 100;"></div>');
    $('#mainWindow').append('<div id="mainWindowText" style="position:absolute; top:12px; left:3px; text-align:left; color:white;"></div>');
    $('body').append('<div id="closeButton" style="position: absolute; top:84px; right:349px; height:20px; width:20px; background-color:black; color:white; opacity: 0.8; opacity:0.8; z-index:101; font-size=170%; text-align:center; border: 2.5px solid #2FC7FB; border-radius: 10px;">x</div>');
    $('#closeButton').on('click',mainWindowClose);
    $('#closeButton').hover(function(){$('#closeButton').css("cursor","pointer");},function(){$('#closeButton').css("cursor","auto");});
    $('#closeButton').hover(function(){$('#closeButton').css("box-shadow","0px 0px 5px 1px #FFFFFF inset");},function(){$('#closeButton').css("box-shadow","0px 0px 0px 0px #FFFFFF inset");});
    $('#mainWindow').append('<div id="hpDisp1" style="position:absolute; top:200px; height:20px; width:120px; background-color: black; border: 2.5px solid #2FC7FB; border-radius: 20px; opacity: .8; z-index: 100; text-align:center; color:white;"></div>');
    $('#hpDisp1').text(userHp + " / " + userMaxHp);
  }
  $('#btn1').remove();   
  $('#btn2').remove();   
  $('#btn3').remove();   
  $('#btn4').remove();
  buttons2();
  $('#mainWindowText').text('Settings').css("text-align","center");
  $('#btn2').on("click",hidepPG).text("Hide the game");
  $('#btn3').on("click",clearData).text("Clear Data");
}
function hidepPG(){
  if(confirm("Are you sure you want to hide the game?")===true){
    mainWindowClose();
    $('#settingsBtn').remove();
    $('#menuBtn').remove();
    doNotShow=true;
  }
}
function clearData(){
  if(confirm('Are you sure you want to clear current data/progress? They cannot be restored.')===true){
    localStorage.removeItem('PlugRPG');
    alert("Data should have been cleared. If the script doesn't restart, please refresh the page.");
    mainWindowClose();
    initialLoad();
  } else {
    alert('Data has not been cleared.');
  }
}
/*function notAvailableYet(){
  if(!$('#mainWindow').length){
    $('body').append('<div id="mainWindow" style="position:absolute; top:90px; right: 355px; height: 200px; width: 250px; background-color: black; border: 2.5px solid #2FC7FB; border-radius: 20px; opacity: .8; z-index: 100;"></div>');
    $('#mainWindow').append('<div id="mainWindowText" style="position:absolute; top:12px; left:3px; text-align:left;"></div>');
    $('body').append('<div id="closeButton" onclick="mainWindowClose()" style="position: absolute; top:84px; right:349px; height:20px; width:20px; background-color:black; color:white; opacity: 0.8; opacity:0.8; z-index:101; font-size=170%; text-align:center; border: 2.5px solid #2FC7FB; border-radius: 10px;">x</div>');
    $('#closeButton').hover(function(){$('#closeButton').css("cursor","pointer");},function(){$('#closeButton').css("cursor","auto");});
    $('#closeButton').hover(function(){$('#closeButton').css("box-shadow","0px 0px 5px 1px #FFFFFF inset");},function(){$('#closeButton').css("box-shadow","0px 0px 0px 0px #FFFFFF inset");});
    $('#mainWindow').append('<div id="hpDisp1" style="position:absolute; top:200px; height:20px; width:120px; background-color: black; border: 2.5px solid #2FC7FB; border-radius: 20px; opacity: .8; z-index: 100; text-align:center;"></div>');
    $('#hpDisp1').text(userHp + " / " + userMaxHp);
  }
  $('#mainWindowText').text("Sorry, this function is not yet available!");
}*/

//#mainUI

notShown=true;
function newWindow(){
  $('#miniGame').remove();
  $('#statTxt').remove();
  notShown=false;
  $('body').append('<div id="mainWindow" style="position:absolute; top:90px; right: 385px; height: 200px; width: 250px; background-color: black; border: 2.5px solid #2FC7FB; border-radius: 20px; opacity: .8; z-index: 100;"></div>');
  $('#mainWindow').append('<div id="mainWindowText" style="position:absolute; top:12px; left:3px; text-align:left; color:white;"></div>');
  $('body').append('<div id="closeButton" style="position: absolute; top:84px; right:379px; height:20px; width:20px; background-color:black; color:white; opacity: 0.8; opacity:0.8; z-index:101; font-size=170%; text-align:center; border: 2.5px solid #2FC7FB; border-radius: 10px;">x</div>');
  $('#closeButton').on('click',mainWindowClose);
  $('#closeButton').hover(function(){$('#closeButton').css("cursor","pointer");},function(){$('#closeButton').css("cursor","auto");});
  $('#closeButton').hover(function(){$('#closeButton').css("box-shadow","0px 0px 5px 1px #FFFFFF inset");},function(){$('#closeButton').css("box-shadow","0px 0px 0px 0px #FFFFFF inset");});
  //$('#mainWindow').append('<button id="battleButton" type="button" onclick="clinicText()" style="position:absolute; top:160px; left:2.5px; width:240px; height:30px; background-color:black; color:white; opacity: 0.8; text-align:center;">Battle!</button>');
  $('#mainWindow').append('<div id="hpDisp1" style="position:absolute; top:200px; height:20px; width:120px; background-color: black; border: 2.5px solid #2FC7FB; border-radius: 20px; opacity: .8; z-index: 100; text-align:center; color:white;"></div>');
  $('#hpDisp1').text(userHp + " / " + userMaxHp);
}
function showAlert(){
  if(!initial&&!doNotShow){
    $('body').append('<div id="miniGame" style="position:absolute; top:55px; right: 350px; height: 20px; width: 20px; background-color: red; border-radius:20px; opacity: 0.8; z-index: 100; font-size=500%; color: solid red; text-align: center;">!</div>');
    $('#miniGame').hover(function(){$('#miniGame').css("cursor","pointer");},function(){$('#miniGame').css("cursor","auto");});
    notShown=false;
    $('#miniGame').on('click',monsterEncounter);
  } else {
    console.log("Either first start is running or user is hiding the game.");
  }
}
function mainWindowClose(){
  if(initial!==true){
    $('#btn1').remove();   
    $('#btn2').remove();   
    $('#btn3').remove();   
    $('#btn4').remove();
    $('#mainWindow').remove();
    $('#closeButton').remove();
    $('#statTxt').remove();
    notShown=true;
  }
}

//#menu

maintenanceMode=false;
function menu(){
  $('#statTxt').remove();
  if(!$('#mainWindow').length){
    $('body').append('<div id="mainWindow" style="position:absolute; top:90px; right: 355px; height: 200px; width: 250px; background-color: black; border: 2.5px solid #2FC7FB; border-radius: 20px; opacity: .8; z-index: 100;"></div>');
    $('#mainWindow').append('<div id="mainWindowText" style="position:absolute; top:12px; left:3px; text-align:left;color:white;"></div>');
    $('body').append('<div id="closeButton" style="position: absolute; top:84px; right:349px; height:20px; width:20px; background-color:black; color:white; opacity: 0.8; z-index:101; font-size=170%; text-align:center; border: 2.5px solid #2FC7FB; border-radius: 10px;">x</div>');
    $('#closeButton').on('click',mainWindowClose);
    $('#closeButton').hover(function(){$('#closeButton').css("cursor","pointer");},function(){$('#closeButton').css("cursor","auto");});
    $('#closeButton').hover(function(){$('#closeButton').css("box-shadow","0px 0px 5px 1px #FFFFFF inset");},function(){$('#closeButton').css("box-shadow","0px 0px 0px 0px #FFFFFF inset");});
    $('#mainWindow').append('<div id="hpDisp1" style="position:absolute; top:200px; height:20px; width:120px; background-color: black; border: 2.5px solid #2FC7FB; border-radius: 20px; opacity: .8; z-index: 100; text-align:center;color:white;"></div>');
    $('#hpDisp1').text(userHp + " / " + userMaxHp);
  }
  $('#btn1').remove();   
  $('#btn2').remove();   
  $('#btn3').remove();   
  $('#btn4').remove();
  if(document.title==='Maintenance Mode'){
    buttons4();
    $('#btn4').on("click",stats).text('Stats');
    $('#btn1').on("click",clinic).text('Clinic');
    $('#btn2').on("click",monsterEncounter).text('Battle!');
    $('#btn3').on("click",mainWindowClose).text('Close');
  } else {
    buttons4();
    $('#btn4').on("click",stats).text('Stats');
    $('#btn1').on("click",clinic).text('Clinic');
    $('#btn2').on("click",bpDis).text('Hut');
    $('#btn3').on("click",mainWindowClose).text('Close');
  }
  $('#mainWindowText').text("");
}

//#menuItem_Stats

function stats(){
  $('#btn1').remove();   
  $('#btn2').remove();   
  $('#btn3').remove();   
  $('#btn4').remove();
  buttons1();
  $('#btn3').on("click",menu).text('Back to Menu');
  //$('body').append('<div id="statWindow" style="position:absolute; top:90px; right:355px; height: 140px; width: 150px; z-index: 101; opacity: .8;"></div>');
  $('#mainWindow').append('<div id="statTxt" style="position:absolute; top:3px; left:3px; height: 160px; width: 244px; z-index: 101; opacity: .8; color:white; text-align:left; overflow-y:scroll;"></div>');
  document.getElementById('statTxt').innerHTML="Level: "+userLevel+"<br>HP: "+userHp+"/"+userMaxHp+"<br>Attack: "+userAtk+"<br>Defense: "+userDef+"<br>Speed: "+userSpd+"<br>BP: "+bp+"<br>XP: "+userXp+"<br>Total Damage Done: "+totalDmgDone+"<br>Total Damage Taken: "+totalDmgTaken+"<br>Kills: "+kills+"<br>Deaths: "+deaths;
  /*$('#statWindow').append('<div id="statText0" style="position:absolute; top:22px; left:3px; text-align:left;"></div>');
  $('#statWindow').append('<div id="statText1" style="position:absolute; top:37px; left:3px; text-align:left;"></div>');
  $('#statWindow').append('<div id="statText2" style="position:absolute; top:52px; left:3px; text-align:left;"></div>');
  $('#statWindow').append('<div id="statText3" style="position:absolute; top:67px; left:3px; text-align:left;"></div>');
  $('#statWindow').append('<div id="statText4" style="position:absolute; top:82px; left:3px; text-align:left;"></div>');
  $('#statWindow').append('<div id="statText5" style="position:absolute; top:97px; left:3px; text-align:left;"></div>');
  $('#statWindow').append('<div id="statText6" style="position:absolute; top:112px; left:3px; text-align:left;"></div>');
  $('#statWindow').append('<div id="statText7" style="position:absolute; top:127px; left:3px; text-align:left;"></div>');
  $('#statWindow').append('<div id="statText8" style="position:absolute; top:7px; left:3px; text-align:left;"></div>');
  $('#statText8').text("Level: " + userLevel);
  $('#statText0').text("HP: " + userHp + "/" + userMaxHp);
  $('#statText1').text("Attack: " + userAtk);
  $('#statText2').text("Defense: " + userDef);
  $('#statText3').text("Speed: " + userSpd);
  $('#statText5').text("BP: " + bp);
  $('#statText4').text("XP: " + userXp);
  $('#statText6').text("Kills: " + kills);
  $('#statText7').text("Deaths: " + deaths);*/
}

//#menuItem_Clinic

function clinic(){
  $('#btn1').remove();   
  $('#btn2').remove();   
  $('#btn3').remove();   
  $('#btn4').remove();
  $('#mainWindowText').text("Welcome to the Clinic!");
  buttons2();
  $('#btn2').on("click",userMaxHeal).text('Rest');
  $('#btn3').on("click",menu).text('Back to Menu');
}
function userMaxHeal(){
  $('#btn2').remove();
  userHp = userMaxHp;
  $('#mainWindowText').text("You were fully healed!");
  checkHp();
}

//#menuItem_Hut

function bpDis(){
  $('#btn1').remove();   
  $('#btn2').remove();   
  $('#btn3').remove();   
  $('#btn4').remove();
  buttons3();
  f=-1;
  $('#btn1').on("click",bpDisText).text('Distribute BP');
  $('#btn2').on("click",bpShow).text('Current BP');
  $('#btn3').on("click",menu).text('Back to menu');
  $('#mainWindowText').text("Welcome to the sorcerer's hut! Here you can distribute your accumulated BP to your stats.");
}
function bpShow(){
  $('#btn1').remove();   
  $('#btn2').remove();   
  $('#btn3').remove();   
  $('#btn4').remove();
  buttons1();
  $('#btn3').on("click",bpDis).text('Back');
  $('#mainWindowText').text("You currently have " + bp + " BP.");
}
function bpDisText(){
  $('#btn1').remove();   
  $('#btn2').remove();   
  $('#btn3').remove();   
  $('#btn4').remove();
  if(bp<1){
    buttons1();
    f=-1;
    $('#btn3').on("click",menu).text('Back');
    $('#mainWindowText').text("Unfortunately, you only have " + bp + " BP, which is less than 1. Come back later!");
  } else {
    f=f+1;
    switch(f){
      case 0:
        addAtk=false;
        addDef=false;
        addSpd=false;
        addHp=false;
        $('#btn1').remove();   
        $('#btn2').remove();   
        $('#btn3').remove();   
        $('#btn4').remove();
        buttons4();
        $('#btn4').on("click",bpAtk).text('Attack');
        $('#btn1').on("click",bpDef).text('Defense');
        $('#btn2').on("click",bpSpd).text('Speed');
        $('#btn3').on("click",bpHp).text('HP');
        $('#mainWindowText').text("In which stat do you want to add BP?");
        break;
      case 1:
        buttons4();
        $('#btn4').on("click",bpPlus1).text('Add 1 BP');
        $('#btn1').on("click",bpPlus2).text('Add 2 BP');
        $('#btn2').on("click",bpPlus3).text('Add 3 BP');
        $('#btn3').on("click",bpPlus4).text('Add 4 BP');
        $('#mainWindowText').text("How much BP do you want to add?");
        break;
      case 2:
        buttons2();
        $('#btn2').on("click",bpDisText).text('Continue');
        $('#btn3').on("click",menu).text('Back to menu');
        f=-1;
        break;
      default:
        throw new Error("Your BP decided to jump out a window. (Error code: bDTd)");
    }
  }
}
function bpAtk(){
  addAtk=true;
  bpDisText();
}
function bpDef(){
  addDef=true;
  bpDisText();
}
function bpSpd(){
  addSpd=true;  
  bpDisText();
}
function bpHp(){
  addHp=true;
  bpDisText();
}
function bpPlus1(){
  bpPlus=1;
  bpAdd();
}
function bpPlus2(){
  bpPlus=2;
  bpAdd();
}
function bpPlus3(){
  bpPlus=3;
  bpAdd();
}
function bpPlus4(){
  bpPlus=4;
  bpAdd();
}
function bpAdd(){
  $('#btn1').remove();   
  $('#btn2').remove();   
  $('#btn3').remove();   
  $('#btn4').remove();
  buttons1();
  $('#btn3').on("click",bpDisText).text('Back');
  if(addAtk===true){
    if(bpPlus>bp){
      $('#mainWindowText').text("This is more than you currently have!");
      f=0;
    } else {
      userAtk = userAtk + bpPlus;
      bp = bp - bpPlus;
      $('#mainWindowText').text("Successfully added " + bpPlus + " points to your Attack stat.");
      f=1;
    }
  } else if(addDef===true){
    if(bpPlus>bp){
      $('#mainWindowText').text("This is more than you currently have!");
      f=0;
    } else {
      userDef = userDef + bpPlus;
      bp = bp - bpPlus;
      $('#mainWindowText').text("Successfully added " + bpPlus + " points to your Defense stat.");
      f=1;
    }
  } else if(addSpd===true){
    if(bpPlus>bp){
      $('#mainWindowText').text("This is more than you currently have!");
      f=0;
    } else {
      userSpd = userSpd + bpPlus;
      bp = bp - bpPlus;
      $('#mainWindowText').text("Successfully added " + bpPlus + " points to your Speed stat.");
      f=1;
    }
  } else if(addHp===true){
    if(bpPlus>bp){
      $('#mainWindowText').text("This is more than you currently have!");
      f=0;
    } else {
      userMaxHp = userMaxHp + bpPlus * 2;
      bp = bp - bpPlus;
      userHp = userMaxHp;
      $('#mainWindowText').text("Successfully added " + bpPlus*2 + " points to your HP stat. HP healed.");
      f=1;
    }
  }
}

//#initialLoad

function initialLoad(){
  if(typeof localStorage.PlugRPG==="undefined"){
    initial=true;
    if(!$('#mainWindow').length){
      $('body').append('<div id="mainWindow" style="position:absolute; top:90px; right: 355px; height: 200px; width: 250px; background-color: black; border: 2.5px solid #2FC7FB; border-radius: 20px; opacity: .8; z-index: 100;"></div>');
      $('#mainWindow').append('<div id="mainWindowText" style="position:absolute; top:12px; left:3px; text-align:left;color:white;"></div>');
      $('body').append('<div id="closeButton" style="position: absolute; top:84px; right:349px; height:20px; width:20px; background-color:black; color:white; opacity: 0.8; opacity:0.8; z-index:101; font-size=170%; text-align:center; border: 2.5px solid #2FC7FB; border-radius: 10px;">X</div>');
      $('#closeButton').on('click',mainWindowClose);
      $('#closeButton').hover(function(){$('#closeButton').css("cursor","pointer");},function(){$('#closeButton').css("cursor","auto");});
      $('#closeButton').hover(function(){$('#closeButton').css("box-shadow","0px 0px 5px 1px #FFFFFF inset");},function(){$('#closeButton').css("box-shadow","0px 0px 0px 0px #FFFFFF inset");});
      $('#mainWindow').append('<div id="hpDisp1" style="position:absolute; top:200px; height:20px; width:120px; background-color: black; border: 2.5px solid #2FC7FB; border-radius: 20px; opacity: .8; z-index: 100; text-align:center;color:white;"></div>');
      $('#hpDisp1').text(userHp + " / " + userMaxHp);
    }
    l=-1;
    $('#btn1').remove();   
    $('#btn2').remove();   
    $('#btn3').remove();   
    $('#btn4').remove();
    buttons1();
    $('#btn3').on("click",initialLoadTxt).text('Continue');
    $('#mainWindowText').text("It seems you haven't played this before. Let's set you up!");
  } else {
    console.log("Type: " + typeof(localStorage.PlugRPG) + ". It doesn't return undefined and therefore has been ignored.");
    if(doNotShow!==true){
      settingsButton();
      menuButton();
    } else {
      console.log("Game is hidden by user.");
    }
  }
}
function initialLoadTxt(){
  l=l+1;
  switch(l){
    case 0:
      $('#mainWindowText').text("Let's determine your stats, " + userName + "!");
      break;
    case 1:
      bp = initialBp;
      $('#mainWindowText').text("You have " + bp + " BP to distribute in your stats. Note: 1 point in HP will give +2 HP.");
      userLevel = 1;
      userAtk = 1;
      userDef = 1;
      userSpd = 1;
      userHp = 10;
      userMaxHp = 10;
      userXp = 0;
      kills = 0;
      deaths = 0;
      break;
    case 2:
      l=-1;
      initial=false;
      menuButton();
      settingsButton();
      bpDisText();
      break;
    default:
      l=-1;
      throw new Error('The game jumped out a window. (Error code: iLS)');
  }
}

//#battleEncounter

function monsterEncounter(){
  $('#statTxt').remove();
  $('#miniGame').remove();
  if(!$('#mainWindow').length){
    $('body').append('<div id="mainWindow" style="position:absolute; top:90px; right: 355px; height: 200px; width: 250px; background-color: black; border: 2.5px solid #2FC7FB; border-radius: 20px; opacity: .8; z-index: 100;"></div>');
    $('#mainWindow').append('<div id="mainWindowText" style="position:absolute; top:12px; left:3px; text-align:left;color:white;"></div>');
    $('body').append('<div id="closeButton" style="position: absolute; top:84px; right:349px; height:20px; width:20px; background-color:black; color:white; opacity: .8; z-index:101; font-size=170%; text-align:center; border: 2.5px solid #2FC7FB; border-radius: 10px;">X</div>');
    $('#closeButton').on('click',mainWindowClose);
    $('#closeButton').hover(function(){$('#closeButton').css("cursor","pointer");},function(){$('#closeButton').css("cursor","auto");});
    $('#closeButton').hover(function(){$('#closeButton').css("box-shadow","0px 0px 5px 1px #FFFFFF inset");},function(){$('#closeButton').css("box-shadow","0px 0px 0px 0px #FFFFFF inset");});
    $('#mainWindow').append('<div id="hpDisp1" style="position:absolute; top:200px; height:20px; width:120px; background-color: black; border: 2.5px solid #2FC7FB; border-radius: 20px; opacity: .8; z-index: 100; text-align:center;color:white;"></div>');
    $('#hpDisp1').text(userHp + " / " + userMaxHp);
  }
  $('#statTxt').remove();
  $('#btn1').remove();   
  $('#btn2').remove();   
  $('#btn3').remove();   
  $('#btn4').remove();
  monsterLevel = Math.floor(Math.random()*(Math.floor(userLevel*0.8)))+(((Math.floor(userLevel*1.2-userLevel))*2)+1);
  var monsterSelect = monsters0[Math.floor(Math.random()*monsters0.length)];
  if (userHp <= 0) {
    buttons2();
    $('#mainWindowText').text("You cannot battle monsters when you're dead! You should go to the Clinic.");
    $('#btn2').on("click",clinic).text('Go to the Clinic');
    $('#btn3').on("click",menu).text('Back');
  } else {
    monsterData(monsterSelect);
    monsterStats();
  }
}
function monsterStats(){
  console.log("monsterStats() is now running.");
  console.log("Monster's type is '" + type + "'.");
  if(type==='Balanced'){
    mDisSelect = ['matk','matk','mdef','mdef','mspd','mhp','mhp'];
  } else if(type==='Offensive'){
    mDisSelect = ['matk','matk','matk','mdef','mdef','mspd','mhp','mhp'];
  } else if(type==='Defensive'){
    mDisSelect = ['matk','matk','mdef','mdef','mdef','mspd','mhp','mhp'];
  } else if(type==='Quick'){
    mDisSelect = ['matk','matk','mdef','mdef','mspd','mspd','mspd','mhp','mhp'];
  } else if(type==='Healthy'){
    mDisSelect = ['matk','matk','mdef','mdef','mspd','mhp','mhp','mhp'];
  } else if(type==='Tanky'){
    mDisSelect = ['matk','matk','mdef','mdef','mdef','mspd','mhp','mhp','mhp'];
  } else if(type==='Aggressive'){
    mDisSelect = ['matk','matk','matk','mdef','mspd','mhp'];
  } else {
    console.log("Something went wrong with the monster type.");
  }
  mDisPoints = monsterLevel-1;
  if(monsterLevel<1){
    monsterLevel=1;
    console.log("Monster level is under 1, therefore it has been set to 1.");
  } else {
    console.log("Monster level is not under 1.");
  }
  monsterLevelStats();
}
function monsterLevelStats(){
  console.log("monsterLevelStats() is now running.");
  mDisStatSelect = mDisSelect[(Math.floor(Math.random()*mDisSelect.length))];
  if(mDisPoints<1){
    console.log("Finished distributing monster stats.");
    mDisPoints=0;
    mHp = hp;
    buttons1();
    $('#mainWindowText').text("You encountered " + prefixx + " " + monsterName + "!");
    $('#btn3').on("click",battle).text('To battle!');
  } else {
    if(mDisStatSelect==='matk'){
      atk=atk+1;
      mDisPoints=mDisPoints-1;
      console.log("Added a point in atk stat. Remaining mDisPoints: "+mDisPoints);
    } else if(mDisStatSelect==='mdef'){
      def=def+1;
      mDisPoints=mDisPoints-1;
      console.log("Added a point in def stat. Remaining mDisPoints: "+mDisPoints);
    } else if(mDisStatSelect==='mspd'){
      spd=spd+1;
      mDisPoints=mDisPoints-1;
      console.log("Added a point in spd stat. Remaining mDisPoints: "+mDisPoints);
    } else if(mDisStatSelect==='mhp'){
      hp=hp+2;
      mDisPoints=mDisPoints-1;
      console.log("Added a point in hp stat. Remaining mDisPoints: "+mDisPoints);
    } else {
      throw new Error("Something went wrong. (Error ID: mLS)");
    }
    console.log("Should now loop monsterLevelStats().");
    monsterLevelStats();
  }
}

//#battleSelectAction

function battle(){
  console.log("User selection state.");
  $('#mainWindowText').text('');
  userDmg = (Math.floor(Math.random() * ((userAtk * 1.5) + 1))) + (userAtk / 2);
  monsterDmg = (Math.floor(Math.random() * ((atk * 1.5) + 1))) + (atk / 2);
  d=-1;
  battleD=false;
  $('#btn1').remove();   
  $('#btn2').remove();   
  $('#btn3').remove();   
  $('#btn4').remove();
  buttons3();
  $('#btn1').on("click",battleAttack).text('Attack');
  $('#btn2').on("click",battleDefend).text('Defend');
  $('#btn3').on("click",battleFlee).text('Flee');
}
/*function hpDisplay(){
  if(!$('#hpDisp2').length){
    $('#mainWindow').append('<div id="hpDisp2" style="position:absolute; top:200px; right:125px; height:20px; width:120px; background-color: black; border: 2.5px solid #2FC7FB; border-radius: 20px; opacity: .8; z-index: 100; text-align:center;"></div>');
    $('#hpDisp2').text(hp + " / " + mHp);
  } else {
    $('#hpDisp2').remove();
  }
}*/

//#battleAction

function battleAttack(){
  console.log("User has chosen to Attack.");
  $('#btn1').remove();   
  $('#btn2').remove();   
  $('#btn3').remove();   
  $('#btn4').remove();
  if(userSpd>spd){
    console.log("User is faster than monster.");
    d=0;
    battleU();
  } else if(userSpd<spd){
    console.log("User is slower than monster.");
    d=1;
    battleM();
  } else if(userSpd===spd){
    ans = Math.floor(Math.random() * 2);
    console.log("User is same speed as monster. (" + ans +")");
    if(ans===0){
      console.log("It has been determined that user is faster than monster.");
      d=0;
      battleU();
    } else if(ans===1){
      console.log("It has been determined that user is slower than monster.");
      d=1;
      battleM();
    }
  }
}
function battleDefend(){
  console.log("User has chosen to Defend.");
  $('#btn1').remove();   
  $('#btn2').remove();   
  $('#btn3').remove();   
  $('#btn4').remove();
  battleD=true;
  console.log("User's defending state is set to: " + battleD);
  battleM();
}
function battleFlee(){
  console.log("User has chosen to flee.");
  $('#btn1').remove();   
  $('#btn2').remove();   
  $('#btn3').remove();   
  $('#btn4').remove();
  buttons1();
  if(Math.round(Math.random())===1){
    console.log("User has successfully fled.");
    $('#mainWindowText').text("You successfully fled!");
    $('#btn3').on("click",menu).text('Back to Menu');
  } else {
    console.log("User failed to flee.");
    d=0;
    $('#mainWindowText').text("You tried to flee but tripped on a rock!");
    $('#btn3').on("click",battleM).text('Continue');
  }
}

//#battleText

function battleU(){
  console.log("User is now attacking.");
  $('#btn1').remove();   
  $('#btn2').remove();   
  $('#btn3').remove();   
  $('#btn4').remove();
  buttons1();
  c=-1;
  lastGivenHit = userDmg - def;
  if (lastGivenHit < 1) {
    console.log("Damage was " + lastGivenHit + " and was set to 1.");
    lastGivenHit = 1;
  }
  hp = hp - lastGivenHit;
  totalDmgDone = totalDmgDone+lastGivenHit;
  console.log("User dealt " + lastGivenHit + " dmg. Monster's remaining HP: " + hp);
  $('#mainWindowText').text("You attacked the " + monsterName + " and hit for " + lastGivenHit + " damage!");
  $('#btn3').on("click",battleTxtU).text('Continue');
}
function checkHpM(){
  console.log("Checking monster's HP.");
  if (hp <= 0) {
    console.log("Monster's HP is under 0.");
    //hpDisplay();
    $('#mainWindowText').text("You defeated the monster! Congratulations!");
    kills = kills +1;
  } else {
    console.log("Monster's HP is not under 0. Proceeding to next step.");
    c=6;
    battleTxtU();
  }
}
function battleTxtU(){
  console.log("battleTxtU");
  c=c+1;
  switch(c){
    case 0:
      checkHpM();
      break;
    case 1:
      bpArray.push(bpGained);
      $('#mainWindowText').text("You gained " + bpArray[0] + " bp!");
      bp = bp + bpArray[0];
      bpArray.pop();
      break;
    case 2:
      userXp = userXp + 2 * (atk + def + spd + monsterLevel);
      $('#mainWindowText').text("You gained " + (atk + def + spd + monsterLevel) * 2 + " xp!");
      nextLvl = Math.pow((userLevel + 1),2) * xpModifier;
      if (userXp >= nextLvl) {
        c=c+1;
      } 
      break;
    case 3:
      c=-1;
      menu();
      break;
    case 4:
      $('#mainWindowText').text("Congratulations! You levelled up!");
      userLevel = userLevel + 1;
      break;
    case 5:
      $('#mainWindowText').text("You gained 1 BP!");
      bp = bp + 1;
      c=2;
      break;
    case 7:
      console.log("Now checking if monster or user went first.");
      if(d===0){
        console.log("User went first, therefore it is the monster's turn.");
        battleM();
      } else if(d===1){
        console.log("User went last, therefore the user must choose the next action.");
        battle();
      } else {
        throw new Error("Something jumped from a bridge and never came back. (Error ID: BU)");
      }
      break;
    default:
      throw new Error("Something jumped from a bridge and never came back. (Error ID: CU)");
  }
}
function battleM(){
  console.log("Entering monster's battle state.");
  $('#btn1').remove();   
  $('#btn2').remove();   
  $('#btn3').remove();   
  $('#btn4').remove();
  buttons1();
  c=-1;
  if(battleD===true){
    console.log("User is defending.");
    lastReceivedHit = monsterDmg - userDef*1.2;
  } else if(battleD===false){
    console.log("User is not defending.");
    lastReceivedHit = monsterDmg - userDef;
  }
  if (lastReceivedHit < 1) {
    lastReceivedHit = 1;
  }
  totalDmgTaken = totalDmgTaken+lastReceivedHit;
  userHp = userHp - lastReceivedHit;
  checkHp();
  console.log("Monster's damage was " + lastReceivedHit + ". User's remaining HP is " + userHp);
  $('#mainWindowText').text("The " + monsterName + " hit you for " + lastReceivedHit + " damage!");
  $('#btn3').on("click",battleTxtM).text('Continue');
}
function checkHpU(){
  console.log("Now checking user's HP.");
  if (userHp <= 0) {
    console.log("User is dead.");
    //hpDisplay();
    $('#mainWindowText').text("You died!");
    deaths = deaths +1;
  } else {
    console.log("User is still alive. Proceeding to next step.");
    c=c+1;
    battleTxtM();
  }
}
function battleTxtM(){
  console.log("battleTxtM");
  c=c+1;
  switch(c){
    case 0:
      checkHpU();
      break;
    case 1:
      menu();
      break;
    case 2:
      if(d===0||battleD===true){
        battle();
      } else if(d===1){
        battleU();
      } else {
        throw new Error("Something jumped from a bridge and never came back. (Error ID: BM)");
      }
      break;
    default:
      throw new Error("Something jumped from a bridge and never came back. (Error ID: CM)");
  }
}

//#monsterData

function monsterData(id){
    if (id === 'id00') {
        atk = (Math.floor(Math.random() * 3)) + 2; //2-4
        def = (Math.floor(Math.random() * 2)) + 0; //0-1
        spd = (Math.floor(Math.random() * 3)) + 1; //1-3
        hp = (Math.floor(Math.random() * 3)) + 10; //10-12
        type = 'Balanced';
        prefixx = 'a';
        monsterName = 'Slime';
    } else if (id === 'id01') {
        atk = (Math.floor(Math.random() * 4)) + 1; //1-4
        def = (Math.floor(Math.random() * 3)) + 1; //1-3
        spd = (Math.floor(Math.random() * 0)) + 2; //2-2
        hp = (Math.floor(Math.random() * 25)) + 1; //1-25
        type = 'Balanced';
        prefixx = 'a';
        monsterName = 'Chicken';
    } else if (id === 'id02') {
        atk = (Math.floor(Math.random() * 2)) + 2; //2-3
        def = (Math.floor(Math.random() * 3)) + 0; //0-2
        spd = (Math.floor(Math.random() * 2)) + 1; //1-2
        hp = (Math.floor(Math.random() * 5)) + 10; //10-14
        type = 'Healthy';
        prefixx = 'a';
        monsterName = 'Dead Baby';
    } else if (id === 'id03') {
        atk = (Math.floor(Math.random() * 3)) + 1; //1-3
        def = (Math.floor(Math.random() * 3)) + 0; //0-2
        spd = (Math.floor(Math.random() * 0)) + 3; //3-3
        hp = (Math.floor(Math.random() * 6)) + 7;  //7-12
        type = 'Quick';
        prefixx = 'a';
        monsterName = 'Road Runner';
    } else if (id === 'id04') {
        atk = (Math.floor(Math.random() * 2)) + 3; //3-4
        def = (Math.floor(Math.random() * 2)) + 0; //0-1
        spd = (Math.floor(Math.random() * 2)) + 1; //1-2
        hp = (Math.floor(Math.random() * 3)) + 8;  //8-10
        type = 'Balanced';
        prefixx = 'a';
        monsterName = 'Dancing Chicken';
    } else if (id === 'id05') {
        atk = (Math.floor(Math.random() * 0)) + 1;
        def = (Math.floor(Math.random() * 0)) + 1;
        spd = (Math.floor(Math.random() * 0)) + 1;
        hp = (Math.floor(Math.random() * 0)) + 10;
        type = 'Balanced';
        prefixx = 'an';
        monsterName = 'undefined05';
    } else if (id === 'id06') {
        atk = (Math.floor(Math.random() * 0)) + 1;
        def = (Math.floor(Math.random() * 0)) + 1;
        spd = (Math.floor(Math.random() * 0)) + 1;
        hp = (Math.floor(Math.random() * 0)) + 10;
        type = 'Balanced';
        prefixx = 'an';
        monsterName = 'undefined06';
    } else if (id === 'id07') {
        atk = (Math.floor(Math.random() * 0)) + 1;
        def = (Math.floor(Math.random() * 0)) + 1;
        spd = (Math.floor(Math.random() * 0)) + 1;
        hp = (Math.floor(Math.random() * 0)) + 10;
        type = 'Balanced';
        prefixx = 'an';
        monsterName = 'undefined07';
    } else if (id === 'id08') {
        atk = (Math.floor(Math.random() * 0)) + 1;
        def = (Math.floor(Math.random() * 0)) + 1;
        spd = (Math.floor(Math.random() * 0)) + 1;
        hp = (Math.floor(Math.random() * 0)) + 10;
        type = 'Balanced';
        prefixx = 'an';
        monsterName = 'undefined08';
    } else if (id === 'id09') {
        atk = (Math.floor(Math.random() * 0)) + 1;
        def = (Math.floor(Math.random() * 0)) + 1;
        spd = (Math.floor(Math.random() * 0)) + 1;
        hp = (Math.floor(Math.random() * 0)) + 10;
        type = 'Balanced';
        prefixx = 'an';
        monsterName = 'undefined09';
    } else if (id === 'id10') {
        atk = (Math.floor(Math.random() * 0)) + 1;
        def = (Math.floor(Math.random() * 0)) + 1;
        spd = (Math.floor(Math.random() * 0)) + 1;
        hp = (Math.floor(Math.random() * 0)) + 10;
        type = 'Balanced';
        prefixx = 'an';
        monsterName = 'Baby Golem';
    } else if (id === 'id11') {
        atk = (Math.floor(Math.random() * 0)) + 1;
        def = (Math.floor(Math.random() * 0)) + 1;
        spd = (Math.floor(Math.random() * 0)) + 1;
        hp = (Math.floor(Math.random() * 0)) + 10;
        type = 'Balanced';
        prefixx = 'an';
        monsterName = 'undefine11';
    } else if (id === 'id12') {
        atk = (Math.floor(Math.random() * 0)) + 1;
        def = (Math.floor(Math.random() * 0)) + 1;
        spd = (Math.floor(Math.random() * 0)) + 1;
        hp = (Math.floor(Math.random() * 0)) + 10;
        type = 'Balanced';
        prefixx = 'an';
        monsterName = 'undefined12';
    } else if (id === 'id13') {
        atk = (Math.floor(Math.random() * 0)) + 1;
        def = (Math.floor(Math.random() * 0)) + 1;
        spd = (Math.floor(Math.random() * 0)) + 1;
        hp = (Math.floor(Math.random() * 0)) + 10;
        type = 'Balanced';
        prefixx = 'an';
        monsterName = 'undefined13';
    } else if (id === 'id14') {
        atk = (Math.floor(Math.random() * 0)) + 1;
        def = (Math.floor(Math.random() * 0)) + 1;
        spd = (Math.floor(Math.random() * 0)) + 1;
        hp = (Math.floor(Math.random() * 0)) + 10;
        type = 'Balanced';
        prefixx = 'an';
        monsterName = 'undefined14';
    } else if (id === 'id15') {
        atk = (Math.floor(Math.random() * 0)) + 1;
        def = (Math.floor(Math.random() * 0)) + 1;
        spd = (Math.floor(Math.random() * 0)) + 1;
        hp = (Math.floor(Math.random() * 0)) + 10;
        type = 'Balanced';
        prefixx = 'an';
        monsterName = 'undefined15';
    } else if (id === 'id16') {
        atk = (Math.floor(Math.random() * 0)) + 1;
        def = (Math.floor(Math.random() * 0)) + 1;
        spd = (Math.floor(Math.random() * 0)) + 1;
        hp = (Math.floor(Math.random() * 0)) + 10;
        type = 'Balanced';
        prefixx = 'an';
        monsterName = 'undefined16';
    } else if (id === 'id17') {
        atk = (Math.floor(Math.random() * 0)) + 1;
        def = (Math.floor(Math.random() * 0)) + 1;
        spd = (Math.floor(Math.random() * 0)) + 1;
        hp = (Math.floor(Math.random() * 0)) + 10;
        type = 'Balanced';
        prefixx = 'an';
        monsterName = 'undefined17';
    } else if (id === 'id18') {
        atk = (Math.floor(Math.random() * 0)) + 1;
        def = (Math.floor(Math.random() * 0)) + 1;
        spd = (Math.floor(Math.random() * 0)) + 1;
        hp = (Math.floor(Math.random() * 0)) + 10;
        type = 'Balanced';
        prefixx = 'an';
        monsterName = 'undefined18';
    } else if (id === 'id19') {
        atk = (Math.floor(Math.random() * 0)) + 1;
        def = (Math.floor(Math.random() * 0)) + 1;
        spd = (Math.floor(Math.random() * 0)) + 1;
        hp = (Math.floor(Math.random() * 0)) + 10;
        type = 'Balanced';
        prefixx = 'an';
        monsterName = 'undefined19';
    } else if (id === 'id20') {
        atk = (Math.floor(Math.random() * 0)) + 1;
        def = (Math.floor(Math.random() * 0)) + 1;
        spd = (Math.floor(Math.random() * 0)) + 1;
        hp = (Math.floor(Math.random() * 0)) + 10;
        type = 'Balanced';
        prefixx = 'an';
        monsterName = 'undefined20';
    } else if (id === 'id21') {
        atk = (Math.floor(Math.random() * 0)) + 1;
        def = (Math.floor(Math.random() * 0)) + 1;
        spd = (Math.floor(Math.random() * 0)) + 1;
        hp = (Math.floor(Math.random() * 0)) + 10;
        type = 'Balanced';
        prefixx = 'an';
        monsterName = 'undefined21';
    } else if (id === 'id22') {
        atk = (Math.floor(Math.random() * 0)) + 1;
        def = (Math.floor(Math.random() * 0)) + 1;
        spd = (Math.floor(Math.random() * 0)) + 1;
        hp = (Math.floor(Math.random() * 0)) + 10;
        type = 'Balanced';
        prefixx = 'an';
        monsterName = 'undefined22';
    } else if (id === 'id23') {
        atk = (Math.floor(Math.random() * 0)) + 1;
        def = (Math.floor(Math.random() * 0)) + 1;
        spd = (Math.floor(Math.random() * 0)) + 1;
        hp = (Math.floor(Math.random() * 0)) + 10;
        type = 'Balanced';
        prefixx = 'an';
        monsterName = 'undefined23';
    } else if (id === 'id24') {
        atk = (Math.floor(Math.random() * 0)) + 1;
        def = (Math.floor(Math.random() * 0)) + 1;
        spd = (Math.floor(Math.random() * 0)) + 1;
        hp = (Math.floor(Math.random() * 0)) + 10;
        type = 'Balanced';
        prefixx = 'an';
        monsterName = 'undefined24';
    } else if (id === 'id25') {
        atk = (Math.floor(Math.random() * 0)) + 1;
        def = (Math.floor(Math.random() * 0)) + 1;
        spd = (Math.floor(Math.random() * 0)) + 1;
        hp = (Math.floor(Math.random() * 0)) + 10;
        type = 'Balanced';
        prefixx = 'an';
        monsterName = 'undefined25';
    } else if (id === 'id26') {
        atk = (Math.floor(Math.random() * 0)) + 1;
        def = (Math.floor(Math.random() * 0)) + 1;
        spd = (Math.floor(Math.random() * 0)) + 1;
        hp = (Math.floor(Math.random() * 0)) + 10;
        type = 'Balanced';
        prefixx = 'an';
        monsterName = 'undefined26';
    } else if (id === 'id27') {
        atk = (Math.floor(Math.random() * 0)) + 1;
        def = (Math.floor(Math.random() * 0)) + 1;
        spd = (Math.floor(Math.random() * 0)) + 1;
        hp = (Math.floor(Math.random() * 0)) + 10;
        type = 'Balanced';
        prefixx = 'an';
        monsterName = 'undefined27';
    } else if (id === 'id28') {
        atk = (Math.floor(Math.random() * 0)) + 1;
        def = (Math.floor(Math.random() * 0)) + 1;
        spd = (Math.floor(Math.random() * 0)) + 1;
        hp = (Math.floor(Math.random() * 0)) + 10;
        type = 'Balanced';
        prefixx = 'an';
        monsterName = 'undefined28';
    } else if (id === 'id29') {
        atk = (Math.floor(Math.random() * 0)) + 1;
        def = (Math.floor(Math.random() * 0)) + 1;
        spd = (Math.floor(Math.random() * 0)) + 1;
        hp = (Math.floor(Math.random() * 0)) + 10;
        type = 'Balanced';
        prefixx = 'an';
        monsterName = 'undefined29';
    } else if (id === 'idI00') {
        atk = (Math.floor(Math.random() * 6)) + 2; //2-7
        def = (Math.floor(Math.random() * 0)) + 0; //0-0
        spd = (Math.floor(Math.random() * 3)) + 1; //1-3
        hp = (Math.floor(Math.random() * 4)) + 4;  //4-7
        type = 'Aggressive';
        prefixx = '';
        monsterName = 'Kaboom0';
    }
    
}

//#initialFunctions

initialLoad();
})();
