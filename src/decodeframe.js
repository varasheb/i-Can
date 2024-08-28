function decodeFrame(canframe) {
    if (!Buffer.isBuffer(canframe)) {
        throw new TypeError('Input must be a Buffer');
    }

    // Example: canframe might be [CAN ID (4 bytes), PID (2 bytes), DLC (1 byte), Data (0-8 bytes)]
    if (canframe.length < 7) { // Adjusted minimum length to include PID
        throw new Error('Invalid CAN frame');
    }

    const canID = canframe.readUInt32BE(0); // Read 4 bytes from offset 0 (Big Endian)
    
    const pid = canframe.readUInt16BE(4); // Read 2 bytes for PID starting from offset 4 (Big Endian)

    // Extract Data Length Code (DLC)
    const dlc = canframe[6]; // DLC is the byte right after the PID
    
    // Extract Data (up to 8 bytes)
    const dataLength = Math.min(dlc, canframe.length - 7);
    const data = canframe.slice(7, 7 + dataLength);

    return {
        canID,
        pid,
        data
    };
}

// Example usage:
const exampleFrame = Buffer.from([
    0x00, 0x00, 0x00, 0x01, // CAN ID (0x00000001)
    0x00, 0x02,             // PID (0x0C)
    0x03,                   // DLC (3 bytes of data)
    0xAA, 0xBB, 0xCC        // Data (3 bytes)
]);

const decoded = decodeFrame(exampleFrame);
console.log(decoded);
