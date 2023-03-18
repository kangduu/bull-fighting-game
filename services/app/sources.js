let sources = ['http://192.168.10.99:9999', 'http://192.168.88.59:9999'];

if (process.env.NODE_ENV === 'production') {
	sources = '';
}

module.exports.sources = sources;
