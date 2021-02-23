import styled from "styled-components";

export const Content = styled.div`
	width: 400px;
	margin: 0 auto;
	user-select: none;
`;

export const OperateContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
`;

export const Score = styled.div`
	text-align: center;
	font-size: 40px;
	color: red;
`;

export const Special = styled.div`
	width: 140%;
	display: flex;
	justify-content: space-between;
`;

export const Operate = styled.div<{ fontSize: number }>`
	font-size: ${props => props.fontSize}px;
	cursor: pointer;
`;

