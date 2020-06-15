mob2 = [[[9400014,20],[9400549,20],[9500100,20],[8500001,20],[9400121,9],[9600001,20],[9500124,20]]];
status = 0;

var type = null;

function start() {
    if (cm.getPlayer().getMapId() == 913010000) {
	    //Spawner
            talk = "I will summon mobs to help you train.\r\n\r\n";
            for (var i = 0; i < mob2[0].length; i++)
                talk += "#b#L"+i+"##o"+mob2[0][i]+"##l\r\n#k";
			
            cm.sendSimple(talk + "#r#L100#Cleardrops#l\r\n#L101#Kill All Monsters#l#k");
        type = true;
    }else {
        if (type != false) {
            if (cm.getParty() != null) {//Party Warp
                if (cm.getDisconnected("SpawnRoom") != null) {
                    cm.getDisconnected("SpawnRoom").registerPlayer(cm.getPlayer());
                } else if (cm.isLeader()) {
                    var party = cm.getPlayer().getParty().getMembers();
                    var next = true;
                    var it = party.iterator();
                    while (it.hasNext()) {
                        var cPlayer = it.next();
                        var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
                        if (ccPlayer == null || ccPlayer.getLevel() < 10) {
                            next = false;
                            break;
                        }
                    }	
                    if (next) {
                        var q = cm.getEventManager("SpawnRoom");
                        if (q == null) {
                            cm.sendOk("Unknown error occured");
                        } else {
                            q.startInstance(cm.getParty(), cm.getMap());
                            cm.dispose();
                        }
                    } else {
                        cm.sendOk("All players must be in map and above level 10.");
                        cm.dispose();
                    }
                } else {
                    cm.sendOk("You are not the leader of the party, please ask your leader to talk to me.");
                    cm.dispose();
                }
            } else {// Solo Warp
                if (cm.getPlayer().getLevel() >= 10) {
                    var q = cm.getEventManager("SpawnRoom");
                    if (q == null) {
                        cm.sendOk("Unknown error occured");
                    } else {
                        q.startInstance(cm.getPlayer(), cm.getMap());
                        cm.dispose();
                    }
                } else {
                    cm.sendOk("You have to be above level 10.");
                    cm.dispose();
                }
            }
        }
    }
}

function action(m,t,s) {
    if (m > 0)
        status++;
    else{
        cm.dispose();
        return;
    }
    if (status == 1) {
        //Spawner
        if (type == true) {
            if (s == 100) {
                cm.cleardrops();
                cm.dispose();
            } else if (s == 101) {
                cm.killAllMonsters();
                cm.dispose();
            }else{
                if (cm.getPlayer().getMap().getMonsterCount() > 0) {
                    cm.sendOk("Sorry, there are some mobs already spawned. Kill them first.");
                    cm.dispose();
                }else{
				var spawn = mob2[0][s];
				cm.summonMob(spawn[0], spawn[1]);
				}
                cm.dispose();
            }
        }
    }
}