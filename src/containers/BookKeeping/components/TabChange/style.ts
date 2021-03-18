import styled from "styled-components";

export const Tabs = styled.div`
	border-bottom: 2px solid #dddafa;
	display: flex;
	justify-content: space-between;
	div {
		width: 310px;
		height: 35px;
		line-height: 35px;
		border-radius: 4px;
		border: 2px solid #dddafa;
		text-align: center;
		border-bottom: none;
		position: relative;
		top: 2px;
		cursor: pointer;
		font-size: 16px;
		&.select {
			background: #6752f1;
			border: 2px solid #6752f1;
			text-align: center;
			color: #fff;
		}
	}
`;
