import styled from "styled-components";

export const HeaderWrapper = styled.header`
	width: 100%;
	height: 127px;
	background: #c7c2f8;
	color: #313f4e;
	border: 2px solid #675ef8;
	margin-bottom: 15px;
	h1 {
		text-align: center;
		font-size: 23px;
		margin-top: 20px;
	}
`;

export const HeaderInfo = styled.section`
	display: inline-block;
	.date {
		margin-left: 17px;
		margin-right: 130px;
	}
	span + span {
		margin-left: 50px;
	}
`;
