var status; 
var item;
var cube;
var selected, selected2;

function start() { 
	cm.sendYesNo("Would you like to cube an item? All I require is an item with potentials and a cube.");
} 

function action(mode, type, selection) { 
	selected = selection;
     if (mode != 1) {
        if (type == 1 && mode == 0) {
            cm.sendNext("Okay. Have fun in #rViciousMS#k!");
        }
        cm.dispose();
        return;
    }
    status++;
    if (status == 0) { 
		cm.sendSimple("Choose the item you would like to cube:\r\n"+cm.EquipList(cm.getC());
		item = selected;
	} else if (status == 1) {
		cm.sendSimple("What cube would you like to choose?(note that we check what cash item you choose):\r\n"+cm.CashList(cm.getC());
		cube = selected2;
	} else if (status == 2) {
		cm.doCube(item, cube);
		// to be continued
	} else {
		cm.dispose();
	}
}

function doCube() {
	cm.sendSimple("Choose the item you would like to cube:\r\n"+cm.EquipList(cm.getC());
	
}