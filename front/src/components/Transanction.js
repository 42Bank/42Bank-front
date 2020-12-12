import React, {useState} from 'react';
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
					<table>
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

					</table>
					)}
			</StyledTable>
			</>
	);
}

const StyledTable = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 2rem;
	font-size: 150%;
`

export default Transanction;
