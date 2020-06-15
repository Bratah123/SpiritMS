/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package tools.packet;

import java.awt.Point;

/**
 *
 * @author Mikey
 */
class ObtacleAtom {
    
    final byte type;
    private int uniqueid, speed, spawndelay, distance, angle;
    private final Point position = new Point();
            
    
    
    private ObtacleAtom(int type) {
    this.type = (byte) type;
    this.uniqueid = uniqueid;
    }
    
        public int getUniqueId() {
        return uniqueid;
    }

            public Point getPosition() {
        return new Point(position);
    }
        
    public byte getType() {
        return type;
    }
    
        public int getMaxSpeed() {
        return speed;
    }
        
     public int getSpawnDelay() {
        return spawndelay;
    }
    
          public int getDistance() {
        return distance;
    }
          public int getAngle() {
        return angle;
    }
}
