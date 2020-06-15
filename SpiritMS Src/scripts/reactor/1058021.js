/* 
 Berserk 4th job quest rock - Warp you away
*/

function act() {
    rm.playerMessage(6, "Chaos Vellum has spawned! Be ready to fight!");
    rm.getMap().startMapEffect("You ignore my warnings? I will show you no mercy!", 5120103);
	var mob0 = rm.getMonster(8930000);
	var map = rm.getMap(105200810);
	var modified = rm.newMonsterStats();
    modified.setOMp(mob0.getMobMaxMp());
	modified.setOHp(mob0.getMobMaxHp() * 2.0);
	modified.setOExp(mob0.getMobExp() * 1);
	mob0.setOverrideStats(modified);
	map.spawnMonsterOnGroundBelow(mob0, new java.awt.Point(-179, 443)); 
//  rm.spawnMonster(8930000);
}