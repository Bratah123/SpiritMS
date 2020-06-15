	

    var picked = 0;
    function start() {
        status = -1;
        action(1, 0, 0);
    }
     
    function action(mode, type, selection) {
        if (mode == 1)
            status++;
        else {
            cm.dispose();
            return;
        }
            if (status == 0) {
            cm.sendSimple("Hello " + cm.getPlayer().getName() + " and welcome to NPC Seller.\r\nChose which medal you would like." +
            "\r\n#L1#1st Medal\r\n#L2#2nd Medal\r\n#L3#3rd Medal\r\n#L4#4th Medal\r\n#L5#5th Medal\r\n#L6#6th Medal");
            } else if (status == 1) {
            if (selection == 1) {
            cm.sendYesNo("To obtain this medal you need:\r\nLevel 50\r\nDo you wish to proceed?");
            picked = 1;
            }
            if (selection == 2) {
            cm.sendYesNo("To obtain this medal you need:\r\n1st medal\r\n50 Million mesos\r\nLevel 80");
            picked = 2;
            }
            if (selection == 3) {
            cm.sendYesNo("To obtain this medal you need:\r\n1st medal\r\n50 Million mesos\r\nLevel 80");
            picked = 3;
            }
            if (selection == 4) {
            cm.sendYesNo("To obtain this medal you need:\r\n1st medal\r\n50 Million mesos\r\nLevel 80");
            picked = 4;
            }
            if (selection == 5) {
            cm.sendYesNo("To obtain this medal you need:\r\n1st medal\r\n50 Million mesos\r\nLevel 80");
            picked = 5;
            }
            if (selection == 6) {
            cm.sendYesNo("To obtain this medal you need:\r\n1st medal\r\n50 Million mesos\r\nLevel 80");
            picked = 6;
            }
            } else if (status == 2) {
            if (picked == 1 && cm.getPlayer().getLevel() >= 50) {
			cm.MakeHItem(1142014, cm.getChar(), 5,1,1);
			cm.sendSimple("There you go.")
            }
            if (picked == 2 && cm.getPlayer().getLevel() >= 80 && cm.haveItem(1142014)) {
			cm.gainItem(1142014, -1);
			cm.MakeHItem(1142015, cm.getChar(), 10,2,2);
            }
            if (picked == 3 && cm.getPlayer().getLevel() >= 100 && cm.haveItem(1142015)) {
			cm.gainItem(1142015, -1);
			cm.MakeHItem(1142016, cm.getChar(), 20,5,5);
            }
            if (picked == 4 && cm.getPlayer().getLevel() >= 150 && cm.haveItem(1142016)) {
			cm.gainItem(1142016, -1);
			cm.MakeHItem(1142017, cm.getChar(), 30,7,7);
            }
            if (picked == 5 && cm.getPlayer().getLevel() >= 200 && cm.haveItem(1142017)) {
			cm.gainItem(1142017, -1);
			cm.MakeHItem(1142018, cm.getChar(), 40,10,10);
			cm.msiMessage("[Medal] Congratulations to "+cm.getPlayer().getName()+" on his/her newly acquired Commander Medal");
            }
            if (picked == 6 && cm.getPlayer().getLevel() >= 250 && cm.haveItem(1142018)) {
			cm.gainItem(1142018, -1);
            cm.MakeHItem(1142019, cm.getChar(), 50,15,15);
			cm.msiMessage("[Medal] Congratulations to "+cm.getPlayer().getName()+" on his/her newly acquired Master Commander Medal");
            }
            cm.dispose();
            }
    }
