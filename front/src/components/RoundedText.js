import React from 'react';
import styled from 'styled-components';

const RoundedText = ({children}) => <StyledText>{children}</StyledText>;

const StyledText = styled.div`
	width: 70%;
	padding: 2rem 5rem 5rem;
	background: #58B7BA;
	border-radius: 30px;
	font-style: normal;
	font-weight: 500;
	font-size: 40px;
	color: white;
	text-align: center;
`
export default RoundedText;
