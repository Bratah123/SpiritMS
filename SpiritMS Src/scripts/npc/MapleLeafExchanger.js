var status = -1; 

function start() 
{ 
    status = -1; 
    action(1, 0, 0); 
}

function action(mode, type, selection) { 
    if (mode == 1) 
    status++; 
    else
    status--;
    if (status == -1) {
            cm.dispose();
    } else if (status == 0) {
        cm.sendSimple("Hi, what would you like to trade your #i4001126# for?#r              (WARNING: make sure you have an empty spot in your inventory!!)#k \r\n#L0#I would like #b2000 nx#k please. #r1000#k #i4001126# \r\n#L1#I would like a #i2213042# please. #r200#k #i4001126# \r\n#L2#I would like a #i2003517# please. #r200#k #i4001126# \r\n#L3#I would like a #i5220020# please. #r3500#k #i4001126# \r\n#L4#I would like a #i2450041# please. #r800#k #i4001126# \r\n#L5#I would like a #i2012008# please. #r275#k #i4001126# \r\n#L6#I would like a #i4031544#  please. #r1500#k #i4001126#");
    } else if (status == 1) {
    if (selection == 0) {
      if (cm.haveItem(4001126, 1000)) {
		    cm.gainItem(4001126, -1000);
			cm.getPlayer().modifyCSPoints(1, 2000, true);
		    cm.sendOk("There you go!");
			cm.dispose();
	} else { 
	cm.sendOk("You don't have enough #i4001126#!") 
	cm.dispose();
	}
    } else if (selection == 1) {
        if (cm.haveItem(4001126, 200)) {
		    cm.gainItem(4001126, -200);
			cm.gainItem(2213042, 1);
		    cm.sendOk("There you go!");
			cm.dispose();
	} else { 
	cm.sendOk("You don't have enough #i4001126#!") 
	cm.dispose();
	}
    } else if (selection == 2) {
        if (cm.haveItem(4001126, 200)) {
		    cm.gainItem(4001126, -200);
			cm.gainItem(2003517, 1);
		    cm.sendOk("There you go!");
			cm.dispose();
	} else { 
	cm.sendOk("You don't have enough #i4001126#!") 
	cm.dispose();
	}
    } else if (selection == 3) {
        if (cm.haveItem(4001126, 3500)) {
		    cm.gainItem(4001126, -3500);
			cm.gainItem(5220020, 1);
		    cm.sendOk("There you go!");
			cm.dispose();
	} else { 
	cm.sendOk("You don't have enough #i4001126#!") 
	cm.dispose();
	}
	} else if (selection == 4) {
        if (cm.haveItem(4001126, 800)) {
		    cm.gainItem(4001126, -800);
			cm.gainItem(2450041, 1);
		    cm.sendOk("There you go!");
			cm.dispose();
	} else { 
	cm.sendOk("You don't have enough #i4001126#!") 
	cm.dispose();
	}
	} else if (selection == 5) {
        if (cm.haveItem(4001126, 275)) {
		    cm.gainItem(4001126, -275);
			cm.gainItem(2012008, 1);
		    cm.sendOk("There you go!");
			cm.dispose();
	} else { 
	cm.sendOk("You don't have enough #i4001126#!") 
	cm.dispose();
	}
	} else if (selection == 6) {
	 if (cm.haveItem(4001126, 1500)) {
		    cm.gainItem(4001126, -1500);
			cm.gainItem(4031544, 1);
		    cm.sendOk("There you go!");
			cm.dispose();
	} else { 
	cm.sendOk("You don't have enough #i4001126#!") 
	cm.dispose();
	}     
	}
    }
   }  