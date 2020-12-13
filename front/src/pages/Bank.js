import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import TopBar from '../components/TopBar';
import NavBar from '../components/NavBar';
import Transanction from '../components/Transanction'
import RoundedText from '../components/RoundedText';

const Bank = () => (
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

const Total = createGlobalStyle`
body {
	margin: 0;
}
`

const StyledBank = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
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
