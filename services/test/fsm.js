const fs = require('fs/promises');
const path = require('path');

const data = {
	name: 'duk',
	age: 20,
};

fs.appendFile(path.resolve(__dirname, `name.json`), JSON.stringify(data)).then(
	res => {
		console.log('res', res);
	}
);

console.log(fs.unlink);
