import React from "react";
import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import TopBar from '../components/TopBar';
import NavBar from '../components/NavBar';
import Sticker from '../imgs/products/sticker.jpeg';

const Shop = () => (
	<>
		<Total/>
		<TopBar>42 월렛 상점</TopBar>
		<StyledShop>
			<ShopList>
				<StyledImg></StyledImg>
				<StyledTxt>42 Sticker<br/>2 ₳</StyledTxt>
			</ShopList>
			<StyledProducts></StyledProducts>
			<StyledProducts>3</StyledProducts>
			<StyledProducts>4</StyledProducts>
			<StyledProducts>5</StyledProducts>
			<StyledProducts>6</StyledProducts>
			<StyledProducts>7</StyledProducts>
			<StyledProducts>8</StyledProducts>
			<StyledProducts>9</StyledProducts>
		</StyledShop>
		<NavBar/>
	</>
);

const Total = createGlobalStyle`
body {
	background-color: #58B7BA;
	margin: 0;
	box-sizing: border-box;
}
`

const StyledShop = styled.ul`
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	justify-content: space-between;
	width: 100%;
	margin: 0;
	padding: 2rem 3rem 10rem 3rem;
	box-sizing: border-box;
`

const ShopList = ( {children} ) => (
	<StyledProducts>{children}</StyledProducts>
);

ShopList.propTypes = {
  children: PropTypes.node.isRequired,
};

const StyledProducts = styled.li`
	width: 45%;
	height: 15rem;
	background: #fff;
	border-radius: 20px;
	margin: 2rem 0rem;
	list-style: none;
	&: hover {
		cursor: pointer;
		background: #EFEDED;
	}
`

const StyledImg = styled.div`
	width: 100%;
	height: 60%;
	border-radius: 20px 20px 0 0;
	background-position: center;
	background-size: cover;
	background-image: url(${Sticker});
`

const StyledTxt = styled.div`
	text-align: center;
	font-size: 20px;
	line-height: 30px;
	padding: 1rem;
`

export default Shop
