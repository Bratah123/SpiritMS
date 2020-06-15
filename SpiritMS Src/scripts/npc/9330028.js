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
	cm.sendNext("Well I understand if you are scared...");
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	cm.sendNext("A Snack Bar suddenly came to life and went beserk and is now attacking everything in our storage!");
    } else if (status == 1) {
	    cm.sendYesNo("Can you help me take out the Snack Bar?");
    } else if (status == 2) {
	cm.warp(741020102);
	cm.dispose();
    }
}