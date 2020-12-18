import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled, {createGlobalStyle} from 'styled-components';
import TopBar from '../components/TopBar';
import NavBar from '../components/NavBar';

const Parsing = () => {
	const [info, setInfo] = useState();
	useEffect(() => {
		const apiCall = async() => {
			const data = await axios.get('http://localhost:8000/api/Notice/');
			const temp = data;
			setInfo(temp);
		};
		apiCall();
	}, []);
	if (!info) return null;
	return info;
};

const Events = () => {
	const event = Parsing();
	console.log(event);
	return (
		<>
			<Total/>
			<StyledEvents>
				<TopBar>월렛 얻기</TopBar>
				<NavBar/>
				<EventList>
					<EventDate>2020.12.17</EventDate>
					<EventTxt>{event && event.data[0].title}</EventTxt>
					<EventWallet>🤑 {event && event.data[0].price} ₳ 🤑</EventWallet>
				</EventList>
			</StyledEvents>
		</>
	);
};

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
