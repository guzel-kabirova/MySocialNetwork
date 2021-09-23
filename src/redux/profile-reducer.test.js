// import {addPost, deletePost, profileReducer} from './profile-reducer';
//
// const state = {
//     posts: [
//         {
//             name: 'Короткова Елизавета',
//             date: '15.08.2021 15:00',
//             postText: 'Привет, Гузель! Клево, что ты тоже зарегалась в этой сетке',
//             likeCount: 5,
//             comment: 7,
//             id: 1
//         },
//         {
//             name: 'Федорова Диана',
//             date: '14.08.2021 18:50',
//             postText: 'Мой первый постик! Гавтвуйте',
//             likeCount: 9,
//             comment: 12,
//             id: 2
//         }
//     ],
// };
//
// test('posts count should increase', () => {
//     const action = addPost('some text in post Hello');
//     const newState = profileReducer(state, action);
//     expect(newState.posts.length).toBe(3);
// });
// it('posts text must be currect', () => {
//     const action = addPost('some text in post Hello');
//     const newState = profileReducer(state, action);
//     expect(newState.posts[2].postText).toBe('some text in post Hello');
// });
//
// test('post count should decrease', () => {
//     const action = deletePost(1);
//     const newState = profileReducer(state, action);
//     expect(newState.posts.length).toBe(1);
// })
