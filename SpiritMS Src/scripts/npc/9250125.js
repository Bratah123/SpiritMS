/* Author: Xterminator
	NPC Name: 		Heena
	Map(s): 		Maple Road : Lower level of the Training Camp (2)
	Description: 		Takes you outside of Training Camp
*/
var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status >= 0 && mode == 0) {
	cm.sendOk("The power of Science is needed...");
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	cm.sendYesNo("Would you like to use my time Machine?");
    } else if (status == 1) {
	cm.sendNext("Splendid! Just go talk to it and it can bring you to the past ha! You didn't even need to talk to me!");
    } else if (status == 2) {
	//cm.getNpc(9250144);
	cm.dispose();
    }
}