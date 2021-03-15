import styled from "styled-components";

export const ContentWrapper = styled.div`
	width: 640px;
	margin: 0 auto;
`;

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

export const CreateNewRecord = styled.div`
	margin-top: 15px;
	height: 35px;
	line-height: 35px;
	text-align: center;
	font-size: 16px;
	color: #fff;
	background: #6752f1;
	border-radius: 4px;
	cursor: pointer;
`;

export const BookKeepingRecord = styled.div`
	color: #788895;
	font-size: 15px;
	max-height: 400px;
	overflow-y: auto;
	/* 设置滚动条的样式 */
	::-webkit-scrollbar {
		width: 5px;
	}
	/* 滚动槽 */
	::-webkit-scrollbar-track {
		-webkit-box-shadow: inset006pxrgba(0, 0, 0, 0.3);
		border-radius: 10px;
	}
	/* 滚动条滑块 */
	::-webkit-scrollbar-thumb {
		border-radius: 10px;
		background: rgba(0, 0, 0, 0.1);
		-webkit-box-shadow: inset006pxrgba(0, 0, 0, 0.5);
	}
`;

export const BookKeepingRecordItem = styled.div`
	margin-top: 12px;
	border: 2px solid #788895;
	display: flex;
	height: 40px;
	line-height: 40px;
	.item-icon {
		width: 60px;
		text-align: center;
		i {
			font-size: 22px;
		}
	}
	.item-text {
		width: 240px;
		text-align: left;
	}
	.item-money {
		width: 88px;
		text-align: left;
	}
	.item-time {
		width: 150px;
		text-align: left;
	}
	.item-operate {
		i {
			font-size: 22px;
			margin-right: 15px;
			cursor: pointer;
		}
	}
`;

export const PictureWrapper = styled.div`
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
