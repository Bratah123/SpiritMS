/* 
 Berserk 4th job quest rock - Warp you away
*/

function act() {
    rm.playerMessage(6, "Vellum has spawned! Be ready to fight!");
	rm.getMap().startMapEffect("You ignore my warnings? I will show you no mercy!", 5120103);
	
    rm.spawnMonster(8930100);
}