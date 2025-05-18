const initialState = {
	field: ['', '', '', '', '', '', '', '', ''],
	currentPlayer: 'X',
	isGameEnded: false,
	isDraw: false,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_FIELD':
			const newField = [...state.field];
			newField[action.payload.index] = state.currentPlayer;
			return {
				...state,
				field: newField,
			};
		case 'SET_CURRENT_PLAYER':
			return {
				...state,
				currentPlayer: action.payload.player,
			};
		case 'SET_GAME_ENDED':
			return {
				...state,
				isGameEnded: true,
			};
		case 'SET_DRAW':
			return {
				...state,
				isDraw: true,
			};
		case 'RESTART_GAME':
			return initialState;
		default:
			return state;
	}
};

export default reducer;
