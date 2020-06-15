function start() { 
	cm.sendOk("Hello, if you would like to battle the #rbiggest of the alien scum#k, you must first prove you are worthy by bringing me 1000 Silver Coins.                                                                     Talk to the #gResearcher#k to enter alien field, where silver coins drop."); 
} 

function action(mode, type, selection) {
	if (cm.haveItem(4031697, 1000)) { //check to see if the user has 1000 silver coins
		cm.gainItem(4031697, -1000); //take 1000 silver coins
		cm.gainItem(4031473, 1);  //give a key for quest
		cm.dispose();
	}
	else{ //if they dont have 1000 silver coins then...
		cm.sendOk("Bring me 1,000 silver coins and I will consider you worthy...");
		cm.dispose();
	}
}