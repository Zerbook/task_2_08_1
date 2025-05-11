import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { store } from '../store';
import styles from './FieldLayout.module.css';

const FieldLayout = ({ onCellClick }) => {
	const [, setState] = useState(store.getState());

	useEffect(() => {
		const unsubscribe = store.subscribe(() => {
			setState(store.getState());
		});
		return () => unsubscribe();
	}, []);

	const { field, isGameEnded, isDraw } = store.getState();

	return (
		<div className={styles.field}>
			{Array.from({ length: 3 }).map((_, rowIndex) => (
				<ul key={rowIndex} className={styles.row}>
					{Array.from({ length: 3 }).map((_, colIndex) => (
						<li key={colIndex}>
							<button
								className={styles.cell}
								onClick={() => onCellClick(rowIndex * 3 + colIndex)}
								disabled={
									field[rowIndex * 3 + colIndex] ||
									isGameEnded ||
									isDraw
								}
								aria-label={`Cell ${rowIndex * 3 + colIndex + 1}, ${
									field[rowIndex * 3 + colIndex] || 'empty'
								}`}
							>
								{field[rowIndex * 3 + colIndex]}
							</button>
						</li>
					))}
				</ul>
			))}
		</div>
	);
};

FieldLayout.propTypes = {
	onCellClick: PropTypes.func.isRequired,
};

export default FieldLayout;
