import React from "react";
import { HotTable } from "@handsontable/react";
import Handsontable from "handsontable";
import "handsontable/dist/handsontable.full.css";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.hotSettings = {
			data: Handsontable.helper.createSpreadsheetData(5, 5),
			colHeaders: true,
			contextMenu: {
				items: {
					row_above: {
						name: "Insert row above this one (custom name)",
					},
					row_below: {},
					separator: Handsontable.plugins.ContextMenu.SEPARATOR,
					clear_custom: {
						name: "Clear all cells (custom)",
						callback: function () {
							this.clear();
						},
					},
				},
			},
		};
	}

	render() {
		return (
			<div>
				<HotTable
					id="hot"
					settings={this.hotSettings}
					licenseKey="non-commercial-and-evaluation"
				/>
			</div>
		);
	}
}

export default App;
