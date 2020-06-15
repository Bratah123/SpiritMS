var status;
var talked = null;

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
        if (cm.haveItem(4033275, 1)) {
            cm.sendOk("What are you doing here? Get out of my sight!");
            cm.dispose();
        }
        if (cm.haveItem(2010009, 1) && cm.haveItem(4001162, 1)) {
            cm.sendNext("Bringing me gifts won't make me release you, but thanks anyway. Now fu*k off!\r\n(eats apple)\r\nAAAAHhh what is this? poison? aaaah HEEEELP!\r\n(dies)");
			
            cm.getPlayer().dropMessage(6,"Congratulations you have managed to prove yourself worthy and curse has been removed. \r\n Your rates are now 800x exp, 400x meso and 3x drop. \r\n I hope you will enjoy server and be sure to check out forums!");
            talked = true;
		
        } else {
            cm.sendNext("What the ****, who are you and what are you doing here?\r\nDoesn't matter anyways, I don't like uninvited guests. Feel my wrath!");
        }
    } else if (status == 1) {
	if (talked == true) {
	
	cm.warp(20000, 0);
	cm.gainExp(1300);
	cm.dispose();
	}else {
        cm.getPlayer().dropMessage(6,"You have been cursed, all your rates have been lowered to 1x.\r\nIn order to remove this evil curse you will need to achieve something \r\n that no one managed to do, kill evil wizard.");
        cm.gainItem(4033275, 1);
        cm.dispose();
		}
    }
}