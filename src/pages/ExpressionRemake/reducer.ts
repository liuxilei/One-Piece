import {
	EXPRESS2_SETSELECTED,
	EXPRESS2_SETELEMENTS,
	EXPRESS2_REPLACEINDEX,
	State,
	ExpressionRemakeAction,
} from "./types";
import utils from "@/utils";

const defaultState: State = {
	selected: {},
	elements: [],
};

interface hasKeyObject {
	key: any
}

export default (state = defaultState, action: ExpressionRemakeAction) => {
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
			const copyElements: Array<hasKeyObject> = utils.objCopy(state.elements);
			const index = copyElements.findIndex(
				(item) => item.key === (action.newElement as hasKeyObject).key,
			);
			copyElements.splice(index, 1, (action.newElement as hasKeyObject));
			return {
				...state,
				elements: copyElements,
			};
		}
		default:
			return state;
	}
};
