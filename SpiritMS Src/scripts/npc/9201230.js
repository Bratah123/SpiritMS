var status;

function start() {
status = -1;
action(1, 0, 0);
}

function action(mode, type, selection) {

if (mode == -1) {
cm.dispose();
}
else {
if (status == 0 && mode == 0) {
cm.dispose();
return;
    }
}

if (mode == 1) 
   status++;

else 
   status--;
    if (status == 0) { 
cm.sendAcceptDecline("You currently have #b"+cm.getJQPoints()+" JQ Points#k.\r\nI see you beat the JumpQuest, I can give you #r1#k JQ Point");
}else if (status == 1) {
if (cm.haveItem(4033039,1)) {
 var map = cm.getPlayer().getMapId();
 var mapname = "Unknown MapID";
 if (map == 280020001) {//lava
 mapname = "Breath of Lava"
 }else if (map == 682000200) {//chimney
 mapname = "Ghost Chimney";
 }else if (map == 109050000) {//fitness
 mapname = "Fitness Test";
 }else if (map == 910530001) {//Tenacity
 mapname = "Forest of Tenacity";
 }else if (map == 690000070) {//Patiance
 mapname = "Forest of Patience";
 }
    cm.warp(910000000,0);
	cm.gainItem(4033039,-1);
	cm.gainJQPoints(1);
	cm.msiMessage("[JQ Notice] Congratulations to "+cm.getPlayer().getName()+" for beating the "+mapname+" JumpQuest.");
	cm.dispose();
}else {
	cm.msiMessage("[JQ Notice] Congratulations to "+cm.getPlayer().getName()+" for trying to beat the JumpQuest without the required item");
	cm.dispose();
}
}
}