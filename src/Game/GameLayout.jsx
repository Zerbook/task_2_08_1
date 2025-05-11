import React from 'react';
import PropTypes from 'prop-types';
import styles from './GameLayout.module.css';

const GameLayout = ({ information, field, onReset }) => {
	return (
		<div className={styles.game}>
			<div className={styles.container}>
				{information}
				{field}
				<button className={styles.resetButton} onClick={onReset}>
					Начать заново
				</button>
			</div>
		</div>
	);
};

GameLayout.propTypes = {
	information: PropTypes.element.isRequired,
	field: PropTypes.element.isRequired,
	onReset: PropTypes.func.isRequired,
};

export default GameLayout;
