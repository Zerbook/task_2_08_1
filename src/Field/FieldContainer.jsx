import React from 'react';
import PropTypes from 'prop-types';
import FieldLayout from './FieldLayout';

const FieldContainer = ({ onCellClick }) => {
	return <FieldLayout onCellClick={onCellClick} />;
};

FieldContainer.propTypes = {
	onCellClick: PropTypes.func.isRequired,
};

export default FieldContainer;
