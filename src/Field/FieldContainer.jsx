import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import FieldLayout from './FieldLayout';
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

const FieldContainer = () => {
	const [, setState] = useState(store.getState());

	useEffect(() => {
		const unsubscribe = store.subscribe(() => {
			setState(store.getState());
		});
		return () => unsubscribe();
	}, []);

	const { field, currentPlayer, isGameEnded, isDraw } = store.getState();

	const checkWinner = (field, player) => {
		return WIN_PATTERNS.some((pattern) =>
			pattern.every((index) => field[index] === player),
		);
	};

	const handleCellClick = (index) => {
		if (field[index] || isGameEnded || isDraw) return;

		store.dispatch({
			type: 'SET_FIELD',
			payload: { index },
		});

		const newField = store.getState().field;
		if (checkWinner(newField, currentPlayer)) {
			store.dispatch({ type: 'SET_GAME_ENDED' });
		} else if (!newField.includes('')) {
			store.dispatch({ type: 'SET_DRAW' });
		} else {
			store.dispatch({
				type: 'SET_CURRENT_PLAYER',
				payload: { player: currentPlayer === 'X' ? 'O' : 'X' },
			});
		}
	};

	return (
		<FieldLayout
			onCellClick={handleCellClick}
			field={field}
			isGameEnded={isGameEnded}
			isDraw={isDraw}
		/>
	);
};

FieldContainer.propTypes = {};

export default FieldContainer;
