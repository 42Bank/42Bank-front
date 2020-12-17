import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import PropTypes from 'prop-types';
import Bg from '../imgs/42bg.png'
import Logo from '../imgs/Logo.png'
import { Link } from 'react-router-dom';

const Login = () => (
	<>
		<Background/>
		<StyledLogin>
			<LoginBox/>
			<Wrapper>
				<StyledLogo><img src={Logo} alt=""/></StyledLogo>
				<StyledButton>
					<Link to="/auth" style={{textDecoration: 'none'}}>
						<SubmitBtn>SIGN IN</SubmitBtn>
					</Link>
				</StyledButton>
			</Wrapper>
		</StyledLogin>
	</>
);

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
const LoginBox = styled.div`
	padding-top: 13em;
`
const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 50%;
	background-color: #EFEDED;
	border-radius: 10px;
	border-color: transparent;
`
const StyledLogo = styled.div`
	display: flex;
`
const SubmitBtn = ({ children }) => (
	<StyledSubmit>{children}</StyledSubmit>
);

SubmitBtn.propTypes = {
  children: PropTypes.node.isRequired,
};

const StyledSubmit = styled.div`
	color: #fff;
`

const StyledButton = styled.button`
	width: 100%;
	height: 58px;
	background-color: #58B7BA;
	&: hover {
		cursor: pointer;
		background: gray;
	}
	box-sizing: border-box;
	border-radius: 0 0 10px 10px;
	font-size: 20px;
	border-color: transparent;
`;

export default Login;
