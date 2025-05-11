import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { store } from '../store';
import styles from './InformationLayout.module.css';

const InformationLayout = () => {
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

	return (
		<div className={styles.information}>
			<h2 className={styles.title}>{status}</h2>
		</div>
	);
};

InformationLayout.propTypes = {};

export default InformationLayout;
