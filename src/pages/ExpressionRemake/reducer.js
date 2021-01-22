import {
	EXPRESS2_SETSELECTED,
	EXPRESS2_SETELEMENTS,
	EXPRESS2_REPLACEINDEX,
} from "./actionTypes";
import utils from "@/utils";
import { actions } from "../BookKeeping";

const defaultState = {
	selected: {},
	elements: [],
};

export default (state = defaultState, action) => {
	switch (action.type) {
		case EXPRESS2_SETSELECTED: {
			return {
				...state,
				selected: action.selected,
			};
		}
		case EXPRESS2_SETELEMENTS: {
			return {
				...state,
				elements: action.elements,
			};
		}
		case EXPRESS2_REPLACEINDEX: {
			const copyElements = utils.objCopy(state.elements);
			const index = copyElements.findIndex(
				(item) => item.key === action.newElement.key,
			);
			copyElements.splice(index, 1, action.newElement);
			return {
				...state,
				elements: copyElements,
			};
		}
		default:
			return state;
	}
};
