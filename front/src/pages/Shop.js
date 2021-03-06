import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import TopBar from '../components/TopBar';
import NavBar from '../components/NavBar';

const Parsing = () => {
	const [info, setInfo] = useState();
	useEffect(() => {
		const apiCall = async() => {
			const data = await axios.get('http://localhost:8000/api/Shop/');
			const temp = data;
			setInfo(temp);
		};
		apiCall();
	}, []);
	if (!info) return null;
	return info;
};

const Shop = () => {
	const product = Parsing();
	// const pList = product.map((p, i) => (

	// ));
	return (
		<>
			<Total/>
			<TopBar>42 월렛 상점</TopBar>
			<StyledShop>
			{/* {product && product.data.map((v) => (
				<ShopList>
					<ShopPhoto url={v.photo}></ShopPhoto>
					<StyledTxt>{v.name}<br/>{v.price} ₳</StyledTxt>
				</ShopList>
			))}; */}
				<ShopList>
					<ShopPhoto url={product && product.data[1].photo}></ShopPhoto>
					<StyledTxt>{product && product.data[1].name}<br/>{product &&product.data[1].price} ₳</StyledTxt>
				</ShopList>
				<ShopList>
					<ShopPhoto url={product && product.data[6].photo}></ShopPhoto>
					<StyledTxt>{product && product.data[6].name}<br/>{product &&product.data[6].price} ₳</StyledTxt>
				</ShopList>
				<ShopList>
					<ShopPhoto url={product && product.data[7].photo}></ShopPhoto>
					<StyledTxt>{product && product.data[7].name}<br/>{product &&product.data[7].price} ₳</StyledTxt>
				</ShopList>
				<ShopList>
					<ShopPhoto url={product && product.data[5].photo}></ShopPhoto>
					<StyledTxt>{product && product.data[5].name}<br/>{product &&product.data[5].price} ₳</StyledTxt>
				</ShopList>
				<ShopList>
					<ShopPhoto url={product && product.data[4].photo}></ShopPhoto>
					<StyledTxt>{product && product.data[4].name}<br/>{product &&product.data[4].price} ₳</StyledTxt>
				</ShopList>
				<ShopList>
					<ShopPhoto url={product && product.data[0].photo}></ShopPhoto>
					<StyledTxt>{product && product.data[0].name}<br/>{product &&product.data[0].price} ₳</StyledTxt>
				</ShopList>
				<ShopList>
					<ShopPhoto url={product && product.data[3].photo}></ShopPhoto>
					<StyledTxt>{product && product.data[3].name}<br/>{product &&product.data[3].price} ₳</StyledTxt>
				</ShopList>
				<ShopList>
					<ShopPhoto url={product && product.data[2].photo}></ShopPhoto>
					<StyledTxt>{product && product.data[2].name}<br/>{product &&product.data[2].price} ₳</StyledTxt>
				</ShopList>
			</StyledShop>
			<NavBar/>
		</>
	);
};

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

const ShopPhoto = ({url}) => (
	<StyledImg photo={url}></StyledImg>
);

const StyledImg = styled.div`
	width: 100%;
	height: 60%;
	border-radius: 20px 20px 0 0;
	background-position: center;
	background-size: cover;
	background-image: ${({photo}) => `url(${photo})`};
`

const StyledTxt = styled.div`
	text-align: center;
	font-size: 15px;
	line-height: 30px;
	padding: 1rem;
	box-sizing: border-box;
`

export default Shop
