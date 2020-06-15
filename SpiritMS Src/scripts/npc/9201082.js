var status = 0;
 
function start() {
    status = -1;
    action(1, 0, 0);
}
 
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
                cm.sendSimple("Hello #h #, Welcome to #rRoyalMS#k\r\nI'm the meso exchange NPC. Are your mesos maxed out? Want to get more? Well I can help!\r\n \r\n \r\nWhat would you like to do? \r\n#L1##bTrade 1bil for 1 #v4000313##k#l \r\n \r\n#L2##bTrade 1 #v4000313# for 1bil#k#l");
        
           //cm.dispose();
            } else if (status == 1) {
            if (selection == 1) {
    if (cm.itemQuantity(4000313) >= 999) {
    cm.sendOk(" I Think you have enough #v4000313# saved up, try spending some of your mesos, and cashing in a few #v4000313# before you buy more.");
    cm.dispose();
        }  else if (cm.getMeso() >= 1000000000) {
                    cm.gainMeso(-1000000000);                
                    cm.gainItem(4000313, 1); 
                    cm.dispose();
                } else {
                    cm.sendOk("You don't have enough #bMesos#k, are you trying to #eScam#k me!?");
                    cm.dispose();
                }                                
            } else if (selection == 2) {
  if (cm.getMeso() >= 647000000) {
  cm.sendOk("Dont get too carried away, if you trade in your money sack now, you wont get any money! You need to spend some, if you have then the meso limit after u trade in your money sack, you wont get mesos!");
                cm.dispose();
  } else if (cm.itemQuantity(4000313) >= 1) {
                    cm.gainMeso(1000000000);                
                    cm.gainItem(4000313, -1); 
                    cm.dispose();
                } else {
                    cm.sendOk("You don't have any #v4000313#. Please come back when you have some to cash in.");
                    cm.dispose();
                }    
            } else if (selection == 3) {
    if (cm.itemQuantity(5200000) >= 50) {
    cm.sendOk(" I Think you have enough #v5200001# saved up, try spending some of your mesos, and cashing in a few #v5200001# before you buy more.");
    cm.dispose();
    } else if (cm.getMeso() >= 1000000000) {
                    cm.gainMeso(-1000000000);                
                    cm.gainItem(5200001, 1); 
                    cm.dispose();
                   }
        } else if (selection == 4) {
  if (cm.getMeso() >= 1147000000) {
  cm.sendOk("Dont get too carried away, if you trade in your money sack now, you wont get any money! You need to spend some, if you have then the meso limit after u trade in your money sack, you wont get mesos!");
                cm.dispose();
                } else if (cm.itemQuantity(5200001) >= 1) {
                    cm.gainMeso(1000000000);                
                    cm.gainItem(5200001, -1); 
                    cm.dispose();
                } else {
                    cm.sendOk("You don't have any #v5200001#. Please come back when you have some to cash in.");
                    cm.dispose();
               }    
            } else if (selection == 5) {
    if (cm.itemQuantity(5200000) >= 50) {
    cm.sendOk(" I Think you have enough #v5200000# saved up, try spending some of your mesos, and cashing in a few #v5200000# before you buy more.");
    cm.dispose();
    } else if (cm.getMeso() >= 500000000) {
                    cm.gainMeso(-500000000);                
                    cm.gainItem(5200000, 1); 
                    cm.dispose();
            }
                } else if (selection == 6) {
  if (cm.getMeso() >= 1647000000) {
  cm.sendOk("Dont get too carried away, if you trade in your money sack now, you wont get any money! You need to spend some, if you have then the meso limit after u trade in your money sack, you wont get mesos!");
                cm.dispose();
                } else if (cm.itemQuantity(5200000) >= 1) {
                    cm.gainMeso(500000000);                
                    cm.gainItem(5200000, -1); 
                    cm.dispose();
                } else {
                    cm.sendOk("You don't have any #v5200000#. Please come back when you have some to cash in.");
                    cm.dispose();
                    }    
                }
            }
        }
    }
