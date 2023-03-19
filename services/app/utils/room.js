const { generateRoomNo } = require('./generate-room-no');

class CreateBullFightingRoom {
	constructor(config) {
		// 初始化
		this.init(config);
	}

	init(config) {
		// 房间id，房主连接socket时生成的随机id
		this.id = config?.id;
		//玩家人数
		this.total = config?.total || 6;
		// 房间号
		this.room_no = generateRoomNo();
		// 游戏玩家
		this.player = [];
		// 房间状态: waiting | playing | ending | closed
		this.status = 'waiting';
	}
}

module.exports = CreateBullFightingRoom;
