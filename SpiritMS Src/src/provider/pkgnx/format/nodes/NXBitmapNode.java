/*
 * The MIT License (MIT)
 *
 * Copyright (C) 2013 Aaron Weiss
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
package provider.pkgnx.format.nodes;

import provider.pkgnx.NXFile;
import provider.pkgnx.format.NXNode;
import provider.pkgnx.util.SeekableLittleEndianAccessor;

import java.awt.image.BufferedImage;

/**
 * An {@code NXNode} representing a {@code Bitmap} as a {@code BufferedImage}.
 *
 * @author Aaron Weiss
 * @version 2.0.0
 * @since 5/27/13
 */
public class NXBitmapNode extends NXNode {
	private final long bitmapIndex;
	private final int width, height;

	/**
	 * Creates a new {@code NXBitmapNode}.
	 *
	 * @param name       the name of the node
	 * @param file       the file the node is from
	 * @param childIndex the index of the first child of the node
	 * @param childCount the number of children
	 * @param slea       the {@code SeekableLittleEndianAccessor} to read from
	 */
	public NXBitmapNode(String name, NXFile file, long childIndex, int childCount, SeekableLittleEndianAccessor slea) {
		super(name, file, childIndex, childCount);
		bitmapIndex = slea.getUnsignedInt();
		width = slea.getUnsignedShort();
		height = slea.getUnsignedShort();
	}

	@Override
	public Object get() {
		return getImage();
	}

	/**
	 * Gets the value of this node as a {@code BufferedImage}.
	 *
	 * @return the node value
	 */
	public BufferedImage getImage() {
		if (file.getHeader().getBitmapCount() == 0)
			return null;
		return file.getTables().getImage(bitmapIndex, width, height);
	}

	@Override
	public boolean equals(Object obj) {
		if (obj == null)
			return false;
		else if (!(obj instanceof NXBitmapNode))
			return false;
		else
			return obj == this || (((NXNode) obj).getName().equals(getName()) &&
					((NXNode) obj).getChildCount() == getChildCount() &&
					((NXNode) obj).getFirstChildIndex() == getFirstChildIndex() &&
					((NXBitmapNode) obj).bitmapIndex == bitmapIndex &&
					((NXBitmapNode) obj).height == height &&
					((NXBitmapNode) obj).width == width);
	}

    @Override
    public int hashCode() {
        int hash = 5;
        hash = 97 * hash + (int) (this.bitmapIndex ^ (this.bitmapIndex >>> 32));
        hash = 97 * hash + this.width;
        hash = 97 * hash + this.height;
        return hash;
    }

}
