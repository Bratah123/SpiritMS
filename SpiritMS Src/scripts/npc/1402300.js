/* Author: aaroncsn(MapleSea Like)
	NPC Name: 		Karcasa
	Map(s): 		The Burning Sands: Tents of the Entertainers(260010600)
	Description: 		Warps to Victoria Island
*/

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
	if (status == 0 && mode == 0) {
		cm.sendNext("You don't wanna be a Mercedes?.. Oh Well");
		cm.dispose();
		return;
	}
	if (mode == 1)
		status++;
	else
		status--;
	if(status == 0){
		cm.sendYesNo("Hey I'm Mercedes! Would you like to become a master of the Dual Bowgun like me? \r\n#rIf you choose yes you will become a mercedes and be moved to Henesys");
   }else if(status == 1){
		cm.sendNext("I now bestow my power upon you!");
	 	cm.changeJob(2002);
		cm.gainExp(15);
		cm.gainExp(40);
		cm.gainExp(60);
		cm.gainExp(100);
		cm.gainExp(200);
		cm.gainExp(300);
		cm.gainExp(641);
		cm.gainExp(1000);
		cm.gainExp(992);
		cm.gainItem(1522038, 1);
		cm.gainItem(1352004, 1);
		cm.warp(100000000);
		cm.dispose();
	}
	}
}