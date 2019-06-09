import TYPE from './types';

export function flattenState(deep = {}) {
	let nextKey = 0;
	const state = {};
	if (deep.type === TYPE.CONTAINER && Array.isArray(deep.items)) {
		nextKey = normalize(nextKey, state, [deep]) + 1;
	}
	return {data: state, nextKey};
}

function normalize(currentKey, state, items = []) {
	let key = currentKey;
	state[currentKey] = items.map(item => {
		if (item.type === TYPE.CONTAINER && Array.isArray(item.items)) {
			const nextKey = key + 1;
			key = normalize(nextKey, state, item.items);
			return {type: item.type, itemsKey: nextKey};
		}
		return item;
	});

	return key;
}

export function deepenState(flat, skipKey) {
	if (Array.isArray(flat[0])) {
		return getItems(flat, skipKey)[0];
	}
}

function getItems(flat, skipKey, key = 0) {
	const flatItems = flat[key];
	const items = [];

	for (const item of flatItems) {
		if (
			item.type === TYPE.CONTAINER &&
			item.itemsKey &&
			item.itemsKey !== skipKey
		) {
			const nextItems = getItems(flat, skipKey, item.itemsKey);
			items.push({type: item.type, items: nextItems});
		} else if (item.type === TYPE.BOX) {
			items.push(item);
		}
	}
	return items;
}

export function generateRandomColor() {
	// prettier-ignore
	return `#${`00000${((Math.random() * (1 << 24)) | 0).toString(16)}`.slice(-6)}`;
}
