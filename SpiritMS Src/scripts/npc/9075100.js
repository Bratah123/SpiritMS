function start() {
    if (cm.getPlayer().getMapId() == 401060200) {
		cm.warp(401060000);
		cm.dispose();
        status = 1;
        return;
    }
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
    var marr = cm.getQuestRecord(260160);
    var data = marr.getCustomData();
    if (data == null) {
        marr.setCustomData("0");
        data = "0";
    }
	var time = parseInt(data);
		if(cm.getEvoEntry() <= 0) {
			cm.sendOk("You have already gone into the Evolution Lab 5 times in the past 12 Hours!");
			cm.dispose();
		} else {
        cm.sendSimple("#dWelcome to the Evolution System you may enter by yourself or with a party#k\r\n\r\n#b#L100#Evolution Lab #r-Solo#k\r\n#b#L101#Evolution Lab #r-Party#k#l\r\n\r\n #rYou have#k #b" + cm.getEvoEntry() + "#k#r Entries left");
		}
    }else if (status == 1) {
        if (mode == 1) {
            switch (selection) {
                case 100:
                    if (cm.getParty() != null) {
                        if (cm.getDisconnected("EvolutionLab") != null) {
                            cm.getDisconnected("EvolutionLab").registerPlayer(cm.getPlayer());
                        } else if (cm.isLeader()) {
                            var party = cm.getPlayer();
                            var mapId = cm.getPlayer().getMapId();
                            var next = true;
                            if (next) {
                                var q = cm.getEventManager("EvolutionLab");
                                if (q == null) {
                                    cm.sendOk("Unknown error occured");
									cm.dispose();
                                } else {
                                    q.startInstance(cm.getPlayer(), cm.getMap());
									cm.setEvoEntry(1);
								//	cm.spawnMonster(8880010,1,1400,-1348);
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
                    if (cm.getParty() != null) {
                        if (cm.getDisconnected("EvolutionLab") != null) {
                            cm.getDisconnected("EvolutionLab").registerPlayer(cm.getPlayer());
                        } else if (cm.isLeader()) {
                            var party = cm.getPlayer().getParty().getMembers();
                            var mapId = cm.getPlayer().getMapId();
                            var next = true;
                            var it = party.iterator();
                            while (it.hasNext()) {
										    var i = 0;
        var full = true;
        if (cm.getMap(401060200 + i).getCharactersSize() == 0 && cm.getMap(401060200 + i)) {
								            i;
            if (cm.getMap(401060200 + i).getCharactersSize())
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
                                if (ccPlayer == null || ccPlayer.getLevel() < 110) {
                                    next = false;
                                    break;
                                }
                            }	
                            if (next) {
                                var q = cm.getEventManager("MagnusBattle");
                                if (q == null) {
                                    cm.sendOk("Unknown error occured");
									cm.dispose();
                                } else {
                                    q.startInstance(cm.getParty(), cm.getMap());
								//	cm.spawnMonster(8880010,1,1400,-1348);
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
            }
        }
    }
}