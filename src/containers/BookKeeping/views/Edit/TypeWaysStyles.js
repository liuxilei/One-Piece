import styled from "styled-components";

export const TypeWays = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
	margin-top: 25px;
`;

export const TypeWaysItem = styled.div`
	width: 50px;
	margin-right: 37px;
	margin-bottom: 15px;
	cursor: pointer;
	.icon {
		width: 55px;
		height: 55px;
		line-height: 55px;
		border-radius: 50%;
		text-align: center;
		border: 2px solid #788895;
		color: #788895;
		i {
			font-size: 25px;
		}
		&.select {
			color: #fff;
			background: #c7c2f8;
			border: none;
		}
	}
	.name {
		width: 55px;
		text-align: center;
		margin-top: 10px;
		font-size: 15px;
	}
`;
