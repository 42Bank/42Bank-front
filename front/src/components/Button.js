import React from "react"
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = ({ children }) => <StyledButton>{children}</StyledButton>;

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

const StyledButton = styled.button`
  width: 4em;
  height: 4em;
  margin: 0 5px;
  border-radius: 1em;
	border: none;
	background: none;
	&: hover {
		cursor: pointer;
		background: gray;
	}
`;

export default Button;
