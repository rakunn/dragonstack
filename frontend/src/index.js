import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { createStore } from 'redux';
import './index.css';

import rootReducer from './reducers';

import Generation from './components/Generation';
import Dragon from './components/Dragon';


const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(
    <div>
        <Provider store={store}>
            <h1>Dragon Stack</h1>
            <Generation />
            <Dragon />
        </Provider>
    </div>,
    document.getElementById('root')
);