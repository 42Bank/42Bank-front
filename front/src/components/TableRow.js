import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Parsing = () => {
	const [info, setInfo] = useState();
	useEffect(() => {
		const apiCall = async() => {
			const data = await axios.get('http://localhost:8000/api/Order/');
			const temp = data;
			setInfo(temp);
		};
		apiCall();
	}, []);
	if (!info) return null;
	return info;
};

const get_info = (transac) => {
	const tempInfo = transac.data.filter(data =>
	data.intra_id === window.sessionStorage.getItem('intra_id'));
	return tempInfo;
};

// 이래서 열글자 제한/...으로 생략 이런걸 걸어놓는구나 css 다 망가지니까
const TableRow = ({ key, data}) => {
		// const [RowData] = useState(data);

		const transac = Parsing();
		const tInfo = transac ? get_info(transac): null;
		console.log(tInfo);
    return (
        <div>
						{tInfo && tInfo.map(i =>
							<StyledData>
								<StyledDate>{i.date}</StyledDate>
								<StyledContent>{i.content}</StyledContent>
								<StyledPrize prize={i.get_wallet}>{i.get_wallet === 0? '-' + i.spend_wallet : i.get_wallet} ₳</StyledPrize>
							</StyledData>)}
        </div>
    )
};

const StyledData = styled.li`
	list-style: none;
	display: flex;
	justify-content: space-between;
	// border-top: solid 1px #E5E5E5;
	border-bottom: solid 1px #E5E5E5;
	padding: 0.5rem 4rem;
`

const StyledDate = styled.div`
	color: black;
`

const StyledContent = styled.div`
	color: black;
`

const StyledPrize = styled.div`
	color: ${({ prize }) =>
		prize > 0 ? `blue` : `black`};
`

export default TableRow;
