const CreateBullFightingRoom = require('../../utils/room');

function createRoom(rooms, params) {
	let room;

	if (rooms.has(params.id)) {
		room = rooms.get(params.id);
	} else {
		room = new CreateBullFightingRoom({
			id: params.id,
			total: params.total,
		});
		rooms.set(params.id, room);
	}

	this.emit('created_room', room);

	console.log('[create room]', rooms);

	return room;
}

module.exports = createRoom;
