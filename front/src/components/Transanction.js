import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import TableRow from './TableRow';
import {getManageApplication} from './Api';

const Transanction = (props) => {
	const headerMeta = [
			"날짜",
			"내역",
			"금액",
	];

	const [tableData] = useState([getManageApplication(1)]);

	return (
			<>
			{/* <div>0910 rush eval 8A</div> */}
			<StyledTable>
					{tableData.length !== 0 && (
					<Styledul>
							{/* <thead>
							<tr>
								 {headerMeta.map(i=><th>{i}</th>)}
							</tr>
							</thead> */}
							<div>
							{tableData.map((d, i) => {
									return (<TableRow key={i} data={d}/>);
							}
							)}
							</div>
					</Styledul>
					)}
			</StyledTable>
			</>
	);
}

const Styledul = styled.ul`
	width: 100%;
	margin: 0;
	padding: 0;
`

const StyledTable = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 2rem 0;
	font-size: 150%;
`

export default Transanction;
