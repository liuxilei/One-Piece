export const EXPRESS2_SETSELECTED = "Express2/setSelected";
export const EXPRESS2_SETELEMENTS = "Express2/setElements";
export const EXPRESS2_REPLACEINDEX = "Express2/replaceIndex";

export interface State {
    readonly selected: Object,
	readonly elements: Array<Object>,
}

interface SetSelectedAction {
    type: typeof EXPRESS2_SETSELECTED
    selected: Object
}

interface SetElementAction {
    type: typeof EXPRESS2_SETELEMENTS
    elements: Array<Object>
}

interface ReplaceIndexAction {
    type: typeof EXPRESS2_REPLACEINDEX
    newElement: Object
}

export type ExpressionRemakeAction = SetSelectedAction | SetElementAction | ReplaceIndexAction