import React from 'react';
import styled from 'styled-components';
import TopBar from '../components/TopBar';
import NavBar from '../components/NavBar';

const Events = () => (
	<>
		<StyledEvents>
			<TopBar>월렛 얻기</TopBar>
			<NavBar/>
		</StyledEvents>
	</>
);

const StyledEvents = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`

export default Events
