import reducer from './reducer';

const createStore = (reducer) => {
	let state = reducer(undefined, { type: '@@INIT' }); // Инициализация состояния
	let subscribers = [];

	return {
		dispatch: (action) => {
			state = reducer(state, action);
			subscribers.forEach((callback) => callback()); // Уведомляем подписчиков
		},
		getState: () => state,
		subscribe: (callback) => {
			subscribers.push(callback);
			return () => {
				subscribers = subscribers.filter((sub) => sub !== callback); // Отписка
			};
		},
	};
};

export const store = createStore(reducer);

store.dispatch({ type: '@@INIT' }); // Инициализация
