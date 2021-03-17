import styled from "styled-components";

export const PictureWrapper = styled.div`
	width: 100%;
	height: 340px;
	display: flex;
	justify-content: space-around;
	.pic-income,
	.pic-expenditure {
		width: 240px;
		height: 300px;
		.title {
			padding-top: 26px;
			font-size: 22px;
			text-align: center;
			font-weight: bold;
		}
	}
`;

export const Ball = styled.div`
	width: 230px;
	height: 220px;
`;
