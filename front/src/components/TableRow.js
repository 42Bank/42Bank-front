import React, { useState } from 'react';
import styled from 'styled-components';

// 이래서 열글자 제한/...으로 생략 이런걸 걸어놓는구나 css 다 망가지니까
const TableRow = ({ key, data}) => {
    const [RowData] = useState(data);

    return (
        <div key={key}>
						{RowData.map(i =>
							<StyledData>
								<StyledDate>{i.date}</StyledDate>
								<StyledContent>{i.contents}</StyledContent>
								<StyledPrize prize={i.prize}>{i.prize} ₳</StyledPrize>
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
	padding: 0 15rem;
`

const StyledPrize = styled.div`
	color: ${({ prize }) =>
		prize > 0 ? `blue` : `black`};
`

export default TableRow;
