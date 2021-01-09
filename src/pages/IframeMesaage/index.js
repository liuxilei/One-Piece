import React, { useEffect, useRef } from "react";

export default () => {
	const ref = useRef(null);
	useEffect(() => {
		ref.current.contentWindow.postMessage("TranSave", "*");
	}, []);

	return (
		<div>
			<iframe ref={ref} src="http://127.0.0.1:5500/demo1.html" />
		</div>
	);
};
