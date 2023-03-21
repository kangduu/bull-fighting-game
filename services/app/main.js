const cors = require('cors'),
	express = require('express');
const path = require('path');
const { Server } = require('socket.io');
const { createServer } = require('http');
const { sources } = require('./utils/sources');
const modelHandler = require('./model/index');
const { open } = require('fs/promises');

const app = express();
app.use(cors(sources));
const HttpServer = createServer(app);
const port = 3000;

modelHandler(
	// 创建实时连接
	new Server(HttpServer, {
		cors: { origin: sources },
	})
);

app.get('/user', (req, res) => {
	open(path.resolve(__dirname, './db/users.json'), 'r').then(async fd => {
		const users = await fd.readFile({ encoding: 'utf8' });
		const response = {
			code: 200,
			data: JSON.parse(users),
			msg: 'Success',
		};
		res.json(response);
	});
});

HttpServer.listen(port, () => {
	console.log(`Server listening on ${port}`);
});
