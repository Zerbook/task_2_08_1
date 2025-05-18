import React from 'react';
import PropTypes from 'prop-types';
import styles from './InformationLayout.module.css';

const InformationLayout = ({ status }) => {
	return (
		<div className={styles.information}>
			<h2 className={styles.title}>{status}</h2>
		</div>
	);
};

InformationLayout.propTypes = {
	status: PropTypes.string.isRequired,
};

export default InformationLayout;
