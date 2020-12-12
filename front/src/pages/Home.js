import React from 'react';
import styled from 'styled-components';
import NavBar from '../components/NavBar'
import Logo from '../imgs/Logo.png'
import ProfileImg from '../imgs/ProfileImg.png'


const Home = () => (
	<>
		<AboveBar>
			<StyledLogoLeft>
				<img src={Logo} alt="logo"/>
			</StyledLogoLeft>
			<StyledLogoRight>
				<img src={ProfileImg} alt="profile"/>
			</StyledLogoRight>
		</AboveBar>
		<NavBar/>
	</>
);

const AboveBar = styled.div`
	display: flex;
	justify-content: space-between;
	// margin-left: 3%;
	// margin-right: 3%;
`
const StyledLogoLeft = styled.div`
	margin-left: 3%;
`
const StyledLogoRight = styled.div`
	margin-top: 2%;
	margin-right: 3%;
`

export default Home;
