const fs = require('fs/promises');
const path = require('path');

const users = {
	duk: {
		id: 'duk',
		name: '杜康',
		passwd: '123456',
		username: 'duk',
	},
	liyt: {
		id: 'liyt',
		name: '李云田',
		passwd: '123456',
		username: 'liyt',
	},
	zhaogy: {
		id: 'zhaogy',
		name: '赵国元',
		passwd: '123456',
		username: 'zhaogy',
	},
	zhangxy: {
		id: 'zhangxy',
		name: '张晓宇',
		passwd: '123456',
		username: 'zhangxy',
	},
	huangsq: {
		id: 'huangsq',
		name: '黄绍强',
		passwd: '123456',
		username: 'huangsq',
	},
	liut: {
		id: 'liut',
		name: '刘韬',
		passwd: '123456',
		username: 'liut',
	},
	zongry: {
		id: 'zongry',
		name: '宗瑞友',
		passwd: '123456',
		username: 'zongry',
	},
	zhanghw: {
		id: 'zhanghw',
		name: '张翰文',
		passwd: '123456',
		username: 'zhanghw',
	},
	zhangc: {
		id: 'zhangc',
		name: '张川',
		passwd: '123456',
		username: 'zhangc',
	},
	liqs: {
		id: 'liqs',
		name: '李群山',
		passwd: '123456',
		username: 'liqs',
	},
	wangjx: {
		id: 'wangjx',
		name: '王建勋',
		passwd: '123456',
		username: 'wangjx',
	},
	fengl: {
		id: 'fengl',
		name: '冯亮',
		passwd: '123456',
		username: 'fengl',
	},
	limd: {
		id: 'limd',
		name: '李茂德',
		passwd: '123456',
		username: 'limd',
	},
	liuqj: {
		id: 'liuqj',
		name: '刘泉江',
		passwd: '123456',
		username: 'liuqj',
	},
};

async function creator() {
	// 删除一次
	await fs.rm(path.resolve(__dirname, `../db/users.json`), {
		force: true, // 如果 path 不存在，则异常将被忽略
	});

	// 写入文件-用户信息
	await fs.appendFile(
		path.resolve(__dirname, `../db/users.json`),
		JSON.stringify(users)
	);
}

creator();

module.exports = creator;
