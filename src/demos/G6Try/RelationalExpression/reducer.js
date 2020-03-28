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
import utils from "../../../utils";

const defaultState = {
    components: [
        {
            type: "dimension",
            name: "路飞"
        },
        {
            type: "dimension",
            name: "索隆"
        },
        {
            type: "dimension",
            name: "娜美"
        },
        {
            type: "dimension",
            name: "乌索普"
        },
        {
            type: "dimension",
            name: "山治"
        },
        {
            type: "formula",
            name: "文本组件"
        }
    ],
    flowEditor: [],
    isDragEnter: false, //是否移入画板
    currentTarget: {},
    replacedIndex: undefined, //要替换的对象索引
    insertIndex: undefined,
    flowDragIndex: undefined,
}

export default (state = defaultState, action) => {
    switch(action.type) {
        case EXPRESS_DRAGENTER: {
            return {
                ...state,
                isDragEnter: action.isDragEnter
            };
        }
        case EXPRESS_SETDRAGTARGET: {
            return {
                ...state,
                currentTarget: action.currentTarget
            }
        }
        case EXPRESS_ADDFLOWEDITOR: {
            return {
                ...state,
                flowEditor: [
                    ...state.flowEditor,
                    action.newFlowEditor
                ]
            }
        }
        case EXPRESS_CHANGEFLOWEDITORBYKEY: {
            let flowEditor = utils.objCopy(state.flowEditor);
            flowEditor.map(item => {
                if (item.key === action.key) {
                    item.edit = !item.edit;
                }
            });
            return {
                ...state,
                flowEditor
            }
        }
        case EXPRESS_CHANGEFLOWEDITORBYINDEX: {
            let flowEditor = utils.objCopy(state.flowEditor);
            //给新替换元素添加key值
            let replacedKey = flowEditor[state.replacedIndex].key;
            let copyCurrentTarget = utils.objCopy(state.currentTarget);
            copyCurrentTarget.key = replacedKey;
            copyCurrentTarget.edit = false;
            flowEditor.splice(state.replacedIndex, 1, copyCurrentTarget);
            return {
                ...state,
                replacedIndex: undefined,
                flowEditor,
            }
        }
        case EXPRESS_SETREPLAEDINDEX: {
            return {
                ...state,
                replacedIndex: action.replacedIndex,
            }
        }
        case EXPRESS_SETINSERTINDEX: {
            return {
                ...state,
                insertIndex: action.insertIndex
            }
        }
        case EXPRESS_INSERTFLOWEDITOR: {
            let flowEditor = utils.objCopy(state.flowEditor);
            let copyCurrentTarget = utils.objCopy(state.currentTarget);
            copyCurrentTarget.edit = false;
            flowEditor.splice(state.insertIndex, 0, copyCurrentTarget);
            flowEditor.map((item, index) => {
                item.key = ++index;
            });
            return {
                ...state,
                flowEditor,
                insertIndex: undefined,
            }
        }
        case EXPRESS_CANVASINSERTFLOWEDITOR: {
            let flowEditor = utils.objCopy(state.flowEditor);
            let insertSource = utils.objCopy(state.flowEditor[state.flowDragIndex]);
            flowEditor.splice(state.insertIndex, 0, insertSource);
            if (state.flowDragIndex > state.insertIndex) {
                flowEditor.splice(state.flowDragIndex + 1, 1);
            } else if (state.flowDragIndex < state.insertIndex) {
                flowEditor.splice(state.flowDragIndex, 1);
            }
            flowEditor.map((item, index) => {
                item.key = ++index;
            });
            return {
                ...state,
                flowEditor,
                insertIndex: undefined,
                flowDragIndex: undefined
            }
        }
        case EXPRESS_SETFLOWDRAGINDEX: {
            return {
                ...state,
                flowDragIndex: action.flowDragIndex
            }
        }
        case EXPRESS_EXCHANGEFLOWEDITOR: {
            let start = utils.objCopy(state.flowEditor[state.flowDragIndex]);
            let end = utils.objCopy(state.flowEditor[state.replacedIndex]);
            let copyFlowEditor = utils.objCopy(state.flowEditor);
            copyFlowEditor[state.flowDragIndex] = end;
            copyFlowEditor[state.replacedIndex] = start;
            return {
                ...state,
                flowEditor: copyFlowEditor,
                flowDragIndex: undefined,
                replacedIndex: undefined
            }
        }
        default:
            return state;
    }
}