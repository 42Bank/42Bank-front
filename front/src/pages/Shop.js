import React from "react";
import styled from 'styled-components';
import TopBar from '../components/TopBar';
import NavBar from '../components/NavBar';

const Shop = () => (
	<>
		<StyledShop>
			<TopBar>42 월렛 상점</TopBar>
			<NavBar/>
		</StyledShop>
	</>
);

const StyledShop = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`
export default Shop
