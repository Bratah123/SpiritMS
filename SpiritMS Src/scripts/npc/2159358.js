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
		cm.sendNext("You don't want the awesome power of the Demon race?");
		cm.dispose();
		return;
	}
	if (mode == 1)
		status++;
	else
		status--;
	if(status == 0){
		cm.sendYesNo("Hello. I'm a Demon Slayer do you want the powers of the Demon Race?? \r\n#rIf you choose yes you will become a Demon Slayer and be moved to Henesys");
   }else if(status == 1){
		cm.sendNext("I now bestow my power upon you!");
	 	cm.changeJob(3001);
		cm.gainExp(15);
		cm.gainExp(40);
		cm.gainExp(60);
		cm.gainExp(100);
		cm.gainExp(200);
		cm.gainExp(300);
		cm.gainExp(641);
		cm.gainExp(1000);
		cm.gainExp(992);
		cm.gainItem(1322053, 1);
		cm.warp(100000000);
		cm.dispose();
	}
	}
}