import React from "react";
import styled, { createGlobalStyle } from 'styled-components';
import TopBar from '../components/TopBar';
import NavBar from '../components/NavBar';

const Shop = () => (
	<>
		<Total/>
		<TopBar>42 월렛 상점</TopBar>
		<StyledShop>
			<StyledProducts>1</StyledProducts>
			<StyledProducts>2</StyledProducts>
			<StyledProducts>3</StyledProducts>
			<StyledProducts>4</StyledProducts>
			<StyledProducts>5</StyledProducts>
			<StyledProducts>6</StyledProducts>
			<StyledProducts>7</StyledProducts>
			<StyledProducts>8</StyledProducts>
			<StyledProducts>9</StyledProducts>
			<NavBar/>
		</StyledShop>
	</>
);

const Total = createGlobalStyle`
body {
	background-color: #58B7BA;
	margin: 0;
}
`

const StyledShop = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	flex-basis: 50%;
	background: #58B7BA;
	padding-top: 2rem;
	padding-bottom: 10rem;
	justify-content: space-between;
`

const StyledProducts = styled.div`
	width: 40%;
	height: 15rem;
	background: #fff;
	border-radius: 20px;
	margin: 1rem 3rem;
`

export default Shop
