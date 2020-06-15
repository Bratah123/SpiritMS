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
        cm.sendSimple("Hi, I'm the #i4032658# exchanger, wich item would you like? #r(WARNING: make sure you have an empty spot in your inventory!!)#k \r\n#L0#I would like a #i1322102#  please. #r3000#k #i4032658# \r\n#L1#I would like a #i1152062# please. #r5000#k #i4032658# \r\n#L2#I would like a #i1152059# please. #r10000#k #i4032658# \r\n#L3#I would like a #i2041508# please. #r5000#k #i4032658# \r\n#L4#I would like a #i3010230# please. #r2500#k #i4032658# \r\n#L5#I would like a #i3012010# please. #r2500#k #i4032658# \r\n#L6#I would like a #i2022179# please. #r800#k #i4032658# \r\n#L7#I would like a #i1142489# please. #r20000#k #i4032658# \r\n#L8#I would like a #i2430688# please. #r1000#k #i4032658# \r\n#L9#I would like a #i3063350# please. #r25000#k #i4032658# \r\n#L10#I would like a #i1022135# please. #r3000#k #i4032658# \r\n#L11#I would like a #i1112516# please. #r10000#k #i4032658# \r\n#L12#I would like a #i1112711# please. #r15000#k #i4032658# \r\n#L13#I would like a #i1112229# please. #r3000#k #i4032658# \r\n#L14#I would like a #i2049300# please. #r500#k #i4032658# \r\n#L15#I would like a #i2210033# please. #r300#k #i4032658#");
    } else if (status == 1) {
    if (selection == 0) {
       if (cm.haveItem(4032658, 3000)) {
		    cm.gainItem(4032658, -3000);
			cm.gainItem(1322102, 1);
		    cm.sendOk("There you go!");
			cm.dispose();
	} else { 
	cm.sendOk("You don't have enough #i4032658#!") 
	cm.dispose();
	}
    } else if (selection == 1) {
        if (cm.haveItem(4032658, 5000)) {
		    cm.gainItem(4032658, -5000);
			cm.gainItem(1152062, 1);
		    cm.sendOk("There you go!");
			cm.dispose();
	} else { 
	cm.sendOk("You don't have enough #i4032658#!") 
	cm.dispose();
	}
    } else if (selection == 2) {
        if (cm.haveItem(4032658, 10000)) {
		    cm.gainItem(4032658, -10000);
			cm.gainItem(1152059, 1);
		    cm.sendOk("There you go!");
			cm.dispose();
	} else { 
	cm.sendOk("You don't have enough #i4032658#!") 
	cm.dispose();
	}
    } else if (selection == 3) {
        if (cm.haveItem(4032658, 5000)) {
		    cm.gainItem(4032658, -5000);
			cm.gainItem(2041508, 1);
		    cm.sendOk("There you go!");
			cm.dispose();
	} else { 
	cm.sendOk("You don't have enough #i4032658#!") 
	cm.dispose();
	}
	} else if (selection == 4) {
        if (cm.haveItem(4032658, 2500)) {
		    cm.gainItem(4032658, -2500);
			cm.gainItem(3010230, 1);
		    cm.sendOk("There you go!");
			cm.dispose();
	} else { 
	cm.sendOk("You don't have enough #i4032658#!") 
	cm.dispose();
	}
	} else if (selection == 5) {
        if (cm.haveItem(4032658, 2500)) {
		    cm.gainItem(4032658, -2500);
			cm.gainItem(3012010, 1);
		    cm.sendOk("There you go!");
			cm.dispose();
	} else { 
	cm.sendOk("You don't have enough #i4032658#!") 
	cm.dispose();
	}
	} else if (selection == 6) {
        if (cm.haveItem(4032658, 800)) {
		    cm.gainItem(4032658, -800);
			cm.gainItem(2022179, 1);
		    cm.sendOk("There you go!");
			cm.dispose();
	} else { 
	cm.sendOk("You don't have enough #i4032658#!") 
	cm.dispose();
	}
	} else if (selection == 7) {
        if (cm.haveItem(4032658, 20000)) {
		    cm.gainItem(4032658, -20000);
			cm.gainItem(1142489, 1);
		    cm.sendOk("There you go!");
			cm.dispose();
	} else { 
	cm.sendOk("You don't have enough #i4032658#!") 
	cm.dispose();
	}
	} else if (selection == 8) {
        if (cm.haveItem(4032658, 1000)) {
		    cm.gainItem(4032658, -1000);
			cm.gainItem(2430688, 1);
		    cm.sendOk("There you go!");
			cm.dispose();
	} else { 
	cm.sendOk("You don't have enough #i4032658#!") 
	cm.dispose();
	}
	} else if (selection == 9) {
        if (cm.haveItem(4032658, 25000)) {
		    cm.gainItem(4032658, -25000);
			cm.gainItem(3063350, 1);
		    cm.sendOk("There you go!");
			cm.dispose();
	} else { 
	cm.sendOk("You don't have enough #i4032658#!") 
	cm.dispose();
	}
	} else if (selection == 10) {
        if (cm.haveItem(4032658, 3000)) {
		    cm.gainItem(4032658, -3000);
			cm.gainItem(1022135, 1);
		    cm.sendOk("There you go!");
			cm.dispose();
	} else { 
	cm.sendOk("You don't have enough #i4032658#!") 
	cm.dispose();
	}
	} else if (selection == 11) {
        if (cm.haveItem(4032658, 10000)) {
		    cm.gainItem(4032658, -10000);
			cm.gainItem(1112516, 1);
		    cm.sendOk("There you go!");
			cm.dispose();
	} else { 
	cm.sendOk("You don't have enough #i4032658#!") 
	cm.dispose();
	}
	} else if (selection == 12) {
        if (cm.haveItem(4032658, 15000)) {
		    cm.gainItem(4032658, -15000);
			cm.gainItem(1112711, 1);
		    cm.sendOk("There you go!");
			cm.dispose();
	} else { 
	cm.sendOk("You don't have enough #i4032658#!") 
	cm.dispose();
	}
	} else if (selection == 13) {
        if (cm.haveItem(4032658, 3000)) {
		    cm.gainItem(4032658, -3000);
			cm.gainItem(1112229, 1);
		    cm.sendOk("There you go!");
			cm.dispose();
	} else { 
	cm.sendOk("You don't have enough #i4032658#!") 
	cm.dispose();
	}
	} else if (selection == 14) {
        if (cm.haveItem(4032658, 500)) {
		    cm.gainItem(4032658, -500);
			cm.gainItem(2049300, 1);
		    cm.sendOk("There you go!");
			cm.dispose();
	} else { 
	cm.sendOk("You don't have enough #i4032658#!") 
	cm.dispose();
	}
	} else if (selection == 15) {
        if (cm.haveItem(4032658, 300)) {
		    cm.gainItem(4032658, -300);
			cm.gainItem(2210033, 1);
		    cm.sendOk("There you go!");
			cm.dispose();
	} else { 
	cm.sendOk("You don't have enough #i4032658#!") 
	cm.dispose();
	}
    }
   }
  }  