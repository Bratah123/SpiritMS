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
		cm.sendNext("You cannot be part of our Community until you agree");
		cm.dispose();
		return;
	}
	if (mode == 1)
		status++;
	else
		status--;
	if(status == 0){
		cm.sendOk("               Welcome to the #b[Sword Art Online]#k Dungeon! \r\n\r\nSadly it's still in developement! you can come back anytime and view the pogress!\r\n\r\nFloor 1 #g100%#k\r\nFloor 2 #g100%#k\r\nFloor 3 #b50%#k\r\nFloor 4 #b50%#k\r\nFloor 5 #b50%#k\r\nFloor 6 #b50%#k\r\nFloor 7 #b50%#k\r\nFloor 8 #b50%#k\r\nFloor 9 #b50%#k\r\nFloor 10 #b50%#k\r\nFloor 11 #b50%#k\r\nFloor 12 #b50%#k\r\nFloor 13 #b50%#k\r\nFloor 14 #b50%#k\r\nFloor 15 #b50%#k\r\nFloor 16 #b50%#k\r\nFloor 17 #b50%#k\r\nFloor 18 #b50%#k\r\nFloor 19 #b50%#k\r\nFloor 20 #b50%#k\r\nFloor 21 - 100 #r0%#k");
	}
	 else if (status == 0 && selection == 0) {
    status = 4;
	//cm.openNpc(1402300);
	}	else if(status == 2){
		//cm.sendNext("Alright Let's go!");
		//cm.warp(109090200);
		cm.showSAO();
		cm.dispose();
		cm.OpeningVid();
	}

}
}