import styled from "styled-components";

export const BookKeepingRecord = styled.div`
	width: 100%;
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
