import React, { useState, useEffect } from "react";
import 'handsontable/dist/handsontable.full.css';
import { HotTable } from '@handsontable/react';

let data = [
    ['', 'Tesla', 'Mercedes', 'Toyota', 'Volvo'],
    ['2019', 10, 11, 12, 13],
    ['2020', 20, 11, 14, 13],
    ['2021', 30, 15, 12, 13]
];

export default () => {
    return (<HotTable data={data} colHeaders={true} rowHeaders={true} width="600" height="300" licenseKey="non-commercial-and-evaluation" />);
}