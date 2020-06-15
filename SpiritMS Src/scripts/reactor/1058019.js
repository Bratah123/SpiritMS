/* 
 Berserk 4th job quest rock - Warp you away
*/

function act() {
    rm.playerMessage(6, "Chaos Crimson Queen has spawned! Be ready to fight!");
	    rm.getMap().startMapEffect("Allow me to mourn over your imminent demise!!", 5120099);
    rm.spawnMonster(8920000);
}