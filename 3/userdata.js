
const HTTP_STATUS_SUCCESS = 200;
const endPoint = '/users';

const getUserData = id =>
	new Promise(async (resolve, reject) => {
		const response = await fetch(endPoint + '/' + id);

		if (response.ok && response.status === HTTP_STATUS_SUCCESS) {
			try {
				const json = await response.json();
				return resolve(json);
			} catch (err) {
				return reject(err);
			}
		}

		reject(new Error('Сообщаю об ошибке'));
	});

const saveUserData = userData =>
	new Promise(async (resolve, reject) => {
		const body = JSON.stringify(userData);

		const response = await fetch(endPoint,
			{
				method: 'POST',
				headers: { 'Content-Type': 'application/json;charset=utf-8' },
				body,
			}
		);

		if (response.ok && response.status === HTTP_STATUS_SUCCESS)
			return resolve('Успешно');

		reject(new Error('Сообщаю об ошибке'));
	});
