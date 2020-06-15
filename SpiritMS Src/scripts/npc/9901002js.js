var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status >= 0 && mode == 0) {
	cm.sendOk("That makes me sad ):");
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	cm.sendYesNo("The Easter Event is scheduled to take place from \r\n April 13th Until April 20th. \r\n Will you be participating?");
    } else if (status == 1) {
	cm.sendNext("Glad to hear!");
    } else if (status == 2) {
	cm.dispose();
    }
}