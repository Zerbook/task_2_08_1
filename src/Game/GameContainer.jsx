import React from 'react';
import GameLayout from './GameLayout';
import FieldContainer from '../Field/FieldContainer';
import InformationContainer from '../Information/InformationContainer';
import { store } from '../store';

const WIN_PATTERNS = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];

const GameContainer = () => {
	const checkWinner = (field, player) => {
		return WIN_PATTERNS.some((pattern) =>
			pattern.every((index) => field[index] === player),
		);
	};

	const handleReset = () => {
		store.dispatch({ type: 'RESTART_GAME' });
	};

	const handleCellClick = (index) => {
		const { field, currentPlayer, isGameEnded, isDraw } = store.getState();
		if (field[index] || isGameEnded || isDraw) return;

		store.dispatch({
			type: 'SET_FIELD',
			payload: { index },
		});

		const newField = store.getState().field;
		if (checkWinner(newField, currentPlayer)) {
			store.dispatch({
				type: 'SET_GAME_ENDED',
				payload: { isGameEnded: true },
			});
		} else if (!newField.includes('')) {
			store.dispatch({
				type: 'SET_DRAW',
				payload: { isDraw: true },
			});
		} else {
			store.dispatch({
				type: 'SET_CURRENT_PLAYER',
				payload: { player: currentPlayer === 'X' ? 'O' : 'X' },
			});
		}
	};

	return (
		<GameLayout
			information={<InformationContainer />}
			field={<FieldContainer onCellClick={handleCellClick} />}
			onReset={handleReset}
		/>
	);
};

export default GameContainer;
