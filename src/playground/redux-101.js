import { createStore } from 'redux';

const store = createStore((state = { count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 };
        case 'DECREMENT':
            return { count: state.count - 1 };
        case 'RESET':
            return { count: 0 };
        default: return state;
    };
});

console.dir('After initial store creation: ',store.getState().count);

// Actions - comprised of an object that is sent to the store
// e.g. increment, decrement, reset
store.dispatch({
    type: 'INCREMENT'
});
console.log('After increment: ', store.getState().count);
store.dispatch({
    type: 'INCREMENT'
});
console.log('After another increment: ', store.getState().count);
store.dispatch({
    type: 'DECREMENT'
});
console.log('After decrement: ', store.getState().count);
store.dispatch({
    type: 'RESET'
});
console.log('After reset: ', store.getState().count);