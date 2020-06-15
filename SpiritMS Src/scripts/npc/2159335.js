function start() { 
    cm.sendYesNo("#rWelcome to Hell!#k                                                                                                                          Let me tell you a bit about hell before your rush in and get yourself killed...                                                                                                                                         Here in hell all the monsters/bosses are buffed and very strong, thus they give extra EXP and Bosses have a higher drop rate of rare items.                                                                                                                                                             #rBlack Mage Boss BPQ:#k                                                                                                                       In which there are buffed and harder bosses than that of the regular Boss PQ.  The exp, Boss points , and NX rates are all higher than that of regular! The black mages bpq can be fouund on the same map as normal BPQ.  Be careful, when challenging the devil nothing is ever what it seems.                                                                                                                       #rThe Dojo:#k                                                                                                                                  Bosses are extra strong and give more NX and points than normal Dojo.                                                                                                                                                 #r WARNING: Wheel of destiny is disabled in these channels! You get one try at bosses!                                                                                                                                          Do you still wish to enter Hell? #k"); 
}

function action(mode, type, selection) { 
    if(mode > 0) {
        cm.sendOk("There you go!");
        cm.warp(910000000);
    } else {
        cm.getPlayer().changeChannel(1);
        cm.warp(910000000);
        cm.sendOk("Ha! I knew you wouldn't be able to handle #rHell#k");
    }
}

