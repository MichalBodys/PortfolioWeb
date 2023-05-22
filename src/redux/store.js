import { createStore } from 'redux';
const reducer = (state, action) => {
  return state;
};



const initialState = {
    projects: [
        {
            id: 1,
            title: 'speach therapist website',
            release: '04.2023',
            url: 'https://logopeda-dialog.pl/',
            photos: [
              {
                 nmb: 4,
              src: './assets/img/magda1.png',
              description: 'custom made layout'
            },
            {
               nmb: 5,
              src: './assets/img/magda2.png',
              description: 'headless cms connected'
            },
            {
               nmb: 6,
              src: './assets/img/magda3.png',
              description: 'responsive layout in all devices'
            }

          ]

        },
        {
            id: 2,
            title: 'simple todo list',
            release: '11.2022',
            url: 'https://silver-sawine-23a225.netlify.app',
            photos: [
              {
              nmb: 1,
              src: './assets/img/todo1.png',
              description: 'multiple cards variety'
            },
            {
              nmb: 2,
              src: './assets/img/todo2.png',
              description: 'highlighting favorite positions'
            },
            {
              nmb: 3,
              src: './assets/img/todo3.png',
              description: 'posibility to adding new lists'
            }

          ]
        }
    ],

    sentences:['work well', 'connect people', 'look great'],
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;