import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Demo/Counter';
import counter from './Demo/Counter/reducer';
import { createStore } from 'redux';

const store = createStore(counter);

const render = () => ReactDOM.render(
    <Counter 
        score={store.getState()}
        onIncrement={() => store.dispatch({type: 'INCREMENT'})}
        onDecrement={() => store.dispatch({type: 'DECREMENT'})}
        />,
    document.getElementById('root')
);

render();
store.subscribe(render);