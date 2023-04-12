import { createStore } from 'redux';
const reducer = (state, action) => {
  return state;
};

const initialState = {
    projects: [
        {
            id: 1,
            title: 'Speach therapist Website',
            release: '04.2023',
            photos: []

        },
        {
            id: 2,
            title: 'Simple ToDo List',
            release: '11.2022',
            photos: []
        }
    ],


    sentences:['work well', 'connect people', 'look great']
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;