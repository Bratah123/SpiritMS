var status = -1;

var mapleLeaf = 4001126;
var isWeapon = false;
var itemSelected;

var options = ["I want to exchange maple leaves for Pearl Maple Gear.", "I want to exchange maple leaves for Onyx Maple Gear."];

var onyxWep = [
	1532100, // Onyx Maple Cannon
	1522096, // Onyx Maple Twin Angels
	1492181, // Onyx Maple Shooter
	1482170, // Onyx Maple Grip
	1472216, // Onyx Maple Steer
	1462195, // Onyx Maple Crossbow
	1452207, // Onyx Maple Longbow
	1442225, // Onyx Maple Polearm
	1432169, // Onyx Maple Spear
	1422142, // Onyx Maple Maul (Hammer)
	1412137, // Onyx Maple Two-handed Axe
	1402199, // Onyx Maple Two-handed Sword
	1382211, // Onyx Maple Staff
	1372179, // Onyx Maple Wand
	1362092, // Onyx Maple Cane
	1332227, // Onyx Maple Cutter
	1322205 // Onyx Maple Mace
];
var onyxEqp = [ // Maple suit and Ring have wrong IDs TODO: Find them
	1102562, // Onyx Maple Cape
	1003863, // Onyx Maple Hat
	1122252, // Onyx Maple Pendant
	1132228, // Onyx Maple Buckle
	1012376 // Onyx Maple Gum
];

var pearlWep = [];
var pearlEqp = [];


var optionSelected;
/*
	0: Maple Leaves -> Pearl Maple Gear
	1: Maple Leaves -> Onyx Maple Gear
*/

function start(){
	status = -1;
	action(1,0,0)
}

function action(mode, type, selection) {
	if(mode == 1){
		status++;
	}
	else {
		return cm.dispose();
	}
	
	if(status == 0)
	{
		var msg = "Hi, I am the maple leaves exchanger NPC, what would you like to do?\r\n#b";
		
		for(var i = 0; i < options.length; i++){ // List of options
			msg += "#L" + i + "#" +options[i] + "\r\n";
		}
		
		cm.sendSimple(msg);
	}
	else if(status == 1 && selection == 0)
	{
		optionSelected = selection; // Pearl Eqp
	}
	else if(status == 1 && selection == 1)
	{
		optionSelected = selection; // Onyx Eqp
		var onyxDiag = "Which onyx type of onyx maple gear would you like to trade for?\r\n"
		onyxDiag += "#L2##bTrade for weapons.\r\n";
		onyxDiag += "#L3#Trade for equipments.#l";
		cm.sendSimple(onyxDiag);
	}
	else if(status == 2 && optionSelected == 1 && selection == 2) // Weapons
	{
		isWeapon = true;
		var wepDiag = "Which weapon would you like to trade for?\r\n"
		for(var i = 0; i < onyxWep.length; i++){
			wepDiag += "#L" + i + "##b#i" + onyxWep[i] + "##z" + onyxWep[i] + "#\r\n";
		}
		cm.sendSimple(wepDiag);
	}
	else if(status == 2 && optionSelected == 1 && selection == 3) // Equips
	{
		var eqpDiag = "Which equipment would you like to trade for?\r\n"
		for(var i = 0; i < onyxEqp.length; i++){
			eqpDiag += "#L" + i + "##b#i" + onyxEqp[i] + "##z" + onyxEqp[i] + "#\r\n";
		}
		cm.sendSimple(eqpDiag);
	}
	else if(status == 3 && optionSelected == 1 && isWeapon)
	{
		itemSelected = selection;
		var confirmDiag = "This is the item you want to buy?#i" + onyxWep[itemSelected] + "#\r\n\r\n"
		confirmDiag += "Here is the required materials needed to buy it.\r\n";
		confirmDiag += "#i" + mapleLeaf + "# 5000";
		
		cm.sendYesNo(confirmDiag);
	}
	else if(status == 3 && optionSelected == 1 && !isWeapon)
	{
		itemSelected = selection;
		var confirmDiag = "This is the item you want to buy?#i" + onyxEqp[itemSelected] + "#\r\n\r\n"
		confirmDiag += "Here is the required materials needed to buy it.\r\n";
		confirmDiag += "#i" + mapleLeaf + "# 5000";
		
		cm.sendYesNo(confirmDiag);
	}
	else if(status == 4 && optionSelected == 1 && isWeapon)
	{
		if(cm.getQuantityOfItem(mapleLeaf) < 5000){
			cm.sendOk("You do not have enough maple leaves, come back again later.");
			return cm.dispose();
		}
		
		//if(cm.getQuantityOfItem(pearlWep[itemSelected]) <= 0){
		//	cm.sendOk("You do not have the neccessary materials, come back again later.");
		//	return cm.dispose();
		//}
		
		cm.gainItem(mapleLeaf, -5000);
		//cm.gainItem(pearlWep[itemSelected], -1);
		cm.gainItem(onyxWep[itemSelected], 1);
		cm.sendOk("Successfully purchased a #i" + onyxWep[itemSelected] + "#");
		return cm.dispose();
	}
	else if(status == 4 && optionSelected == 1 && !isWeapon)
	{
		if(cm.getQuantityOfItem(mapleLeaf) < 5000){
			cm.sendOk("You do not have enough maple leaves, come back again later.");
			return cm.dispose();
		}
		
		//if(cm.getQuantityOfItem(pearlEqp[itemSelected]) <= 0){
		//	cm.sendOk("You do not have the neccessary materials, come back again later.");
		//	return cm.dispose();
		//}
		
		cm.gainItem(mapleLeaf, -5000);
		//cm.gainItem(pearlEqp[itemSelected], -1);
		cm.gainItem(onyxEqp[itemSelected], 1);
		cm.sendOk("Successfully purchased a #i" + onyxEqp[itemSelected] + "#");
		return cm.dispose();
	}
}