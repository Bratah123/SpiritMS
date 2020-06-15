var MC = 2500;
var PMC = 3750;
var SMC = 5500;
var RMC = 7250;
var EMC = 9500;
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
        cm.sendSimple("Welcome to cube seller! Choose which cubes you want to buy \r "+
        "#L0##i5062000#Miracle Cube - 2500 NX\r\n#L1##i5062001#Premium Miracle Cube - 3750 NX\r\n#L2##i5062002#Super Miracle Cube - 5500 NX\r\n#L3##i5062003#Revolutionary Miracle Cube - 7250\r\n#L4##i5062005#Enlightening Miracle Cube - 9500");
        } else if (status == 1) {
        picked = selection;
        cm.sendGetText(9201000,"Enter the amount of cubes you want");
        } else if (status == 2) {
        if (cm.getText() * 0 != 0) {
        cm.sendOk("Numbers only!");
        cm.dispose();
        return;
        }
        if(cm.getText() < 1) {
            cm.sendOk("Enter at least 1!");
            cm.dispose();
            return;
        }
        if (picked == 0) {
        cm.sendYesNo("This will cost you "+ cm.getText() * MC +" NX, do you wish to proceed?");
        }
        if (picked == 1) {
        cm.sendYesNo("This will cost you "+ cm.getText() * PMC +" NX, do you wish to proceed?");
        }
        if (picked == 2) {
        cm.sendYesNo("This will cost you "+ cm.getText() * SMC +" NX, do you wish to proceed?");
        }
        if (picked == 3) {
        cm.sendYesNo("This will cost you "+ cm.getText() * RMC +" NX, do you wish to proceed?");
        }
        if (picked == 4) {
        cm.sendYesNo("This will cost you "+ cm.getText() * EMC +" NX, do you wish to proceed?");
        }
        } else if (status == 3) {
        if (picked == 0) {
        if (cm.checkNX() >= cm.getText() * MC) {
        cm.gainItem(5062000, cm.getText());
        cm.gainNXCredit(-cm.getText() * MC);
        } else {
        cm.sendOk("You don't have enough NX");
        }
        }
        if (picked == 1) {
        if (cm.checkNX() >= cm.getText() * PMC) {
        cm.gainItem(5062001, cm.getText());
        cm.gainNXCredit(-cm.getText() * PMC);
        } else {
        cm.sendOk("You don't have enough NX");
        }
        }
        if (picked == 2) {
        if (cm.checkNX() >= cm.getText() * SMC) {
        cm.gainItem(5062002, cm.getText());
        cm.gainNXCredit(-cm.getText() * SMC);
        } else {
        cm.sendOk("You don't have enough NX");
        }
        }
        if (picked == 3) {
        if (cm.checkNX() >= cm.getText() * RMC) {
        cm.gainItem(5062003, cm.getText());
        cm.gainNXCredit(-cm.getText() * RMC);
        } else {
        cm.sendOk("You don't have enough NX");
        }
        }
        if (picked == 4) {
        if (cm.checkNX() >= cm.getText() * EMC) {
        cm.gainItem(5062005, cm.getText());
        cm.gainNXCredit(-cm.getText() * EMC);
        } else {
        cm.sendOk("You don't have enough NX");
        }
        }
        cm.dispose();
        }
		}