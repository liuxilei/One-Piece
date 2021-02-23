import {
	EXPRESS2_SETSELECTED,
	EXPRESS2_SETELEMENTS,
	EXPRESS2_REPLACEINDEX,
} from "./types";

export const setSelected = (selected: Object) => ({
	type: EXPRESS2_SETSELECTED,
	selected,
});

export const setElements = (elements: Object[]) => ({
	type: EXPRESS2_SETELEMENTS,
	elements,
});

export const replaceIndex = (newElement: Object) => ({
	type: EXPRESS2_REPLACEINDEX,
	newElement,
});
