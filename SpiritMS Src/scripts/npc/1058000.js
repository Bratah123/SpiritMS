/*
DB Skills NPC by Wes
*/

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
    if (cm.haveItem(4033178)) {
		cm.sendOk("Hoot! Hoooot!");
		cm.dispose();
	} else {
		cm.sendOk("Hoot.. hoot");
		cm.gainItem(4033178,1);
		cm.dispose();
	} 
}