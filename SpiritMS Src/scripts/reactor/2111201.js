function act() {
    rm.changeMusic("Bgm06/FinalFight");
	rm.getMap().spawnEasyZakum(-10, -215);
    rm.mapMessage("The Zakum simulator responds to the [Eye of Fire Chunk].");
	if (!rm.getPlayer().isGM()) {
		rm.getMap().startSpeedRun();
	}
}