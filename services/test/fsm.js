const fs = require('fs/promises');
const path = require('path');

const data = {
	name: 'jake',
	age: 10,
};

// 读文件 open 《文件标识》
// fs.open(path.resolve(__dirname, `name.json`), 'w+').then(async fd => {
// 	const file = await fd.readFile({ encoding: 'utf8' });
// 	console.log(file);

// 写文件 writeFile
// 	fd.writeFile(JSON.stringify(data), 'utf8');
// });

// 增 appendFile
// fs.appendFile(path.resolve(__dirname, `name.json`), JSON.stringify(data)).then(
// 	res => {
// 		console.log('res', res);
// 	}
// );

// 删 rm
// fs.rm(path.resolve(__dirname, `name.json`));
