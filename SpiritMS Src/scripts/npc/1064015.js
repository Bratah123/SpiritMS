var points;
var one;
var status = -1;
var returnmap = 105200000;
var menu = ["Useables","Ores","Equips(300,000 Each)"]; 
var talk = "\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\n\r##b"; 
var rewards = [
[[2070018,400000,1],[2070016,350000,1],[2340000,150000,5],[2530000,150000,4],[2531000,300000,3],[2049300,300000,3],[2049116,150000,1],[5750000,300000,8],[2049701,200000,1]],//Useables
[[4011008,30000,1],[4005001,30000,1],[4005003,30000,1]],//Ores
[[1402112,300000,1],[1412072,300000,1],[1422074,300000,1],[1432100,300000,1],[1442137,300000,1],[1452130,300000,1],[1472142,300000,1],[1482103,300000,1],[1492102,300000,1],[1522021,300000,1],[1532038,300000,1],[1342041,300000,1],[1362023,300000,1]]//Fearless weapons
];

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    }
    else {
        if (status == 0 && mode == 0) {
            cm.dispose();
            return;
        }
    }

    if (mode == 1) 
        status++;

    else 
        status--;
    if (status == 0) { 
    var marr = cm.getQuestRecord(160150);
    var data = marr.getCustomData();
    if (data == null) {
        marr.setCustomData("0");
        data = "0";
    }
	var time = parseInt(data);
	//      cm.sendSimple("Vellum Will be available in OurStory v4.0!");
	//	  cm.dispose();
        cm.sendSimple("#b#L101##v03994116#Normal Vellum#l\r\n#b#L100##v03994442#Chaos Vellum#l");
    }else if (status == 1) {
        if (mode == 1) {
            switch (selection) {
                case 100:
                    if (cm.getParty() != null) {
                        if (cm.getDisconnected("VellumBattle") != null) {
                            cm.getDisconnected("VellumBattle").registerPlayer(cm.getPlayer());
                        } else if (cm.isLeader()) {
                            var party = cm.getPlayer().getParty().getMembers();
                            var mapId = cm.getPlayer().getMapId();
                            var next = true;
                            var it = party.iterator();
                            while (it.hasNext()) {
										    var i = 0;
        var full = true;
        if (cm.getMap(105200810 + i).getCharactersSize() == 0 && cm.getMap(105200810 + i)) {
								            i;
            if (cm.getMap(105200810 + i).getCharactersSize())
                full = true;
				else
				full = false;
        }
		        if (full) {
            cm.sendOk("Someone is already inside.");
            cm.dispose();
            return;
			}
                                var cPlayer = it.next();
                                var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
                                if (ccPlayer == null || ccPlayer.getLevel() < 150) {
                                    next = false;
                                    break;
                                }
                            }	
                            if (next) {
                                var q = cm.getEventManager("VellumBattle");
                                if (q == null) {
                                    cm.sendOk("Unknown error occured");
									cm.dispose();
                                } else {
                                    q.startInstance(cm.getParty(), cm.getMap());
									cm.dispose();
                                }
                            } else {
                                cm.sendOk("All players must be in map and above level 150.");
                                cm.dispose();
                            }
                        } else {
                            cm.sendOk("You are not the leader of the party, please ask your leader to talk to me.");
                            cm.dispose();
                        }
                    } else {
                        cm.sendOk("Please form a party first.");
                        cm.dispose();
                    }
                    break;
					                case 101:
			            if (time + (12 * 3600000) >= cm.getCurrentTime() && !cm.getPlayer()) {
		                cm.sendOk("You have already went to Horntail in the past 12 hours. Time left: " + cm.getReadableMillis(cm.getCurrentTime(), time + (12 * 3600000)));
		                cm.dispose();
		                return;
	                    }
                    if (cm.getParty() != null) {
                        if (cm.getDisconnected("VellumEasy") != null) {
                            cm.getDisconnected("VellumEasy").registerPlayer(cm.getPlayer());
                        } else if (cm.isLeader()) {
                            var party = cm.getPlayer().getParty().getMembers();
                            var mapId = cm.getPlayer().getMapId();
                            var next = true;
                            var it = party.iterator();
                            while (it.hasNext()) {
										    var i = 0;
        var full = true;
        if (cm.getMap(105200410 + i).getCharactersSize() == 0 && cm.getMap(105200410 + i)) {
								            i;
            if (cm.getMap(105200410 + i).getCharactersSize())
                full = true;
				else
				full = false;
        }
		        if (full) {
            cm.sendOk("Someone is already inside.");
            cm.dispose();
            return;
			}
                                var cPlayer = it.next();
                                var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
                                if (ccPlayer == null || ccPlayer.getLevel() < 100) {
                                    next = false;
                                    break;
                                }
                            }							
                            if (next) {
                                var q = cm.getEventManager("VellumEasy");
                                if (q == null) {
                                    cm.sendOk("Unknown error occured");
									cm.dispose();
                                } else {
                                    q.startInstance(cm.getParty(), cm.getMap());
									cm.dispose();
                                }
                            } else {
                                cm.sendOk("All players must be in map and above level 100.");
                                cm.dispose();
                            }
                        } else {
                            cm.sendOk("You are not the leader of the party, please ask your leader to talk to me.");
                            cm.dispose();
                        }
                    } else {
                        cm.sendOk("Please form a party first.");
                        cm.dispose();
                    }
                    break;
            }
        }
    }else if (status == 2) {
        if (one == false) {
            c = selection; 
            for (var i = 0; i < rewards[c].length; i++) 
                talk+="#L"+i+"##e#i"+rewards[c][i]+":##k#l"; 
            cm.sendSimple("You can exchange your points for these "+rewards[c].length+" items\r\n#r#eYou have to click any of these items to recieve it.#k#n\r\n"+talk);
            one = false;
        }
    }else if (status == 3) {
        var record = cm.getQuestRecord(160150);
        var intPoints = parseInt(points);
        var id = rewards[c][selection];
		
        if (intPoints >= id[1]) {
            if (cm.canHold(id[0])) {
                intPoints -= id[1];
                record.setCustomData(""+intPoints+"");
                cm.gainItem(id[0], id[2]);
                //cm.sendOk("id "+id[0]+" price "+id[1]+" amount "+id[2]);         
                cm.sendOk("Enjoy your reward");
                cm.dispose();
            } else {
                cm.sendOk("Please check if you have sufficient inventory slot for it.");
                cm.dispose();
            }
        } else {
		        	    var Error = "You don't have enough #rBossPQ Points#k,\r\n#b#t"+id[0]+"##k costs #b"+id[1]+"#k Bosspq Points";
	
            cm.sendOk(Error);
            cm.dispose();
        }              
    }
}