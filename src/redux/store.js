import {createStore} from 'redux';
import reducer from './reducer';

export function createAppStore() {
    return createStore(reducer);
}