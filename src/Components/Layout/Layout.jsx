import React, {useEffect, useState} from 'react';
import style from './Layout.module.scss'
import Chatter from "../AllChats/Chatter/Chatter";
import OpponentMessage from "../CurrentChat/OpponentMessage/OpponentMessage";
import moment from "moment";
import {useDispatch, useSelector} from "react-redux";
import {getChucksJoke} from "../../Redux/chatReducer";


const Layout = () => {
    // redux
    const dispatch = useDispatch()
    const chatData = useSelector(state => state.chat)
    const joke = useSelector(state => state.chat.joke)
    ////////////////////
    // global refreshed data state from chatter props
    const [updatedDataStore, setUpdatedDataStore] = useState([''])
    // current messenger State
    const [messageStore, setMessageStore] = useState('')
    //message input field State
    const [messageInputState, setMessageInputState] = useState('')
    //check if a certain messenger was clicked on - to render messaging history
    const [messageVisible, setMessageVisible] = useState(false)


    // global data refresh func from mock-data array
    const updatedData = (data) => {
        setMessageStore(data.messageHistory)
        setMessageVisible(true)
        setUpdatedDataStore(data)
    }
    // click/keydown  function that generates new message
    const onMessageSend = () => {
        if (messageInputState) {
            const newMessage = {
                id: Math.floor(Math.random() * 100), //for generating new unique ID
                text: messageInputState,
                date: moment().format('MMMM Do YYYY, h:mm:ss a'),
            }
            chatData.chat[`${updatedDataStore.id}`].messageHistory.push(newMessage)
            setMessageInputState('')
            setMessageStore(chatData.chat[`${updatedDataStore.id}`].messageHistory)

            setTimeout(function () {
                dispatch(getChucksJoke())
            }, 3000);

        }
    }

    //generating new Answer message for Chuck's joke
    useEffect(() => {

        if (messageStore && messageVisible && joke) {

            const newAnswer = {
                id: Math.floor(Math.random() * 100), //for generating new unique ID
                text: joke,
                date: moment().format('MMMM Do YYYY, h:mm:ss a'),
                flag: 'opponent',
            }
            setMessageStore([...chatData.chat[`${updatedDataStore.id}`].messageHistory, newAnswer])
            chatData.chat[`${updatedDataStore.id}`].messageHistory.push(newAnswer)
        }

    }, [joke])

    // useEffect(() => {
    //
    //     const items = JSON.parse(localStorage.getItem('messageHistory'));
    //      dispatch(setChatData(items));
    //         console.log(items)
    //
    // }, [dispatch]);
    //
    // useEffect(() =>{
    //     localStorage.setItem('messageHistory', JSON.stringify(chatData))
    // },[chatData])


    return (
        <div className={style.layout_wrapper}>
            <section className={style.allChats_container}>
                <header className={style.header_block}>
                    <div className={style.userInfo_block}>
                        <img className={style.userImg} src='https://cdn-icons-png.flaticon.com/512/149/149071.png'
                             alt="userImage"/>
                        <div className={style.userName}>Username</div>
                    </div>
                    <div className={style.searchForm_block}>
                        <input className={style.searchInput} type="search" placeholder={'Search chat'}/>
                    </div>
                </header>
                <main className={style.allChats_block}>
                    <section className={style.chatList_container}>
                        {
                            chatData.chat.map(userData => <Chatter
                                key={userData.id}
                                userData={userData}
                                updatedData={updatedData}
                                messageStore={messageStore}

                            />)
                        }
                    </section>
                </main>
            </section>
            <section className={style.currentChat_container}>
                <header className={style.currentChat_header}>
                    <div className={style.currentChat_image_block}>
                        <img className={style.currentChatter_image} src={updatedDataStore.userIcon} alt=""/>
                    </div>
                    <div className={style.currentChat_chatterName}>{updatedDataStore.userName}</div>
                </header>

                <main className={style.messageHistory_block}>
                    {messageVisible &&
                        messageStore.map(m => <OpponentMessage key={m.id}
                                                               messages={m}
                                                               icon={updatedDataStore.userIcon}

                        />)}
                </main>

                <div className={style.inputField_block}>
                    <div className={style.input_container}>
                        <input
                            required={true}
                            className={style.message_input}
                            placeholder={'Type your message here'}
                            type="text"
                            value={messageInputState}
                            onChange={(e) => setMessageInputState(e.target.value)}
                            onKeyDown={e => e.key === 'Enter' && onMessageSend()}

                        />
                        <img className={style.sendMessage_icon}
                             src="https://static.thenounproject.com/png/3061866-200.png" alt=""
                             onClick={onMessageSend}
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Layout;