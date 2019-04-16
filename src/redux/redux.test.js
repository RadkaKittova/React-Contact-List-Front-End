import reducer from './reducer';
import {createAppStore} from './store';

test('reducer loads init data', () => {
    const action = {type: 'INIT_APP'};

    const data = reducer(undefined, action);

    expect(Array.isArray(data.items)).toBe(true);
    expect(data.items.length).toBe(0);
});

test('reducer keeps the data', () => {
    const action = {type: 'UNKNOWN'};

    const data = {
        items: [{id:1, name:'ABC'}],
    };

    const newData = reducer(data, action);

    expect(newData.items.length).toBe(1);
})

test('reducer can load the data', () => {
    const action = {

        type: 'LOAD_DATA',
        items: [{id:1, name: 'ABC'}, {id:2, name: 'CDE'}],
    };

    const initData = reducer(undefined, action);
    const newData = reducer(initData, action);

    expect(newData.items.length).toBe(2);
});

test('store initial data', () => {
    const store = createAppStore();
    const data = store.getState();

    expect(Array.isArray(data.items)).toBe(true);
    expect(data.items.length).toBe(0);

});

test('store action', () => {
    const store = createAppStore();
    const action = {
        type: 'LOAD_DATA',
        items: [{id:1, name: 'ABC'}, {id:2, name: 'CDE'}],
    };

    store.dispatch(action);
    const data = store.getState();
    expect(data.items.length).toBe(2);
})
