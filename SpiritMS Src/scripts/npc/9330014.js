/**
	Subway Attendant @ Ximending
**/

var status = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 1 && mode == 0) {
	cm.sendNext("Well I understand if you are scared. Just don't hesitate to look for me if you ever want to head to Taipei 101.");
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	cm.sendNext("Due to an invasion of Devil Slimes, the train service has been halted. However if you wish to, you can enter and walk through the train cabins to Taipei 101.");
    } else if (status == 1) {
	    cm.sendYesNo("Would you like to enter?");
    } else if (status == 2) {
	cm.warp(742000104, 5);
	cm.dispose();
    }
}