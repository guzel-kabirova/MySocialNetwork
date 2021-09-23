import {dialogsReducer} from './dialogs-reducer';
import {profileReducer} from './profile-reducer';

const store = {
    _state: {
        profilePage: {
            users: {
                name: 'Кабирова Гузель',
                birthday: '16 марта',
                city: 'Иннополис',
                education: 'МГТУ им.Баумана',
                position: 'Дизайнер',
                about: 'Люблю кушац и спать'
            },
            posts: [
                {
                    name: 'Короткова Елизавета',
                    date: '15.08.2021 15:00',
                    postText: 'Привет, Гузель! Клево, что ты тоже зарегалась в этой сетке',
                    likeCount: 5,
                    comment: 7
                },
                {
                    name: 'Федорова Диана',
                    date: '14.08.2021 18:50',
                    postText: 'Мой первый постик! Гавтвуйте',
                    likeCount: 9,
                    comment: 12
                }
            ],
            newPostText: ''
        },
        dialogsPage: {
            messages: [
                {
                    text: 'Привет! Как твои дела?', date: '15.08.2021'
                },
                {
                    text: 'Привет!:) Хорошо, кодю день и ночь. А как ты? Шо по жизни нового? Не звонит, не пишет. Бла бла лорем ипсум и еще пара слов',
                    date: '16.08.2021'
                },
                {
                    text: 'Позвоню минут через 10, есть время?', date: '16.08.2021'
                },
                {
                    text: 'Привет! Как твои дела?', date: '15.08.2021'
                },
                {
                    text: 'Привет!:) Хорошо, кодю день и ночь. А как ты? Шо по жизни нового? Не звонит, не пишет. Бла бла лорем ипсум и еще пара слов',
                    date: '16.08.2021'
                },
                {
                    text: 'Позвоню минут через 10, есть время?', date: '16.08.2021'
                }
            ],
            persons: [
                {
                    id: '1',
                    name: 'Тимофей',
                    date: '15.08.2021',
                    text: 'Искусство естественно отталкивает эриксоновский гипноз'
                },
                {
                    id: '2',
                    name: 'София',
                    date: '07.06.2021',
                    text: 'Фронт пространственно выталкивает здравый смысл.'
                },
                {
                    id: '3',
                    name: 'Макар',
                    date: '01.06.2021',
                    text: 'Аномальная джетовая активность осмысляет ионный хвост. Атом, по определению, мгновенно отчуждает атом как при нагреве, так и при охлаждении.'
                },
                {
                    id: '4',
                    name: 'Николай',
                    date: '12.09.2020',
                    text: 'Взвесь вероятна. Лидерство искажает электрон.'}
                ,
                {
                    id: '5',
                    name: 'Элина',
                    date: '03.05.2020',
                    text: 'номальная джетовая активность осмысляет ионный хвост. Атом, по определению, мгновенно отчуждает атом как при нагреве, так и при охлаждении.'
                },
                {
                    id: '6',
                    name: 'Эмилия',
                    date: '01.01.2020',
                    text: 'Толпа неустойчиво начинает интеллигибельный закон исключённого третьего. '
                },
                {
                    id: '7',
                    name: 'Анастасия',
                    date: '08.12.2020',
                    text: 'Поведенческая терапия иллюстрирует напряженный объект. Закон внешнего мира начинает субъективный контраст.'
                },
                {
                    id: '8',
                    name: 'Полина',
                    date: '08.12.2019',
                    text: 'Бессознательное, на первый взгляд, жизненно представляет собой катарсис.'
                }
            ],
            newMessageText: ''
        }
    },
    _rerenderEntireTree() {
        console.log('State was changed')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._rerenderEntireTree = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._rerenderEntireTree(this._state);
}
};

window.store=store;

export default store;
