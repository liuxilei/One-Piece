import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';

const styles = {
    menu: {
        overflow: 'hidden',
        border: '2px solid #ddd',
        //width: 300,
        marginTop: 20,
    },
    selection: {
        padding: 10,
        margin: 0,
        borderBottom: '1px solid #ededed'
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        cursor: 'pointer',
        width: 200,
        height: 45,
        border: 'none',
        borderRadius: 4,
        backgroundColor: '#ffc107',
    },
}

class MotionDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            height: 38,
            width: 300
        }
    }

    animate = () => {
        this.setState(state => ({
            height: state.height === 233 ? 38 : 233,
            width: state.width === 500 ? 300 : 500
        }))
    }

    render() {
        const { width, height } = this.state;
        return (
            <div className="App">
                <div style={styles.button} onClick={this.animate}>Animate</div>
                <Motion style={{ height: spring(height), width: spring(width) }}>
                    {
                        ({ height, width }) => <div style={Object.assign({}, styles.menu, { height, width })}>
                            <p style={styles.selection}>Selection 1</p>
                            <p style={styles.selection}>Selection 2</p>
                            <p style={styles.selection}>Selection 3</p>
                            <p style={styles.selection}>Selection 4</p>
                            <p style={styles.selection}>Selection 5</p>
                            <p style={styles.selection}>Selection 6</p>
                        </div>
                    }
                </Motion>
                <Motion defaultStyle={{x: 0}} style={{x: spring(10) }}>
                    {value => <div>{value.x}</div>}
                </Motion>
            </div>
        )
    }
}

export default MotionDemo;