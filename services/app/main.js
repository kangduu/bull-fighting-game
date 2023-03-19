const cors = require('cors'),
	express = require('express');
const { Server } = require('socket.io');
const { createServer } = require('http');
const { sources } = require('./utils/sources');
const modelHandler = require('./model/index');

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

HttpServer.listen(port, () => {
	console.log(`Server listening on ${port}`);
});
