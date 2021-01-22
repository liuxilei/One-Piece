import {
	EXPRESS2_SETSELECTED,
	EXPRESS2_SETELEMENTS,
	EXPRESS2_REPLACEINDEX,
} from "./actionTypes";

export const setSelected = (selected) => ({
	type: EXPRESS2_SETSELECTED,
	selected,
});

export const setElements = (elements) => ({
	type: EXPRESS2_SETELEMENTS,
	elements,
});

export const replaceIndex = (newElement) => ({
	type: EXPRESS2_REPLACEINDEX,
	newElement,
});
