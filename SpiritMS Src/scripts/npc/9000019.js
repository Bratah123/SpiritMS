var status = -1;

var mapleLeaf = 4001126;
var isWeapon = false;
var itemSelected;
var mesoBag = 5200002;

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
var onyxEqp = [
    1052612, // onyx Maple suit
	1102562, // Onyx Maple Cape
	1003863, // Onyx Maple Hat
	1122252, // Onyx Maple Pendant
	1132228, // Onyx Maple Buckle
	1012376 // Onyx Maple Gum
];

var pearlWep = [
	1532102, // Pearl Maple Cannon
	1522098, // Pearl Maple Twin Angels
	1492183, // Pearl Maple Shooter
	1482172, // Pearl Maple Grip
	1472218, // Pearl Maple Steer
	1462197, // Pearl Maple Crossbow
	1452209, // Pearl Maple Longbow
	1442227, // Pearl Maple Polearm
	1432171, // Pearl Maple Spear
	1422144, // Pearl Maple Maul
	1412139, // Pearl Maple Two-handed Axe
	1402202, // Pearl Maple Two-handed Sword
	1382213, // Pearl Maple Staff
	1372181, // Pearl Maple Wand
	1362094, // Pearl Maple Cane
	1332229, // Pearl Maple Cutter
	1322207 // Pearl Maple Mace
];
var pearlEqp = [
    1052613, // Pearl Maple Suit
	1102563, // Pearl Maple Cape
	1003864, // Pearl Maple Hat
	1122253, // Pearl Maple Pendant
	1132229, // Pearl Maple Buckle
	1012377 // Pearl Maple Gum
];


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
	// Pearl Gear
	else if(status == 1 && selection == 0)
	{
		optionSelected = selection; // Pearl Eqp
		var pearlDiag = "Which type of pearl maple gear would you like to trade for\r\n";
		pearlDiag += "#L2##bTrade for weapons.\r\n";
		pearlDiag += "#L3#Trade for equipments.#l";
		cm.sendSimple(pearlDiag);
	}
	else if(status == 2 && optionSelected == 0 && selection == 2) // Weapons
	{
		isWeapon = true;
		var wepDiag = "Which weapon would you like to trade for?\r\n"
		for(var i = 0; i < pearlWep.length; i++){
			wepDiag += "#L" + i + "##b#i" + pearlWep[i] + "##z" + pearlWep[i] + "#\r\n";
		}
		cm.sendSimple(wepDiag);
	}
	else if(status == 2 && optionSelected == 0 && selection == 3) // Equips
	{
		var eqpDiag = "Which equipment would you like to trade for?\r\n"
		for(var i = 0; i < pearlEqp.length; i++){
			eqpDiag += "#L" + i + "##b#i" + pearlEqp[i] + "##z" + pearlEqp[i] + "#\r\n";
		}
		cm.sendSimple(eqpDiag);
	}
	else if(status == 3 && optionSelected == 0 && isWeapon)
	{
		itemSelected = selection;
		var confirmDiag = "This is the item you want to buy?#i" + pearlWep[itemSelected] + "#\r\n\r\n"
		confirmDiag += "Here is the required materials needed to buy it.\r\n";
		confirmDiag += "#i" + mapleLeaf + "# 2500\r\n";
		confirmDiag += "#i" + mesoBag + "# 3,000,000";
		
		cm.sendYesNo(confirmDiag);
	}
	else if(status == 3 && optionSelected == 0 && !isWeapon)
	{
		itemSelected = selection;
		var confirmDiag = "This is the item you want to buy?#i" + pearlEqp[itemSelected] + "#\r\n\r\n"
		confirmDiag += "Here is the required materials needed to buy it.\r\n";
		confirmDiag += "#i" + mapleLeaf + "# 2500\r\n";
		confirmDIag += "#i" + mesoBag + "# 3,000,000";
		
		cm.sendYesNo(confirmDiag);
	}
	else if(status == 4 && optionSelected == 0 && isWeapon)
	{
		if(cm.getQuantityOfItem(mapleLeaf) < 2500){
			cm.sendOk("You do not have enough maple leaves, come back again later.");
			return cm.dispose();
		}
		if(cm.getMeso() < 3000000){
			cm.sendOk("You do not have enough mesos, come back again later.");
			return cm.dispose();
		}
		
		cm.gainItem(mapleLeaf, -2500);
		cm.getChar().gainMeso(-3000000)
		cm.gainItem(pearlWep[itemSelected], 1);
		cm.sendOk("Successfully purchased a #i" + pearlWep[itemSelected] + "#");
		return cm.dispose();
	}
	else if(status == 4 && optionSelected == 0 && !isWeapon)
	{
		if(cm.getQuantityOfItem(mapleLeaf) < 2500){
			cm.sendOk("You do not have enough maple leaves, come back again later.");
			return cm.dispose();
		}
		if(cm.getMeso() < 3000000){
			cm.sendOk("You do not have enough mesos, come back again later.");
			return cm.dispose();
		}
		cm.gainItem(mapleLeaf, -2500);
		cm.getChar().gainMeso(-3000000)
		cm.gainItem(pearlEqp[itemSelected], 1);
		cm.sendOk("Successfully purchased a #i" + pearlEqp[itemSelected] + "#");
		return cm.dispose();
	}
	
	// Onyx Gear
	else if(status == 1 && selection == 1)
	{
		optionSelected = selection; // Onyx Eqp
		var onyxDiag = "Which type of onyx maple gear would you like to trade for?\r\n";
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
		confirmDiag += "#i" + mapleLeaf + "# 5000\r\n";
		confirmDiag += "#i" + mesoBag + "# 5,000,000\r\n";
		confirmDiag += "#i" + pearlWep[itemSelected] + "# 1";
		
		cm.sendYesNo(confirmDiag);
	}
	else if(status == 3 && optionSelected == 1 && !isWeapon)
	{
		itemSelected = selection;
		var confirmDiag = "This is the item you want to buy?#i" + onyxEqp[itemSelected] + "#\r\n\r\n"
		confirmDiag += "Here is the required materials needed to buy it.\r\n";
		confirmDiag += "#i" + mapleLeaf + "# 5000\r\n";
		confirmDiag += "#i" + mesoBag + "# 5,000,000\r\n";
		confirmDiag += "#i" + pearlEqp[itemSelected] + "# 1";
		
		cm.sendYesNo(confirmDiag);
	}
	else if(status == 4 && optionSelected == 1 && isWeapon)
	{
		if(cm.getQuantityOfItem(mapleLeaf) < 5000){
			cm.sendOk("You do not have enough maple leaves, come back again later.");
			return cm.dispose();
		}
		
		if(cm.getQuantityOfItem(pearlWep[itemSelected]) <= 0){
			cm.sendOk("You do not have the neccessary materials, come back again later.");
			return cm.dispose();
		}
		
		if(cm.getMeso() < 5000000){
			cm.sendOk("You do not enough mesos, come back again later.");
			return cm.dispose();
		}
		
		cm.gainItem(mapleLeaf, -5000);
		cm.getChar().gainMeso(-5000000)
		cm.gainItem(pearlWep[itemSelected], -1);
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
		if(cm.getQuantityOfItem(pearlEqp[itemSelected]) <= 0){
			cm.sendOk("You do not have the neccessary materials, come back again later.");
			return cm.dispose();
		}
		if(cm.getMeso() < 5000000){
			cm.sendOk("You do not enough mesos, come back again later.");
			return cm.dispose();
		}
		
		cm.gainItem(mapleLeaf, -5000);
		cm.gainItem(pearlEqp[itemSelected], -1);
		cm.getChar().gainMeso(-5000000)
		cm.gainItem(onyxEqp[itemSelected], 1);
		cm.sendOk("Successfully purchased a #i" + onyxEqp[itemSelected] + "#");
		return cm.dispose();
	}
}