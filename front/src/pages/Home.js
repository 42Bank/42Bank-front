import React from 'react';
import styled from 'styled-components';
import NavBar from '../components/NavBar'
import RoundedText from '../components/RoundedText'
import Logo from '../imgs/Logo.png'
import ProfileImg from '../imgs/ProfileImg.png'
import qs from 'qs';
import { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

axios.defaults.xsrfCookiename = "csrftoken";
axios.defaults.xsrfHeadername = "X-CSRFToken";


const Parsing = () => {
	const [info, setInfo] = useState();
	useEffect(() => {
		const apiCall = async() => {
			const data = await axios.get('http://localhost:8000/api/User/');
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
			(response.data.result === 'success')? console.log('success!!!'): console.log('fail :(')})
		.catch(function (error){
			console.log(error);
		});}
		postCall();
	}, [codevalue.code]);
	if (!user) return null;
	return user;
}

const GetWallet = (retPost, retObject) => {
	const tempInfo = retObject.data.filter(data =>
		data.intra_id === retPost);
	const wallet = tempInfo[0].cur_wallet;
	window.sessionStorage.setItem('intra_id', tempInfo[0].intra_id);
	window.sessionStorage.setItem('wallet', wallet);
	window.sessionStorage.setItem('img', tempInfo[0].photo);
	if (!wallet) return null;
	return wallet;
}

const Home = () => {
	const codeurl = window.location.search;
	const codevalue = qs.parse(codeurl,{
		ignoreQueryPrefix: true
	});
	console.log(codevalue.code);
	const retPost = Posting(codevalue);
	const retObject = Parsing();
	const wallet = retPost && retObject ? GetWallet(retPost, retObject) : null;
	// retPost && retObject ? GetWallet(retPost, retObject) : null;

	console.log("wallet : " + wallet);

	return (
	<>
	<AboveBar>
		<StyledLogoLeft>
			<img src={Logo} alt="logo"/>
		</StyledLogoLeft>
		{/* <Profile>
			<UserPhoto url={window.sessionStorage.getItem('img')}></UserPhoto> */}
			{/* <img src={window.sessionStorage.getItem('img')} alt="profile"/> */}
		{/* </Profile> */}
	</AboveBar>
	<Group>
		<WalletTxt>{window.sessionStorage.getItem('intra_id')} 's wallet</WalletTxt>
			<RoundedText home="1">
				<CurrentMny>현재잔고</CurrentMny>
				<br/>{window.sessionStorage.getItem('wallet')} ₳
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

const Profile = ({ children }) => (
	<StyledImg>{children}</StyledImg>
);

Profile.propTypes = {
  children: PropTypes.node.isRequired,
};

const StyledImg = styled.button`
	padding: 2.5rem;
  border-radius: 1em;
	border: none;
	background: none;
`

const UserPhoto = ({url}) => (
	<StyledUser photo={url}></StyledUser>
);

const StyledUser = styled.div`
	width: 100%;
	height: 60%;
	border-radius: 20px 20px 0 0;
	background-position: center;
	background-size: cover;
	background-image: ${({photo}) => `url(${photo})`};
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
