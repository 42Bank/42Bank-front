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
			<EventList>
				<EventDate>2020.12.17</EventDate>
				<EventTxt>해커톤</EventTxt>
				<EventWallet>🤑 42 ₳ 🤑</EventWallet>
			</EventList>
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
	// background-color: #EFEDED;
`

const EventList = styled.li`
	width: 80%;
	background: #fff;
	border-radius: 20px;
	margin: 2rem 0rem;
	list-style: none;
	text-align: center;
	font-size: 20px;
	font-weight: bold;
	padding: 1.5rem;
	line-height: 35px;
	&: hover {
		cursor: pointer;
		background: #EFEDED;
	}
`

const EventDate = styled.div`

`

const EventTxt = styled.div`
	font-size: 24px;
`

const EventWallet = styled.div`

`

export default Events
