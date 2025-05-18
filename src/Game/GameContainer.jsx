import React from 'react';
import GameLayout from './GameLayout';
import FieldContainer from '../Field/FieldContainer';
import InformationContainer from '../Information/InformationContainer';
import { store } from '../store';

const GameContainer = () => {
	const handleReset = () => {
		store.dispatch({ type: 'RESTART_GAME' });
	};

	return (
		<GameLayout
			information={<InformationContainer />}
			field={<FieldContainer />}
			onReset={handleReset}
		/>
	);
};

export default GameContainer;
