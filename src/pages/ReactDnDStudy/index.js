// import React, { Component } from "react";
// import { DragSource } from "react-dnd";

// const spec = {
// 	beginDrag(props, monitor, component) {
// 		//这里return出去的对象属性自行选择，这里只是用id作为演示
// 		return { id: props.id }
// 	},
// 	endDrag(props, monitor, component) {

// 	},
// 	canDrag(props, monitor) {

// 	},
// 	isDragging(props, monitor) {

// 	}
// };

// const collect = (connect, monitor) => ({
// 	//这里返回一个对象，会将对象的属性都赋值到组件的props中去。这些属性需要自己定义
// 	connectDragTarget: connect.dropTarget(),
// 	id: monitor.getItem().id
// });

// @DragSource(type, spec, collect)
// class MyComponent extends Component {
// 	render() {
// 		return (
// 			<div>12121</div>
// 		)
// 	}
// }

// export default MyComponent;

export default () => 1;
