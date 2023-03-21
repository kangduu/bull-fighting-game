function updateClient(rooms, params) {
	console.log('[update client] ', params.id, rooms);
	// 未在游戏中
	if (!rooms.has(params.id)) {
		this.emit('update_page_response', { new_id: this.id });
		return;
	}
	//
	const room = rooms.get(params.id);
}

module.exports = updateClient;
