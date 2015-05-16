var monsters0 = ['id00','id01','id02','id03','id04','id05','id06','id07','id08','id09'];
var monsters1 = ['id10','id11','id12','id13','id14','id15','id16','id17','id18','id19'];
var monsters2 = ['id20','id21','id22','id23','id24','id25','id26','id27','id28','id29'];
var atk = 0;
var def = 0;
var spd = 0;
var hp = 0;
var lvlGrowth = 0;
var monsterName = 'Something went wrong';
var bp = ((Math.floor(Math.random()*100)/1000)*(Math.floor(Math.random()*10)));
var monsterLevel = 17;
var userName = 'not set';
var userLevel = 20;
var userAtk = 13;
var userDef = 6;
var userSpd = 3;
var userHp = 19;
var userBpPerLevel = 1.5;
var xpModifier = 96;
var nextLvl = (userLevel+1)^2*xpModifier;
var initialBp = (Math.floor(Math.random()*10))+5;
var userXp = 0;
var levelUpBp = 0;
var dmgDealt = userAtk-atk;

function initialLoad(){
  if(1===1/*localstorageisnotpresent*/){
    console.log("It seems you haven't played this before. Let's create your character!");
    userName = prompt('What is your name, adventurer?');
    console.log("Hello there, " + userName + "! Let's now determine your stats.");
    /*Here, use jQuery to make choice buttons and add up to a maximum of initialBp points to 1 stat.*/
    console.log("Now, on what difficulty do you want to play?");
    /*Here, use jQuery to make choice button between Normal and Hard.*/
    /*Here, use jQuery to determine the choice made by the user. The choice in this if should be Normal.*/
    console.log("Huh, so you chose the "/*insert difficulty choice here*/ + " difficulty, huh? Alright then! Let's get started, " + userName + "!");
  }
}
function monsterEncounter(){
  var monsterSelect = monsters0[Math.floor(Math.random()*monsters0.length)];
  //if('monsters'+(monsterGroupSelect) === undefined){
    //console.log('Something went wrong! :(');
  //} else {
    monsterData(monsterSelect);
    /*console.log('Chosen Monster: ' + monsterName);
    console.log('Attack Stat: ' + atk);
    console.log('Defense Stat: ' + def);
    console.log('Speed Stat: ' + spd);
    console.log('HP Stat: ' + hp);
    console.log('Stats Growth: ' + ((lvlGrowth*100)-100) + '%');
    console.log('BP gained: ' + bp);*/
    console.log('Monster level: ' + monsterLevel)
  //}
}
function battle(){
  monsterEncounter();
  /*Here, use jQuery to make 3 buttons: Attack, Defend and Flee.*/
  console.log("You attacked " + monsterName + " and hit for " + dmgDealt + "!");
  
}
function levelUp(){
  if(userXp >= nextLvl){
    console.log("Congratulations! You levelled up!");
    if(userLevel/2 === Math.floor(userLevel/2)){
      levelUpBp = 2;
      console.log("You gained 2 Bonus Points! Distribute them in your stats.");
      /*Here, use jQuery to make choice buttons as in initialLoad(); to a maximum of 2 points.*/
    } else {
      levelUpBp = 1;
      console.log("You gained 1 Bonus Point! Distribute it in your stats.");
      /*Here, use jQuery to make choice buttons as in initialLoad(); to a maximum of 1 point.*/
    }
  }
}

function monsterData(id){
  if (id === 'id00'){
    atk = (Math.floor(Math.random()*4))+5; //5-8
    def = (Math.floor(Math.random()*0))+1; //1-1
    spd = (Math.floor(Math.random()*3))+1; //1-3
    hp = (Math.floor(Math.random()*3))+10; //10-12
    lvlGrowth = 1.15;
    monsterName = 'Racist Image Link';
  } else if (id === 'id01'){
    atk = (Math.floor(Math.random()*4))+1; //1-4
    def = (Math.floor(Math.random()*3))+1; //1-3
    spd = (Math.floor(Math.random()*0))+2; //2-2
    hp = (Math.floor(Math.random()*25))+1; //1-25
    lvlGrowth = 1.09;
    monsterName = 'Worthless Grey User';
  } else if(id === 'id02'){
    atk = (Math.floor(Math.random()*3))+3; //3-5
    def = (Math.floor(Math.random()*2))+1; //1-2
    spd = (Math.floor(Math.random()*2))+1; //1-2
    hp = (Math.floor(Math.random()*5))+10; //10-14
    lvlGrowth = 1.12;
    monsterName = 'Bad Grey Troll';
  } else if(id === 'id03'){
    atk = (Math.floor(Math.random()*0))+1; 
    def = (Math.floor(Math.random()*0))+1;
    spd = (Math.floor(Math.random()*0))+1;
    hp = (Math.floor(Math.random()*0))+10;
    lvlGrowth = 1.04;
    monsterName = 'Spammy Hacker Troll';
  } else if(id === 'id04'){
    atk = (Math.floor(Math.random()*0))+1;
    def = (Math.floor(Math.random()*0))+1;
    spd = (Math.floor(Math.random()*0))+1;
    hp = (Math.floor(Math.random()*0))+10;
    lvlGrowth = 1.00;
    monsterName = 'undefined04';
  } else if(id === 'id05'){
    atk = (Math.floor(Math.random()*0))+1;
    def = (Math.floor(Math.random()*0))+1;
    spd = (Math.floor(Math.random()*0))+1;
    hp = (Math.floor(Math.random()*0))+10;
    lvlGrowth = 1.00;
    monsterName = 'undefined05';
  } else if(id === 'id06'){
    atk = (Math.floor(Math.random()*0))+1;
    def = (Math.floor(Math.random()*0))+1;
    spd = (Math.floor(Math.random()*0))+1;
    hp = (Math.floor(Math.random()*0))+10;
    lvlGrowth = 1.00;
    monsterName = 'undefined06';
  } else if(id === 'id07'){
    atk = (Math.floor(Math.random()*0))+1;
    def = (Math.floor(Math.random()*0))+1;
    spd = (Math.floor(Math.random()*0))+1;
    hp = (Math.floor(Math.random()*0))+10;
    lvlGrowth = 1.00;
    monsterName = 'undefined07';
  } else if(id === 'id08'){
    atk = (Math.floor(Math.random()*0))+1;
    def = (Math.floor(Math.random()*0))+1;
    spd = (Math.floor(Math.random()*0))+1;
    hp = (Math.floor(Math.random()*0))+10;
    lvlGrowth = 1.00;
    monsterName = 'undefined08';
  } else if(id === 'id09'){
    atk = (Math.floor(Math.random()*0))+1;
    def = (Math.floor(Math.random()*0))+1;
    spd = (Math.floor(Math.random()*0))+1;
    hp = (Math.floor(Math.random()*0))+10;
    lvlGrowth = 1.00;
    monsterName = 'undefined09';
  } else if(id === 'id10'){
    atk = (Math.floor(Math.random()*0))+1;
    def = (Math.floor(Math.random()*0))+1;
    spd = (Math.floor(Math.random()*0))+1;
    hp = (Math.floor(Math.random()*0))+10;
    lvlGrowth = 1.00;
    monsterName = 'Baby Golem';
  } else if(id === 'id11'){
    atk = (Math.floor(Math.random()*0))+1;
    def = (Math.floor(Math.random()*0))+1;
    spd = (Math.floor(Math.random()*0))+1;
    hp = (Math.floor(Math.random()*0))+10;
    lvlGrowth = 1.00;
    monsterName = 'undefine11';
  } else if(id === 'id12'){
    atk = (Math.floor(Math.random()*0))+1;
    def = (Math.floor(Math.random()*0))+1;
    spd = (Math.floor(Math.random()*0))+1;
    hp = (Math.floor(Math.random()*0))+10;
    lvlGrowth = 1.00;
    monsterName = 'undefined12';
  } else if(id === 'id13'){
    atk = (Math.floor(Math.random()*0))+1;
    def = (Math.floor(Math.random()*0))+1;
    spd = (Math.floor(Math.random()*0))+1;
    hp = (Math.floor(Math.random()*0))+10;
    lvlGrowth = 1.00;
    monsterName = 'undefined13';
  } else if(id === 'id14'){
    atk = (Math.floor(Math.random()*0))+1;
    def = (Math.floor(Math.random()*0))+1;
    spd = (Math.floor(Math.random()*0))+1;
    hp = (Math.floor(Math.random()*0))+10;
    lvlGrowth = 1.00;
    monsterName = 'undefined14';
  } else if(id === 'id15'){
    atk = (Math.floor(Math.random()*0))+1;
    def = (Math.floor(Math.random()*0))+1;
    spd = (Math.floor(Math.random()*0))+1;
    hp = (Math.floor(Math.random()*0))+10;
    lvlGrowth = 1.00;
    monsterName = 'undefined15';
  } else if(id === 'id16'){
    atk = (Math.floor(Math.random()*0))+1;
    def = (Math.floor(Math.random()*0))+1;
    spd = (Math.floor(Math.random()*0))+1;
    hp = (Math.floor(Math.random()*0))+10;
    lvlGrowth = 1.00;
    monsterName = 'undefined16';
  } else if(id === 'id17'){
    atk = (Math.floor(Math.random()*0))+1;
    def = (Math.floor(Math.random()*0))+1;
    spd = (Math.floor(Math.random()*0))+1;
    hp = (Math.floor(Math.random()*0))+10;
    lvlGrowth = 1.00;
    monsterName = 'undefined17';
  } else if(id === 'id18'){
    atk = (Math.floor(Math.random()*0))+1;
    def = (Math.floor(Math.random()*0))+1;
    spd = (Math.floor(Math.random()*0))+1;
    hp = (Math.floor(Math.random()*0))+10;
    lvlGrowth = 1.00;
    monsterName = 'undefined18';
  } else if(id === 'id19'){
    atk = (Math.floor(Math.random()*0))+1;
    def = (Math.floor(Math.random()*0))+1;
    spd = (Math.floor(Math.random()*0))+1;
    hp = (Math.floor(Math.random()*0))+10;
    lvlGrowth = 1.00;
    monsterName = 'undefined19';
  } else if(id === 'id20'){
    atk = (Math.floor(Math.random()*0))+1;
    def = (Math.floor(Math.random()*0))+1;
    spd = (Math.floor(Math.random()*0))+1;
    hp = (Math.floor(Math.random()*0))+10;
    lvlGrowth = 1.00;
    monsterName = 'undefined20';
  } else if(id === 'id21'){
    atk = (Math.floor(Math.random()*0))+1;
    def = (Math.floor(Math.random()*0))+1;
    spd = (Math.floor(Math.random()*0))+1;
    hp = (Math.floor(Math.random()*0))+10;
    lvlGrowth = 1.00;
    monsterName = 'undefined21';
  } else if(id === 'id22'){
    atk = (Math.floor(Math.random()*0))+1;
    def = (Math.floor(Math.random()*0))+1;
    spd = (Math.floor(Math.random()*0))+1;
    hp = (Math.floor(Math.random()*0))+10;
    lvlGrowth = 1.00;
    monsterName = 'undefined22';
  } else if(id === 'id23'){
    atk = (Math.floor(Math.random()*0))+1;
    def = (Math.floor(Math.random()*0))+1;
    spd = (Math.floor(Math.random()*0))+1;
    hp = (Math.floor(Math.random()*0))+10;
    lvlGrowth = 1.00;
    monsterName = 'undefined23';
  } else if(id === 'id24'){
    atk = (Math.floor(Math.random()*0))+1;
    def = (Math.floor(Math.random()*0))+1;
    spd = (Math.floor(Math.random()*0))+1;
    hp = (Math.floor(Math.random()*0))+10;
    lvlGrowth = 1.00;
    monsterName = 'undefined24';
  } else if(id === 'id25'){
    atk = (Math.floor(Math.random()*0))+1;
    def = (Math.floor(Math.random()*0))+1;
    spd = (Math.floor(Math.random()*0))+1;
    hp = (Math.floor(Math.random()*0))+10;
    lvlGrowth = 1.00;
    monsterName = 'undefined25';
  } else if(id === 'id26'){
    atk = (Math.floor(Math.random()*0))+1;
    def = (Math.floor(Math.random()*0))+1;
    spd = (Math.floor(Math.random()*0))+1;
    hp = (Math.floor(Math.random()*0))+10;
    lvlGrowth = 1.00;
    monsterName = 'undefined26';
  } else if(id === 'id27'){
    atk = (Math.floor(Math.random()*0))+1;
    def = (Math.floor(Math.random()*0))+1;
    spd = (Math.floor(Math.random()*0))+1;
    hp = (Math.floor(Math.random()*0))+10;
    lvlGrowth = 1.00;
    monsterName = 'undefined27';
  } else if(id === 'id28'){
    atk = (Math.floor(Math.random()*0))+1;
    def = (Math.floor(Math.random()*0))+1;
    spd = (Math.floor(Math.random()*0))+1;
    hp = (Math.floor(Math.random()*0))+10;
    lvlGrowth = 1.00;
    monsterName = 'undefined28';
  } else if(id === 'id29'){
    atk = (Math.floor(Math.random()*0))+1;
    def = (Math.floor(Math.random()*0))+1;
    spd = (Math.floor(Math.random()*0))+1;
    hp = (Math.floor(Math.random()*0))+10;
    lvlGrowth = 1.00;
    monsterName = 'undefined29';
  }
}
//API.on(API.CHAT,plugRPG);
//function plugRPG(data){
  //this.data = data;
  //if(data.message.slice(0,10) === '!encounter'){
    //var monsterGroupSelect = prompt('What group of monsters do you want to go against? (1,2 or 3)(Only 1 is currently available.)');
    //if(monsterGroupSelect === '1'){
      monsterEncounter();
      //console.log('Sorry, you cannot currently do battles!');
    //} else {
      //console.log('This group of monsters is either unavailable or inexistant.');
    //}
  //}
//}
