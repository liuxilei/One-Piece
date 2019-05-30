import React, { Component } from 'react';
import Son from './son';
import { connect } from 'react-redux';
import { changeNumber } from './actions';

class PropChange extends Component {
    constructor(props) {
        super(props);
    }

    change = () => {
        this.props.change(3)
    }

    render() {
        return (
            <div>
                <span onClick={this.change}>change</span>
                <Son
                    value={this.props.number}
                />
            </div>
        )


    }
}

const mapStateToProps = (state) => ({
    number: state.number
})

const mapDispatchToProps = (dispatch) => {
    return {
        change: (number) => {
            dispatch(changeNumber(number))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PropChange);