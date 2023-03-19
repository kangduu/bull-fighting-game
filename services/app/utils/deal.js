// 原始牌
function createPairs() {
	const BaseType = ['spade', 'hearts', 'diamond', 'club'],
		BaseNumber = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];

	function addType(number) {
		return BaseType.map(item => `${number}-${item}`);
	}

	return BaseNumber.reduce((prev, curr) => {
		prev.push(...addType(curr));
		return prev;
	}, []);
}

// 洗牌
function shuffle(data) {
	try {
		let newArr = [];
		for (let i = 0, len = data.length; i < len; i++) {
			let j = Math.floor(Math.random() * (len - i));
			newArr[i] = data.splice(j, 1)[0];
		}
		return newArr;
	} catch (error) {
		console.log('shuffle error:', error);
		return data;
	}
}

// 发牌
function deal(length = 3 /*多少份*/, total = 5 /*几张牌*/) {
	const pairs = shuffle(createPairs());
	const count = length * total;
	const result = new Array(length);

	for (let i = 0; i < count; i++) {
		const card = pairs.pop();
		const index = i % length;
		if (result[index]) result[index].push(card);
		else result[index] = [card];
	}

	return result;
}

module.exports.deal = deal;
