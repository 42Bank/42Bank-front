import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import RoundedText from '../components/RoundedText'
import IconHome from '../imgs/Home.svg'
import IconMoney from '../imgs/Money.svg'
import IconShop from '../imgs/Shop.svg'
import IconCalendar from '../imgs/Calendar.svg'


const NavBar = () => {
	return (
		<Group>
				<WalletTxt>intraID's wallet</WalletTxt>
				<RoundedText><CurrentMny>현재잔고</CurrentMny><br/>13 ₳</RoundedText>
				<Move>
					<Button><img src={IconHome} alt="home"/>홈</Button>
					<Link to="/bank">
						<Button><img src={IconMoney} alt="money"/>입출금 내역</Button>
					</Link>
					<Link to="/shop">
						<Button><img src={IconShop} alt="shop"/>쇼핑하기</Button>
					</Link>
					<Link to="/events">
						<Button><img src={IconCalendar} alt="events"/>월렛 얻기</Button>
					</Link>
				</Move>
		</Group>
	);
}

const Group = styled.div`
	padding-top: 4rem;
	display: flex;
	flex-direction: column;
	align-items: center;
`

const WalletTxt = styled.div`
	font-family: Roboto;
	font-size: 36px;
	font-weight: bold;
	line-height: 42px;
	margin-bottom: 2rem;
`

const CurrentMny = styled.div`
	font-size: 20px;
	text-align: left;
`

const Move = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	position: fixed;
	border-top: 1px solid #E5E5E5;
	bottom: 0;
	background: #FFFFFF;
`

const Button = ({ children }) => (
	<StyledButton>{children}</StyledButton>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

const StyledButton = styled.button`
	margin: 4rem;
  border-radius: 1em;
	border: none;
	background: none;
	&: hover {
		cursor: pointer;
		background: gray;
	}
`;

export default NavBar;
