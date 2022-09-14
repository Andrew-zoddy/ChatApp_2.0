import moment from "moment";

export const mockChatStore = [
    {
        id: 0,
        userIcon: 'https://s21.q4cdn.com/399680738/files/images/management/mark-zuckerberg-bio.png',
        userName: 'Fredrik',
        messageHistory:
            [
                {
                    id: 1,
                    text: 'How are you?',
                    date: moment().format('MMMM Do YYYY, h:mm:ss a'),
                    flag: 'opponent'
                },
                {
                    id: 2,
                    text: 'Not bad',
                    date: moment().format('MMMM Do YYYY, h:mm:ss a'),

                }
            ]


    },
    {
        id: 1,
        userIcon: 'https://w7.pngwing.com/pngs/941/258/png-transparent-mark-zuckerberg-facebook-f8-icon-mark-zuckerberg-celebrities-tshirt-hand.png',
        userName: 'Sasha',
        messageHistory:
            [
                {
                    id: 1,
                    text: 'Temporary message',
                    date: moment().format('MMMM Do YYYY, h:mm:ss a'),
                    flag: 'opponent'
                },
                {
                    id: 2,
                    text: 'No, its mock data)',
                    date: moment().format('MMMM Do YYYY, h:mm:ss a'),

                }
            ]


    },
    {
        id: 2,
        userIcon: 'data:image/jpeg;base64,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',
        userName: 'Ben',
        messageHistory:
            [
                {
                    id: 1,
                    text: 'Hello',
                    date: moment().format('MMMM Do YYYY, h:mm:ss a'),

                },
                {
                    id: 2,
                    text: 'How is your wife doing?',
                    date: moment().format('MMMM Do YYYY, h:mm:ss a'),
                    flag: 'opponent'

                },
                {
                    id: 3,
                    text: 'What?',
                    date: moment().format('MMMM Do YYYY, h:mm:ss a'),
                    flag: 'opponent'
                },
                {
                    id: 4,
                    text: 'None',
                    date: moment().format('MMMM Do YYYY, h:mm:ss a'),

                }
            ]


    },
    {
        id: 3,
        userIcon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdaI8yH0RtYqq9awtF4zgC9rfSvrIv50iIPg&usqp=CAU',
        userName: 'Ubbe',
        messageHistory:
            [
                {
                    id: 1,
                    text: 'god, you are not awesome at all)',
                    date: moment().format('MMMM Do YYYY, h:mm:ss a'),
                    flag: 'opponent'
                },
                {
                    id: 2,
                    text: 'Thanks (no) =)',
                    date: moment().format('MMMM Do YYYY, h:mm:ss a'),

                }
            ]


    },
]