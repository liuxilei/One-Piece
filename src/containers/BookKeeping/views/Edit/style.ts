import styled from "styled-components";

export const ButtonWrapper = styled.div`
	margin-top: 40px;
`;

export const OperateButton = styled.div`
	width: 60px;
	height: 30px;
	line-height: 30px;
	text-align: center;
	color: #6752f1;
	border-radius: 4px;
	background: #fff;
	margin-right: 25px;
	display: inline-block;
	border: 1px solid #6752f1;
	cursor: pointer;
	&.primary {
		background: #6752f1;
		color: #fff;
	}
`;
