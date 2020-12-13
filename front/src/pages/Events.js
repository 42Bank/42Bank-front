import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import TopBar from '../components/TopBar';
import NavBar from '../components/NavBar';

const Events = () => (
	<>
		<Total/>
		<StyledEvents>
			<TopBar>월렛 얻기</TopBar>
			<NavBar/>
		</StyledEvents>
	</>
);

const Total = createGlobalStyle`
body {
	background-color: #58B7BA;
	margin: 0;
}
`

const StyledEvents = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	// background-color: #58B7BA;
`

export default Events
