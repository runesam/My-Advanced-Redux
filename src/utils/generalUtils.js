module.exports = {
	DBRef: null,
	fireBaseConfig: {
		apiKey: 'AIzaSyBGb0Wk43w2uzM_QJCZiVNACZ01_oxwK00',
		authDomain: 'react-redux-tdd.firebaseapp.com',
		databaseURL: 'https://react-redux-tdd.firebaseio.com',
		projectId: 'react-redux-tdd',
		storageBucket: '',
		messagingSenderId: '671846420991'
	},
	initializeFireBaseApp: fireBase => {
		fireBase.initializeApp(module.exports.fireBaseConfig);
		module.exports.DBRef = fireBase.database().ref();
	},
	getDataBaseReference: () => module.exports.DBRef,
	refactorKey: key => key.toString()
		.toLowerCase()
		.replace('-', '_')
		.replace(/\s+/g, '_')
		.replace(/[^\w-]+/g, '')
		.replace(/__+/g, '_')
		.replace(/^_+/, '')
		.replace(/_+$/, ''),
	refactorObjectToArray: obj =>
		Object.keys(obj).map(key => Object.assign(obj[key], { id: key })),
	addToDB: (uri, data) => {
		const URL = `${module.exports.fireBaseConfig.databaseURL}/${uri}.json`;
		return fetch(URL, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data)
		}).then((response) => response.json()).catch((reason) => console.log(reason));
	},
	updateInDB: (uri, data) => {
		const URL = `${module.exports.fireBaseConfig.databaseURL}/${uri}.json`;
		return fetch(URL, {
			method: 'PATCH',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data)
		}).then((response) => response.json()).catch((reason) => console.log(reason));
	},
	deleteFromDB: (uri) => {
		const URL = `${module.exports.fireBaseConfig.databaseURL}/${uri}.json`;
		return fetch(URL, {
			method: 'DELETE',
			// headers: {
			// 	Accept: 'application/json',
			// 	'Content-Type': 'application/json',
			// },
			// body: JSON.stringify(data)
		}).then((response) => response.json()).catch((reason) => console.log(reason));
	}
};
