/*  NPC : Legor
    Bowman 4th job advancement
	Forest of the priest (240010501)
*/

var status = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0) {
	cm.dispose();
	return;
    } else {
	status++;
    }
     if (status == 0) {
	 if (cm.getJob() == 312 || cm.getJob() == 322) {
     cm.sendSimple("Hello again what can I do for you?\r\n\r\n#b#L2#I want to perform an open Job Advancement#l\r\n#L3#I would like some information about Open Job Advancement#l.");	 
    } else if (cm.getQuestStatus(1455) == 1) { //1455 Bowman //1453 Mage //1451 Warrior //1457 Thief?
     cm.sendSimple("I can take you to both of the places necessary for your fourth advancement \r\n\r\n\r\n#b#L0#Manon's Forest#l\r\n#L1#Griffey's Forest#l.");	 
    } else {
	 cm.sendSimple("Come see me if you want to make the 4th Advancement as a Bowman");
	 cm.dispose();
     }	
    }else if (status == 1) {
       if (selection == 0) {
		   if (cm.getPlayerCount(924000200) >= 1) {
	   cm.sendOk("There is already someone fighting the 4th job advancement boss try again later");
	   cm.dispose();
	   } else {
		   	   cm.warp(924000200);
	   cm.spawnMonster(9300511, 241, 452);
	   cm.dispose();
	   }
    }  if (selection == 1) {
		   if (cm.getPlayerCount(924000200) >= 1) {
	   cm.sendOk("There is already someone fighting the 4th job advancement boss try again later");
	   cm.dispose();
	   } else {
		   	   cm.warp(924000201);
	   cm.spawnMonster(9300512, 241, 452);
	   cm.dispose();
	   }
    }  if (selection == 2) {
       cm.sendOpenJobChangeUI();
    }  if (selection == 3) {
       cm.sendSimple("Here are the rules of open Job Advancement");
	   cm.dispose();
    }
	}
}