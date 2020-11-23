import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button'
// import Logo from '../imgs/Logo.png'
// import ProfileImg from '../imgs/ProfileImg.png'
import IconHome from '../imgs/Home.svg'
import IconMoney from '../imgs/Money.svg'
import IconShop from '../imgs/Shop.svg'
import IconCalendar from '../imgs/Calendar.svg'

const Home = () => (
	<>
		<div>logo</div>
		<div>profile image</div>
		<div>intraID's wallet</div>
		<div>13 ₳</div>
		<Button><img src={IconHome} alt="home"/></Button>
		<Link to="/bank">
			<Button><img src={IconMoney} alt="money"/></Button>
		</Link>
		<Link to="/shop">
			<Button><img src={IconShop} alt="shop"/></Button>
		</Link>
		<Link to="/events">
			<Button><img src={IconCalendar} alt="events"/></Button>
		</Link>
	</>
);

export default Home;
