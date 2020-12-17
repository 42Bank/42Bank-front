import React from 'react';
import styled from 'styled-components';
import NavBar from '../components/NavBar'
import RoundedText from '../components/RoundedText'
import Logo from '../imgs/Logo.png'
import ProfileImg from '../imgs/ProfileImg.png'
import qs from 'qs';
import { useState, useEffect } from 'react';
import axios from 'axios';
axios.defaults.xsrfCookiename = "csrftoken";
axios.defaults.xsrfHeadername = "X-CSRFToken";

const Parsing = () => {
	const [info, setInfo] = useState();
	useEffect(() => {
		const apiCall = async() => {
			const data = await axios.get('http://localhost:8000/api/User/');
			console.log(data);
			const temp = data;
			setInfo(temp);
		};
		apiCall();
	}, []);
	if (!info) return null;
	return info;
};

const Posting = (codevalue) => {
	const [user, setUser] = useState();
	useEffect(() => {
		const postCall = async() =>	{axios.post('http://localhost:8000/crawler/', {code: codevalue.code})
		.then(function (response){
			// console.log(response.data)
			setUser(response.data);
			(response.data.result === 'success')? console.log('success!!!'): console.log('fail')})
		.catch(function (error){
			console.log(error);
		});}
		postCall();
	}, [codevalue.code]);
	if (!user) return null;
	return user;
}

const Home = () => {
	const codeurl = window.location.search;
	const codevalue = qs.parse(codeurl,{
		ignoreQueryPrefix: true
	});
	console.log(codevalue.code);
	if (codevalue)
	{
		const intra_id = Posting(codevalue);
		console.log(intra_id);
	}
	Parsing();
		return (
		<>
		<AboveBar>
			<StyledLogoLeft>
				<img src={Logo} alt="logo"/>
			</StyledLogoLeft>
			<StyledLogoRight>
				<img src={ProfileImg} alt="profile"/>
			</StyledLogoRight>
		</AboveBar>
		<Group>
				<WalletTxt>intraID's wallet</WalletTxt>
				<RoundedText home="1">
					<CurrentMny>현재잔고</CurrentMny>
					<br/>13 ₳
				</RoundedText>
				<NavBar/>
		</Group>
		</>
		);
	};

const AboveBar = styled.div`
	display: flex;
	justify-content: space-between;
`
const StyledLogoLeft = styled.div`
	margin-left: 3%;
`
const StyledLogoRight = styled.div`
	margin-top: 2%;
	margin-right: 3%;
`
const Group = styled.div`
	padding-top: 2rem;
	display: flex;
	flex-direction: column;
	align-items: center;
`
const WalletTxt = styled.div`
	font-family: Roboto;
	font-size: 36px;
	font-weight: bold;
	margin-bottom: 2rem;
`

const CurrentMny = styled.div`
	font-size: 20px;
	text-align: left;
`
export default Home;
