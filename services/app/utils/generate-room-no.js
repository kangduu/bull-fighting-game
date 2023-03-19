function generateRoomNo(length = 4) {
	const _random = Math.random().toFixed(length);
	return Math.ceil(_random * Math.pow(10, 4));
}

module.exports.generateRoomNo = generateRoomNo;
