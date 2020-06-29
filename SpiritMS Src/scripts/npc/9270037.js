/* 	Jimmy
	Singa Random Hair/Color Changer
*/
var status = -1;
var mlg = 4430000;
var gml = 4033247;
var npcIndex;
var amount;
/*
    0: MLG to NX
    1: NX to MLG
    2: GML to Meso
    3: Meso to GML
*/

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
        var msg = "Hi what would you like to exchange?\r\n";
        msg += "#b#L0#I would like to exchange Maple Leaf Gold.\r\n";
        msg += "#L1#I would like to exchange Maple Points.\r\n";
        msg += "#L2#I would like to exchange Golden Maple Leaf.\r\n";
        msg += "#L3#I would like to exchange Mesos.#l";
	    cm.sendSimple(msg)
    }
    else if(status == 1 && selection == 0){ // MLG to NX
        npcIndex = selection;
        cm.sendGetNumber("How many maple leaf gold do you want to exchange to NX?", 1, 1, 200);
    }
    else if(status == 2 && npcIndex == 0){
        amount = selection;
        var confirm = "Are you sure you want to exchange " + amount + " MLGs? #i " + mlg + "#\r\n";
        cm.sendYesNo(confirm)
    }
    else if(status == 3 && npcIndex == 0){
        if(cm.getQuantityOfItem(mlg) < amount){
            cm.sendOk("You do not have the necessary Maple Leaf Gold to exchange that much.");
            return cm.dispose();
        }
        cm.gainItem(mlg, -amount)
        cm.getChar().gainMaplePoints(1000000 * amount);
        cm.sendOk("Exchange successful, you lost " + amount + " MLGs.");
        return cm.dispose();
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////

    else if(status == 1 && selection == 1){ // NX to MLG
        npcIndex = selection;
        cm.sendGetNumber("How many Maple Leaf Golds would you like to exchange for NX?", 1, 1, 200);
    }
    else if(status == 2 && npcIndex == 1){
        amount = selection;
        var confirm = "Are you sure you want to exchange "+ 1200000 * amount + " NX for " + amount + " MLGs? #i " + mlg + "#\r\n#r20% Tax Rate";
        cm.sendYesNo(confirm)
    }
    else if(status == 3 && npcIndex == 1){
        if(cm.getChar().getMaplePoints() <  1200000 * amount){
            cm.sendOk("You do not have the enough NX to exchange for that much MLGs.");
            return cm.dispose();
        }
        cm.getChar().gainMaplePoints(1200000 * -amount);
        cm.gainItem(mlg, amount)
        cm.sendOk("Exchange successful, you lost " + amount * 1200000 + " NX.");
        return cm.dispose();
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////

    else if(status == 1 && selection == 2){ // GML to Meso
        npcIndex = selection;
        cm.sendGetNumber("How many Golden Maple Leaf would you like to exchange to Meso?", 1, 1, 200);
    }
    else if(status == 2 && npcIndex == 2){
            amount = selection;
            var confirm = "Are you sure you want to exchange " + amount + " GMLs? #i " + gml + "#\r\n";
            cm.sendYesNo(confirm)
     }
    else if(status == 3 && npcIndex == 2){
        if(cm.getQuantityOfItem(gml) < amount){
            cm.sendOk("You do not have the necessary Maple Leaf Gold to exchange that much.");
            return cm.dispose();
        }
        cm.gainItem(gml, -amount)
        cm.gainMeso(1000000000 * amount);
        cm.sendOk("Exchange successful, you lost " + amount + " GMLs.");
        return cm.dispose();
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////

    else if(status == 1 && selection == 3){ // Meso to GML
         npcIndex = selection;
         cm.sendGetNumber("How many Golden Maple Leaf would you like to exchange for Meso?", 1, 1, 200)
    }
    else if(status == 2 && npcIndex == 3){
            amount = selection;
            var confirm = "Are you sure you want to exchange "+ 1200000000 * amount + " Mesos for " + amount + " GMLs? #i " + gml + "#\r\n#r20% Tax Rate";
            cm.sendYesNo(confirm)
    }
    else if(status == 3 && npcIndex == 3){
        if(cm.getMeso() <  1200000000 * amount){
            cm.sendOk("You do not have the enough Mesos to exchange for that much GMLs.");
            return cm.dispose();
        }
        cm.gainMeso(1200000000 * -amount);
        cm.gainItem(gml, amount)
        cm.sendOk("Exchange successful, you lost " + amount * 1200000000 + " Mesos.");
        return cm.dispose();
    }
}