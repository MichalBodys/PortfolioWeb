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
            photos: [
              {
              src: 'https://cdn.pixabay.com/photo/2022/01/24/14/48/road-6963584_1280.jpg',
              description: 'lorem'
            },
            {
              src: 'https://cdn.pixabay.com/photo/2023/04/11/15/48/groyne-7917596_1280.jpg',
              description: 'lorem lorem'
            },
            {
              src: 'https://cdn.pixabay.com/photo/2012/06/19/10/32/owl-50267_1280.jpg',
              description: 'lorem lorem lorem'
            }

          ]

        },
        {
            id: 2,
            title: 'Simple ToDo List',
            release: '11.2022',
            photos: [
              {
              src: './assets/img/todo1.png',
              description: 'lorem'
            },
            {
              src: './assets/img/todo2.png',
              description: 'lorem lorem'
            },
            {
              src: './assets/img/todo3.png',
              description: 'lorem lorem lorem'
            }

          ]
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