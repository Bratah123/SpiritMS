/**
	Subway Attendant @ Taipei 101
**/

var status = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 1 && mode == 0) {
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	cm.sendNext("Thanks for listening to my pleas.");
    } else if (status == 1) {
	    cm.sendYesNo("Would you like to get out?");
    } else if (status == 2) {
	cm.warp(741020100);
	cm.dispose();
    }
}