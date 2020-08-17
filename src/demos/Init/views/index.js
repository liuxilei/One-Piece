import React, { Component, Fragment } from "react";
import { Modal, Button, Steps, Form, Input, Select, Row, Col } from "antd";
import "./index.less";
const Step = Steps.Step;
const Option = Select.Option;

const formItemLayout = {
	labelCol: {
		xs: { span: 24 },
		sm: { span: 8 },
	},
	wrapperCol: {
		xs: { span: 24 },
		sm: { span: 16 },
	},
};
const tailFormItemLayout = {
	wrapperCol: {
		xs: {
			span: 24,
			offset: 0,
		},
		sm: {
			span: 16,
			offset: 8,
		},
	},
};

class Init extends Component {
	constructor(props) {
		super(props);
		this.state = {
			current: 0,
		};
	}

	step = () => {
		const { current } = this.state;
		const { getFieldDecorator } = this.props.form;
		return (
			<Form {...formItemLayout} onSubmit={this.handleSubmit}>
				{current === 0 && (
					<Fragment>
						<Form.Item label="数据库类型">
							{getFieldDecorator("xxx", {
								rules: [
									{
										required: true,
										message: "请选择数据库类型!",
									},
								],
							})(
								<Select
									style={{
										width: "100%",
										fontSize: "12px",
									}}
									dropdownClassName="init-select"
									placeholder="请选择数据库类型"
								>
									<Option value="jack">数据库一</Option>
									<Option value="lucy">数据库二</Option>
									<Option value="Yiminghe">数据库三</Option>
								</Select>,
							)}
						</Form.Item>
						<Form.Item label="主机">
							{getFieldDecorator("a", {
								rules: [
									{
										required: true,
										message: "请输入!",
									},
								],
							})(
								<Input
									placeholder="请输入"
									style={{
										fontSize: "12px",
									}}
								/>,
							)}
						</Form.Item>
						<Form.Item label="端口">
							{getFieldDecorator("email", {
								rules: [
									{
										required: true,
										message: "请输入!",
									},
								],
							})(
								<Input
									style={{
										fontSize: "12px",
									}}
									placeholder="请输入"
								/>,
							)}
						</Form.Item>
						<Form.Item label="数据库名称">
							{getFieldDecorator("email", {
								rules: [
									{
										required: true,
										message: "请输入!",
									},
								],
							})(
								<Input
									style={{
										fontSize: "12px",
									}}
									placeholder="请输入"
								/>,
							)}
						</Form.Item>
						<Form.Item label="用户名">
							{getFieldDecorator("email", {
								rules: [
									{
										required: true,
										message: "请输入",
									},
								],
							})(
								<Input
									style={{
										fontSize: "12px",
									}}
									placeholder="请输入"
								/>,
							)}
						</Form.Item>
						<Form.Item label="密码">
							{getFieldDecorator("email", {
								rules: [
									{
										required: true,
										message: "请输入",
									},
								],
							})(
								<Input
									style={{
										fontSize: "12px",
									}}
									placeholder="请输入"
								/>,
							)}
						</Form.Item>
						<Row className="init-row">
							<Col
								push={8}
								span={16}
								type="flex"
								justify="space-between"
							>
								<Col span={12} className="init-text">
									<span className="iconfont icon-lianjie init-connect"></span>{" "}
									测试连接
								</Col>
								<Col
									span={12}
									className="init-text"
									align="right"
								>
									<span className="iconfont icon-chuangjian init-create"></span>{" "}
									创建并初始化数据库
								</Col>
							</Col>
						</Row>
					</Fragment>
				)}
				{current === 1 && (
					<Fragment>
						<Form.Item label="组织名称">
							{getFieldDecorator("eeee", {
								rules: [
									{
										required: true,
										message: "请输入",
									},
								],
							})(
								<Input
									style={{
										fontSize: "12px",
									}}
									placeholder="请输入"
								/>,
							)}
						</Form.Item>
					</Fragment>
				)}
				{current === 2 && (
					<Fragment>
						<Form.Item label="管理员账户">
							{getFieldDecorator("email", {
								rules: [
									{
										required: true,
										message: "请输入",
									},
								],
							})(
								<Input
									style={{
										fontSize: "12px",
									}}
									placeholder="请输入"
								/>,
							)}
						</Form.Item>
						<Form.Item label="用户名">
							{getFieldDecorator("email", {
								rules: [
									{
										required: true,
										message: "请输入",
									},
								],
							})(
								<Input
									style={{
										fontSize: "12px",
									}}
									placeholder="请输入"
								/>,
							)}
						</Form.Item>
						<Form.Item label="密码">
							{getFieldDecorator("email", {
								rules: [
									{
										required: true,
										message: "请输入",
									},
								],
							})(
								<Input
									style={{
										fontSize: "12px",
									}}
									placeholder="请输入"
								/>,
							)}
						</Form.Item>
						<Form.Item label="确认密码">
							{getFieldDecorator("email", {
								rules: [
									{
										required: true,
										message: "请输入",
									},
								],
							})(
								<Input
									style={{
										fontSize: "12px",
									}}
									placeholder="请输入"
								/>,
							)}
						</Form.Item>
					</Fragment>
				)}
			</Form>
		);
	};

	next = () => {
		this.setState((state) => ({
			current: state.current < 2 ? state.current + 1 : 0,
		}));
	};

	handleSubmit = (e) => {
		const {
			form: { validateFields },
		} = this.props;
		e.preventDefault();
		validateFields(["xxx", "a"], (err, values) => {
			if (err) {
				return;
			} else {
				this.next();
			}
		});
	};

	render() {
		const { current } = this.state;
		return (
			<div className="init">
				<div className="init-header">
					<div className="init-title">
						在进入大数据管理平台前，将引导您进行以下初始化设置
					</div>
				</div>
				<Modal
					visible={true}
					closable={false}
					mask={false}
					keyboard={false}
					maskClosable={false}
					style={{
						marginTop: 40,
						minWidth: 800,
					}}
					bodyStyle={{
						paddingTop: 54,
						paddingLeft: 73,
						paddingRight: 73,
						minWidth: 800,
					}}
					width={800}
					wrapClassName="init-modal"
					footer={
						<Button type="primary" onClick={this.handleSubmit}>
							{current !== 2 ? "下一步" : "完成"}
						</Button>
					}
				>
					<Steps current={current}>
						<Step title="数据库设置" />
						<Step title="组织设置" />
						<Step title="账号设置" />
					</Steps>
					{this.step()}
				</Modal>
			</div>
		);
	}
}
export default Form.create({})(Init);
