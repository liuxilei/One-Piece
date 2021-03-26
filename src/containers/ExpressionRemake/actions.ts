import {
	EXPRESS2_SETSELECTED,
	EXPRESS2_SETELEMENTS,
	EXPRESS2_REPLACEINDEX,
	ExpressionRemakeAction,
} from "./types";

export const setSelected = (selected: Object): ExpressionRemakeAction => ({
	type: EXPRESS2_SETSELECTED,
	selected,
});

export const setElements = (elements: Object[]): ExpressionRemakeAction => ({
	type: EXPRESS2_SETELEMENTS,
	elements,
});

export const replaceIndex = (newElement: Object): ExpressionRemakeAction => ({
	type: EXPRESS2_REPLACEINDEX,
	newElement,
});
