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
    if (status == 0) { 
		cm.sendYesNo("If you are a Blade Master, I can give you Phantom Blow and Final Cut if you don't already have them.\r\n\r\nWould you like to learn these skills?");
		
	}
}