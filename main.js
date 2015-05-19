//dont copy or modify without our permission pls, thx
//if you steal the code you're an asshole >:(
//Feel free to edit the monsters' data. Quick notice: monsters0 are mainly made for low-level training,
//monsters1 is a little bit harder, monsters2 is also a bit harder, and so on. Feel free to change stats and stuff
//in pull requests.
//$('body').append('<div id="miniGame" onclick="monsterEncounter();" style="position:absolute; top:55px; right: 350px; height: 30px; width: 300px; background-color: black; border: 2.5px solid #2FC7FB; border-radius: 20px; opacity: .8; z-index: 100;"></div>');
//$('body').append('<div id="xpgaintest" onclick="testXpGain();" style="position:absolute; top:90px; right: 350px; height: 30px; width: 300px; background-color: black; border: 2.5px solid #2FC7FB; border-radius: 20px; opacity: .8; z-index: 100;"></div>');
/*function resize(){
$('#miniGame').height(500);
$('#miniGame').width(500);
}*/
var monstersA = ['idA0','idA1','idA2','idA3','idA4','idA5','idA6','idA7','idA8','idA9'];
var monsters0 = ['id00','id01','id02','id03','id04','id05','id06','id07','id08','id09','idI00'];
var monsters1 = ['id10','id11','id12','id13','id14','id15','id16','id17','id18','id19','idI00'];
var monsters2 = ['id20','id21','id22','id23','id24','id25','id26','id27','id28','id29','idI00'];
var bpGained = ((Math.floor(Math.random()*100)/10000)*(Math.floor(Math.random()*10)));
var bp = 0;
var bpArray = [];
var monsterLevel = 2;
var userName = 'not set';
var userLevel = 1;
var userAtk = 3;
var userDef = 2;
var userSpd = 1;
var userHp = 12;
var userMaxHp = 12;
var userBpPerLevel = 1.5;
var xpModifier = 53;
var nextLvl = (userLevel+1)^2*xpModifier;
var initialBp = (Math.floor(Math.random()*6))+2;
var userXp = 0;
var userXp2 = 0;
var levelUpBp = 0;
var lastGivenHit = 'undetermined';
var lastReceivedHit = 'undetermined';
var monsterDmg = 'undetermined';
var userDmg = 'undetermined';
function bp2atk(n){
userAtk = userAtk + n;
bp = bp-n;
console.log("Successfully added " + n + " points to your Attack stat.");
}
function bp2def(n){
userDef = userDef + n;
bp = bp-n;
console.log("Successfully added " + n + " points to your Defense stat.");
}
function bp2spd(n){
userSpd = userSpd + n;
bp = bp-n;
console.log("Successfully added " + n + " points to your Speed stat.");
}
function bp2hp(n){
userMaxHp = userMaxHp + n*2;
bp = bp-n;
userMaxHeal();
console.log("Successfully added " + n + " points to your HP stat.");
}
function bpDistribute(){
console.log("Welcome to the sorcerer's hut! Here you can distribute your accumulated BP to your stats.");
setTimeout(function(){},4000);
if(bp>=1){
if(confirm("Do you want to distribute your accumulated BP?") === 'true'){
ans = prompt("In which stat do you want to add BP? (atk,def,spd,hp)");
if(ans === 'atk'){
ans = prompt("How much bp do you want to add? You currently have " + Math.floor(bp) + " bp available to distribute.");
if(ans>Math.floor(bp)){
console.log("That's more bp then you have right now!");
} else if(ans !== Math.floor(ans)){
console.log("Please write a full number (1,2,3,4, but not 1.5)!");
} else {
bp2atk(ans);
}
} else if(ans === 'def'){
ans = prompt("How much bp do you want to add? You currently have " + Math.floor(bp) + " bp available to distribute.");
if(ans>Math.floor(bp)){
console.log("That's more bp then you have right now!");
} else if(ans !== Math.floor(ans)){
console.log("Please write a full number (1,2,3,4, but not 1.5)!");
} else {
bp2def(ans);
}
} else if(ans === 'atk'){
ans = prompt("How much bp do you want to add? You currently have " + Math.floor(bp) + " bp available to distribute.");
if(ans>Math.floor(bp)){
console.log("That's more bp then you have right now!");
} else if(ans !== Math.floor(ans)){
console.log("Please write a full number (1,2,3,4, but not 1.5)!");
} else {
bp2atk(ans);
}
} else if(ans === 'atk'){
ans = prompt("How much bp do you want to add? You currently have " + Math.floor(bp) + " bp available to distribute.");
if(ans>Math.floor(bp)){
console.log("That's more bp then you have right now!");
} else if(ans !== Math.floor(ans)){
console.log("Please write a full number (1,2,3,4, but not 1.5)!");
} else {
bp2atk(ans);
}
} else {
console.log("It seems that you didn't write any stat name. Woops!");
}
} else {
console.log("Come back later!");
}
} else {
console.log("Unfortunately, you don't have enough BP! Come back when your total is at least 1.");
}
}
function bpGain(){
bpArray.push(bpGained);
console.log("You gained " + bpArray[0] + " bp!");
bp = bp + bpArray[0];
bpArray.pop();
}
function userMaxHeal(){
userHp = userMaxHp;
return void(0);
}
function testXpGain(){
userXp = userXp+2*(3+1+2+2);
console.log(userXp);
}
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
if(userHp <= 0){
console.log("You cannot battle monsters when you're dead!");
} else {
monsterData(monsterSelect);
battle();
}
/*console.log('Chosen Monster: ' + monsterName);
console.log('Attack Stat: ' + atk);
console.log('Defense Stat: ' + def);
console.log('Speed Stat: ' + spd);
console.log('HP Stat: ' + hp);
console.log('Stats Growth: ' + ((lvlGrowth*100)-100) + '%');
console.log('BP gained: ' + bpGain);
console.log('Monster level: ' + monsterLevel);*/
//}
}
function dmgDealt(){
console.log("You attacked " + monsterName + " and hit for " + lastGivenHit + " damage!");
}
function dmgReceived(){
console.log(monsterName + " hit you for " + lastReceivedHit + " damage!");
}
function battle(){
/*Here, use jQuery to make 3 buttons: Attack, Defend and Flee.*/
userDmg = (Math.floor(Math.random()*((userAtk*1.5)+1)))+(userAtk/2);
monsterDmg = (Math.floor(Math.random()*((atk*1.5)+1)))+(atk/2);
if(userSpd>spd){
lastGivenHit = userDmg-def;
if(lastGivenHit < 0){
lastGivenHit = 0;
}
setTimeout(dmgDealt(),400);
hp = hp-lastGivenHit;
if(hp <= 0){
console.log("You defeated the monster! Congratulations!");
bpGain();
xpGain();
} else {
lastReceivedHit = monsterDmg-userDef;
if(lastReceivedHit < 0){
lastReceivedHit = 0;
}
setTimeout(dmgReceived(),400);
userHp = userHp-lastReceivedHit;
if(userHp<=0){
console.log("You died!");
} else {
setTimeout(battle(),400);
}
}
} else if(userSpd<spd){
lastReceivedHit = monsterDmg-userDef;
if(lastReceivedHit < 0){
lastReceivedHit = 0;
}
setTimeout(dmgReceived(),400);
userHp = userHp-lastReceivedHit;
if(userHp<=0){
console.log("You died!");
} else {
lastGivenHit = userDmg-def;
if(lastGivenHit < 0){
lastGivenHit = 0;
}
setTimeout(dmgDealt(),400);
hp = hp-lastGivenHit;
if(hp <= 0){
console.log("You defeated the monster! Congratulations!");
bpGain();
xpGain();
} else {
setTimeout(battle(),400);
}
}
} else if(userSpd===spd){
ans = Math.floor(Math.random()*2);
if(ans === 0){
lastGivenHit = userDmg-def;
if(lastGivenHit < 0){
lastGivenHit = 0;
}
setTimeout(dmgDealt(),400);
hp = hp-lastGivenHit;
if(hp <= 0){
console.log("You defeated the monster! Congratulations!");
bpGain();
xpGain();
} else {
lastReceivedHit = monsterDmg-userDef;
if(lastReceivedHit < 0){
lastReceivedHit = 0;
}
setTimeout(dmgReceived(),400);
userHp = userHp-lastReceivedHit;
if(userHp<=0){
console.log("You died!");
} else {
setTimeout(battle(),400);
}
}
} else if(ans === 1){
lastReceivedHit = monsterDmg-userDef;
if(lastReceivedHit < 0){
lastReceivedHit = 0;
}
setTimeout(dmgReceived(),400);
userHp = userHp-lastReceivedHit;
if(userHp<=0){
console.log("You died!");
} else {
lastGivenHit = userDmg-def;
if(lastGivenHit < 0){
lastGivenHit = 0;
}
setTimeout(dmgDealt(),400);
hp = hp-lastGivenHit;
if(hp <= 0){
console.log("You defeated the monster! Congratulations!");
bpGain();
xpGain();
} else {
setTimeout(battle(),400);
}
}
} else {
console.log(ans);
}
}
}
function xpGain(){
userXp = userXp+2*(atk+def+spd+monsterLevel);
console.log("You gained " + (atk+def+spd+monsterLevel)*2 + "xp!");
levelUp();
}
function levelUp(){
if(userXp >= nextLvl){
console.log("Congratulations! You levelled up!");
if(userLevel/2 === Math.floor(userLevel/2)){
//levelUpBp = 2;
console.log("You gained 2 Bonus Points! Distribute them in your stats.");
/*Here, use jQuery to make choice buttons as in initialLoad(); to a maximum of 2 points.*/
bp = bp +2;
} else {
//levelUpBp = 1;
console.log("You gained 1 Bonus Point! Distribute it in your stats.");
/*Here, use jQuery to make choice buttons as in initialLoad(); to a maximum of 1 point.*/
bp = bp +1;
}
userLevel = userLevel+1;
levelUp();
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
} else if(id === 'idI00'){
atk = (Math.floor(Math.random()*6))+2;
def = (Math.floor(Math.random()*0))+1;
spd = (Math.floor(Math.random()*3))+1;
hp = (Math.floor(Math.random()*4))+4;
lvlGrowth = 1.00;
monsterName = 'Kaboom0';
}
}
//API.on(API.CHAT,plugRPG);
//function plugRPG(data){
//this.data = data;
//if(data.message.slice(0,10) === '!encounter'){
//var monsterGroupSelect = prompt('What group of monsters do you want to go against? (1,2 or 3)(Only 1 is currently available.)');
//if(monsterGroupSelect === '1'){
//monsterEncounter();
//console.log('Sorry, you cannot currently do battles!');
//} else {
//console.log('This group of monsters is either unavailable or inexistant.');
//}
//}
//}
