function enter(pi) {
    var mapid = 0;
    var portal = 0;
    switch (pi.getPlayer().getMapId()) {
        case 931050410:
        if(em == null){
            mapid = 102040600;
            portal = 1;
        }else{
            pi.openNpc(9010003);//ria
        }
        break;
        case 105200500:
            mapid = 105200110;
            portal = 0;
            break;
        case 105200700:
            mapid = 105200310;
            portal = 0;
            break;
        case 105200600:
            mapid = 105200210;
            portal = 1;
            break;
        case 105200800:
            mapid = 105200410;
            portal = 1;
            break;
	     case 105200200:
            mapid = 105200210;
            portal = 0;
            break;
        case 105200300:
            mapid = 105200310;
            portal = 0;
            break;
        case 105200400:
            mapid = 105200410;
            portal = 1;
            break;
        case 105200100:
            mapid = 105200110;
            portal = 1;
            break;
    }
    if (mapid != 0) {
        pi.warp(mapid, portal);
    }
    return true;
}