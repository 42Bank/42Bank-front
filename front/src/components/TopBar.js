import React from 'react';
import styled from 'styled-components';

const TopBar = ({children}) => <StyledBar>{children}</StyledBar>;

const StyledBar = styled.div`
	width: 100%;
	font-family: Roboto;
	font-style: normal;
	font-weight: bold;
	font-size: 25px;
	text-align: center;
	background: #ffffff;
	padding: 1rem;
	box-sizing: border-box;
`
export default TopBar;
