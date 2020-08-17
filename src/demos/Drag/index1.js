import React, { useEffect, useState, Fragment } from "react";

export default () => {
	const [dragStart, setDragStart] = useState(null);
	const [dragEnd, setDragEnd] = useState(null);

	useEffect(() => {
		console.log(dragStart, dragEnd);
	});

	return (
		<Fragment>
			<div
				style={{ width: "50px", height: "50px", background: "#000" }}
				draggable
				onDragStart={(e) => setDragStart(e.target)}
				onDragEnter={(e) => setDragEnd(e.target)}
			></div>
			<div
				draggable
				onDragStart={(e) => setDragStart(e.target)}
				onDragEnter={(e) => setDragEnd(e.target)}
				style={{
					width: "50px",
					height: "50px",
					background: "red",
					marginLeft: "200px",
					marginTop: "50px",
				}}
			></div>
		</Fragment>
	);
};
