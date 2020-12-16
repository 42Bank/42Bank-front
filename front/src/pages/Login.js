import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import PropTypes from 'prop-types';
import Bg from '../imgs/42bg.png'
import Logo from '../imgs/Logo.png'

const Login = () => (
	<>
		<Background/>
		<StyledLogin>
			<LoginBox/>
			<StyledLogo><img src={Logo} alt=""/></StyledLogo>
			<LoginField/>
			<SubmitBtn>Submit</SubmitBtn>
		</StyledLogin>
	</>
);

const LoginBox = styled.div`
	padding-top: 6rem;
`
const LoginField = () => (
	<>
		<StyledField placeholder="ID" />
		<StyledField placeholder="Password" />
	</>
);

const StyledField = styled.input`
	width: 40%;
	height: 58px;
	background: #EFEDED;
	border: 2px solid #58B7BA;
	box-sizing: border-box;
	border-radius: 10px;
	font-size: 18px;
	margin-bottom: 5px;
`

const SubmitBtn = ({ children }) => (
	<StyledButton>{children}</StyledButton>
);

SubmitBtn.propTypes = {
  children: PropTypes.node.isRequired,
};

const StyledButton = styled.button`
	width: 40%;
	height: 58px;
	background-color: #58B7BA;
	&: hover {
		cursor: pointer;
		background: gray;
	}
	box-sizing: border-box;
	border-radius: 10px;
	font-size: 20px;
`;

const Background = createGlobalStyle`
	body{
		background-image: url(${Bg});
	}
`

const StyledLogin = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

const StyledLogo = styled.div`
	display: flex;
`

export default Login;
