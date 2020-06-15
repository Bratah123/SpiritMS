/*
	Konpei - Showa Town(801000000)
*/

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0) {
	cm.dispose();
    } else {
	if (mode == 1)
	    status++;
	if (status == 0) {
	    cm.sendSimple ("Are you the brave hero who has come to end the invasion?\r #L0##bGather up some information on the Boss.#l\r\n#L1#Take me to the Fight!#l\r\n#L2#Fuck it!#l#k\r\n#L3#Take me to #bVPQ#k\r\n#L4#What Gear can I obtain from this?#k");
	} else if (status == 1) {
	    if (selection == 0) {
		cm.sendNext("We take it to our understanding that the Boss's Minion's Cannot be harmed without the use of the Bing Suit since it has been crafted specially to target their weaknesses. Sadly the only way to aquire this gear is by doing the #rEquipment Run#k at the #bVisitor PQ#k");
	    } if (selection == 1) {
		cm.dispose();
		//cm.sendNext("Oh, the brave one. I've been awaiting your arrival. If these\r\nthugs are left unchecked, there's no telling what going to\r\nhappen in this neighborhood. Before that happens, I hope\r\nyou take care of all them and beat the boss, who resides\r\non the 5th floor. You'll need to be on alert at all times, since\r\nthe boss is too tough for even wisemen to handle.\r\nLooking at your eyes, however, I can see that eye of the\r\ntiger, the eyes that tell me you can do this. Let's go!");
		cm.openNpc(9250132);
	    } if (selection == 2) {
		cm.sendOk("Fuck it?! ALL YOU CAN SAY IS FUCK IT? HUMAN LIVES ARE AT STAKE MAN HELP A BROVA OUT");
	    } if (selection == 3) {
		cm.sendOk("Take me to #bVisitor PQ#k So I can get some Alien smashing gear!");
	    }
        if (selection == 4) {
		cm.sendOk("This is the Gear you can Obtain from this! \r\n\r\n#i1003893##z1003893#\r\n#i1032191##z1032191#\r\n#i1113038##z1113038#\r\n#i1122256##z1122256#\r\n#i1132230##z1132230#");
	    }		if(selection != 1) {
		cm.dispose();
	    }
	} else if (status == 2) {
	    cm.warp(801040000, 0);
	    cm.dispose();
	}
    }
}