import React from 'react';
import PropTypes from 'prop-types';
import styles from './FieldLayout.module.css';

const FieldLayout = ({ onCellClick, field, isGameEnded, isDraw }) => {
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
	field: PropTypes.arrayOf(PropTypes.string).isRequired,
	isGameEnded: PropTypes.bool.isRequired,
	isDraw: PropTypes.bool.isRequired,
};

export default FieldLayout;
