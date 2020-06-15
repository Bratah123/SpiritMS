var status = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1)
        status++;
    else {
        cm.sendOk("Oh come on, you backing out?");
        cm.dispose();
        return;
    }
    
    if (cm.haveItem(02022696)) {
        cm.sendOk("What are you doing? I thought I said wait patiently. If you keep bugging me it'll blow out.");
        cm.dispose();
    } else if (cm.getMeso() < 1000000) {
	cm.sendOk("Go away! I have no business with you.");
	cm.dispose();
	}
    
    if (status == 0) {
        cm.sendYesNo("Hey #e#h ##n! I know a #rGame Master#k that is willing to give you an item of choice for the right price.\r\nAre you interested?                                                                                     #rYou can trust me.... Trust me..... I am a super trustworthy person...#k");
    } else if (status == 1) {
        cm.sendGetNumber("I can contact him for you, but how much are you willing to shell out to me for doing the favor?", 10000000, 1000000, 2000000000);
    } else if (status == 2) {
	if (cm.getMeso() < selection) {
	cm.sendOk("Really? You think I'm some 2 year old and easy to scam? Get out of here!");
	cm.dispose();
	}
        cm.gainMeso(-selection);
        cm.sendGetNumber("Come on, this is a huge favor. You can't be expecting me to do this for just #b" +numberWithCommas(selection)+" mesos#k.", 10000000, 1000000, 2000000000);
    } else if (status == 3) {
	if (cm.getMeso() < selection) {
	cm.sendOk("Really? You think I'm some 2 year old and easy to scam? Get out of here!.");
	cm.dispose();
	}
        if (selection < 10000000) {
            cm.gainMeso(-selection);
            cm.sendOk("Really? This is your attitude? I won't even risk myself for doing the job with such a small amount, let alone a #rGame Master#k. Go away.");
			cm.dispose();
        } else {
		cm.gainMeso(-selection);
            cm.sendYesNo("Now we're talking. Alright, but he wants a down payment of #b" +numberWithCommas(5000000)+ " mesos#k. You cool?");
        }
    } else if (status == 4) {
	if (cm.getMeso() < 5000000) {
	cm.sendOk("Really? You think I'm some 2 year old and easy to scam? Get out of here!.");
	cm.dispose();
	}
        cm.gainMeso(-5000000);
        cm.sendYesNo("Great. You're not like those cheap cowards who're scared to shell out the right price. I like you.\r\nYou know what? Because you're so awesome, I'll do you an additional favor for just #b" +numberWithCommas(100000000)+ " mesos#k. Usually I charge twice of that. I'll make sure your item of choice is max stats!");
    } else if (status == 5) {
	if (cm.getMeso() < 100000000) {
	cm.sendOk("Really? You think I'm some 2 year old and easy to scam? Get out of here!.");
	cm.dispose();
	}
        cm.gainMeso(-100000000);
        cm.gainItem(02022696, 1);
        cm.sendOk("Alright cool, here's what will happen. You don't tell anyone what just happened and I'll set up a time and place for you and the #rGame Master#k to meet. You know, he's a busy guy so be patient. Don't worry, I got you.");
		cm.dispose();
    }
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}