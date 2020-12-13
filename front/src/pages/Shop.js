import React from "react";
import styled, { createGlobalStyle } from 'styled-components';
import TopBar from '../components/TopBar';
import NavBar from '../components/NavBar';

const Shop = () => (
	<>
		<Total/>
		<StyledShop>
			<TopBar>42 월렛 상점</TopBar>
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
	flex-direction: column;
	align-items: center;
	background: #58B7BA;
`
export default Shop
