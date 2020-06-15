/* 
 * NPC :      Mihai
 * Map :      Timu's Forest
 */

function start() {
    cm.warp(100000000);
}

function action(mode, type, selection) {
    if (mode == 1) {
	cm.removeNpc(cm.getMapId(), cm.getNpc());
	cm.spawnMonster(9001009,1); // Transforming
    }
    cm.dispose();
}