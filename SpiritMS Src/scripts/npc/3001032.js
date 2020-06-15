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
    var marr = cm.getQuestRecord(160160);
    var data = marr.getCustomData();
    if (data == null) {
        marr.setCustomData("0");
        data = "0";
    }
	var time = parseInt(data);
			      if (time + (12 * 3600000) >= cm.getCurrentTime() && !cm.getPlayer()) {
                cm.sendOk("You have already went to Cygnus in the past 12 hours. Time left: " + cm.getReadableMillis(cm.getCurrentTime(), time + (12 * 3600000)));
                cm.dispose();
                return;
            }
        cm.sendSimple("#b#L100#Magnus simulator#l");
    }else if (status == 1) {
        if (mode == 1) {
            switch (selection) {
                case 100:
                    if (cm.getParty() != null) {
                        if (cm.getDisconnected("EasyMagnus") != null) {
                            cm.getDisconnected("EasyMagnus").registerPlayer(cm.getPlayer());
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
                                var q = cm.getEventManager("EasyMagnus");
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
    }else if (status == 2) {
        if (one == false) {
            c = selection; 
            for (var i = 0; i < rewards[c].length; i++) 
                talk+="#L"+i+"##e#i"+rewards[c][i]+":##k#l"; 
            cm.sendSimple("You can exchange your points for these "+rewards[c].length+" items\r\n#r#eYou have to click any of these items to recieve it.#k#n\r\n"+talk);
            one = false;
        }
    }else if (status == 3) {
        var record = cm.getQuestRecord(160160);
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