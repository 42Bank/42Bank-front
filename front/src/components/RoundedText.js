import React from 'react';
import styled from 'styled-components';

const RoundedText = ({children, home}) => <StyledText home={home}>{children}</StyledText>;

const StyledText = styled.div`
	width: ${({ home }) =>
		home === '1'? `70%` : `100%`};
	padding: 2rem 5rem 5rem;
	background: #58B7BA;
	border-radius: ${({ home }) =>
		home === '1'? `30px` : `0` };
	font-style: normal;
	font-weight: 500;
	font-size: 40px;
	color: white;
	text-align: center;
	box-sizing: border-box;
`
export default RoundedText;
