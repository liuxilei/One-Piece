import React, { Component, Fragment } from 'react';
import G6Editor from '@antv/g6-editor';

class G6EditorDemo extends Component {
    constructor(props) {
        super(props);
        this.editor = null;
        this.minimap = null;
        this.toolbar = null;
        this.contextmenu = null;
        this.itempannel = null;
        this.detailpannel = null;
        this.page = null;
    }

    componentDidMount() {
        this.editor = new G6Editor();
        this.minimap = new G6Editor.Minimap({
            container: 'minimap'
        });
        this.toolbar = new G6Editor.Toolbar({
            container: 'toobar'
        });
        this.contextmenu = new G6Editor.Contextmenu({
            container: 'contextmenu'
        });
        this.itempannel = new G6Editor.Itempannel({
            container: 'itempannel'
        });
        this.detailpannel = new G6Editor.Detailpannel({
            container: 'detailpannel'
        });
        this.page = new G6Editor.Flow({
            graph: {
                container: 'page'
            }
        });
        this.editor.add(this.minimap);
        this.editor.add(this.toolbar);
        this.editor.add(this.contextmenu);
        this.editor.add(this.itempannel);
        this.editor.add(this.detailpannel);
        this.editor.add(this.page);
    }

    render() {
        return (
            <Fragment>
                <div id="minimap"></div>
                <div id="toolbar"></div>
                <div id="itempannel"></div>
                <div id="detailpannel"></div>
                <div id="contextmenu"></div>
                <div id="page"></div>
            </Fragment>
        )
    }
}

export default G6EditorDemo;