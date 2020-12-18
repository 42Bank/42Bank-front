import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled, {createGlobalStyle} from 'styled-components';
import TopBar from '../components/TopBar';
import NavBar from '../components/NavBar';
import Transanction from '../components/Transanction'
import RoundedText from '../components/RoundedText';

const Parsing = () => {
	const [info, setInfo] = useState();
	useEffect(() => {
		const apiCall = async() => {
			const data = await axios.get('http://localhost:8000/api/Order/');
			const temp = data;
			setInfo(temp);
		};
		apiCall();
	}, []);
	if (!info) return null;
	return info;
};

const get_info = (transac) => {
	const tempInfo = transac.data.filter(data =>
	data.intra_id === window.sessionStorage.getItem('intra_id'));
	return tempInfo;
};

const Bank = () => {
	const transac = Parsing();
	const tInfo = transac ? get_info(transac): null;
	console.log(tInfo);
	return (
			<>
				<Total/>
				<TopBar>입출금 내역</TopBar>
				<StyledBank>
					<RoundedText home="0">
						<CurrentMny>현재잔고</CurrentMny>
						<br/>13 ₳
					</RoundedText>
					<TransanctionBlock>
						<Transanction></Transanction>
					</TransanctionBlock>
					<NavBar/>
				</StyledBank>
			</>
		);
	};

const Total = createGlobalStyle`
body {
	margin: 0;
}
`

const StyledBank = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-bottom: 10rem;
`

const CurrentMny = styled.div`
	font-size: 20px;
	text-align: left;
	padding-left: 2rem;
`

const TransanctionBlock = styled.div`
	width: 100%;
`

export default Bank;
