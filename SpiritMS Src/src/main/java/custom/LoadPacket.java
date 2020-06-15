/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package custom;

import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Properties;
import tools.HexTool;
import tools.data.MaplePacketLittleEndianWriter;

/**
 *
 * @author Itzik
 */
public class LoadPacket {

    public static byte[] getPacket() {
        Properties packetProps = new Properties();
        InputStreamReader is;
        try {
            is = new FileReader("CPacket.txt");
            packetProps.load(is);
            is.close();
        } catch (IOException ex) {
            System.out.println("Failed to load CPacket.txt");
        }
        MaplePacketLittleEndianWriter mplew = new MaplePacketLittleEndianWriter();
        mplew.write(HexTool.getByteArrayFromHexString(packetProps.getProperty("packet")));
        return mplew.getPacket();
    }
}
