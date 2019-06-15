import React, { Component } from 'react';
import Son from './son';
import { connect } from 'react-redux';
import { changeNumber } from '../actions';

class PropChange extends Component {
    constructor(props) {
        super(props);
    }

    change = () => {
        //this.props.history.push('/g6demo');
        //路由传参，下面param字段无所谓起什么名字
        this.props.history.push({ 
            pathname:'/g6demo',
            param:{
                value: '刘西磊超帅！嘿嘿'
            },
            '这是一个超级无敌巨可怕的参数属性': '好的我是他的属性值，为了告诉你，我的属性名可以随便起'
        })
    }

    render() {
        return (
            <div>
                <span onClick={this.change} style={{cursor:'pointer'}}>点击跳转路由测试传参</span>
                <Son
                    value={this.props.number}
                />
            </div>
        )


    }
}

const mapStateToProps = (state) => ({
    number: state.propChangeState.number
})

const mapDispatchToProps = (dispatch) => {
    return {
        change: (number) => {
            dispatch(changeNumber(number))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PropChange);