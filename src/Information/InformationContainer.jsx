import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import InformationLayout from './InformationLayout';
import { store } from '../store';

const InformationContainer = () => {
	const [, setState] = useState(store.getState());

	useEffect(() => {
		const unsubscribe = store.subscribe(() => {
			setState(store.getState());
		});
		return () => unsubscribe();
	}, []);

	const { currentPlayer, isGameEnded, isDraw } = store.getState();

	let status;
	if (isDraw) {
		status = 'Ничья';
	} else if (isGameEnded) {
		status = `Победа: ${currentPlayer}`;
	} else {
		status = `Ходит: ${currentPlayer}`;
	}

	return <InformationLayout status={status} />;
};

InformationContainer.propTypes = {};

export default InformationContainer;
