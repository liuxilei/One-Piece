import styled from "styled-components";

export const FormLayout = styled.div`
	margin-top: 40px;
	display: flex;
	.attribute {
		flex: 1;
	}
	.input {
		flex: 7;
		input {
			position: relative;
			top: -2px;
			width: 475px;
			border: 1px solid #788895;
			height: 30px;
			line-height: 30px;
			border-radius: 4px;
			text-indent: 14px;
			&::placeholder {
				color: #788895;
			}
			&.normal {
				text-indent: 10px;
			}
		}
		.date {
			padding: 0;
			border: none;
		}
		.ant-picker:hover,
		.ant-picker-focused {
			border: none !important;
		}
		.ant-picker-suffix {
			margin-left: -21px;
		}
	}
`;
