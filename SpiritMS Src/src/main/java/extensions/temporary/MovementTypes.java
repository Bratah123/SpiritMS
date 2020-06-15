package extensions.temporary;

public class MovementTypes {

    public static final byte[] Move_Map_Pos = new byte[75];
    public static final byte[] Move_Map_Neg = new byte[10];

    static {
        Move_Map_Pos[68] = 17; // vert grapple
        Move_Map_Pos[67] = 5;
        Move_Map_Pos[15] = 19;
        Move_Map_Pos[14] = 9; // jump down
        Move_Map_Pos[12] = 1;

        Move_Map_Neg[1] = 13;
    }
}
