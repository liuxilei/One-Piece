import {
	EXPRESS_DRAGENTER,
	EXPRESS_SETDRAGTARGET,
	EXPRESS_ADDFLOWEDITOR,
	EXPRESS_CHANGEFLOWEDITORBYKEY,
	EXPRESS_SETREPLAEDINDEX,
	EXPRESS_CHANGEFLOWEDITORBYINDEX,
	EXPRESS_SETINSERTINDEX,
	EXPRESS_INSERTFLOWEDITOR,
	EXPRESS_SETFLOWDRAGINDEX,
	EXPRESS_EXCHANGEFLOWEDITOR,
	EXPRESS_CANVASINSERTFLOWEDITOR,
} from "./actionTypes";

export const dragEnter = (isDragEnter) => ({
	type: EXPRESS_DRAGENTER,
	isDragEnter,
});

export const setDragTarget = (currentTarget) => ({
	type: EXPRESS_SETDRAGTARGET,
	currentTarget,
});

export const addFlowEditor = (newFlowEditor) => ({
	type: EXPRESS_ADDFLOWEDITOR,
	newFlowEditor,
});

export const changeFlowEditorByKey = (key) => ({
	type: EXPRESS_CHANGEFLOWEDITORBYKEY,
	key,
});

export const setReplacedIndex = (replacedIndex) => ({
	type: EXPRESS_SETREPLAEDINDEX,
	replacedIndex,
});

export const changeFlowEditorByIndex = () => ({
	type: EXPRESS_CHANGEFLOWEDITORBYINDEX,
});

export const setInsertIndex = (insertIndex) => ({
	type: EXPRESS_SETINSERTINDEX,
	insertIndex,
});

export const insertFlowEditor = () => ({
	type: EXPRESS_INSERTFLOWEDITOR,
});

export const setFlowDragIndex = (flowDragIndex) => ({
	type: EXPRESS_SETFLOWDRAGINDEX,
	flowDragIndex,
});

export const exchangeFlowEditor = () => ({
	type: EXPRESS_EXCHANGEFLOWEDITOR,
});

export const canvasInsertFlowEditor = () => ({
	type: EXPRESS_CANVASINSERTFLOWEDITOR,
});
