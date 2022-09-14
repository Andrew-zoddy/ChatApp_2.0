import React from 'react';
import style from './Chatter.module.scss'

const Chatter = ({userData, updatedData,}) => {


    const lastMessageMock = userData.messageHistory[userData.messageHistory.length - 1]


    return (
        <div onClick={() => updatedData(userData)} className={style.chatter_layout}>
            <div className={style.chatter_container}>
                <div className={style.image_block}>
                    <img className={style.chatterImage} src={userData.userIcon}
                         alt=""/>
                </div>
                <div className={style.text_block}>
                    <div className={style.chatter_info}>
                        <div className={style.chatterName}>{userData.userName}</div>
                        <div className={style.chatterLastMessage}>{lastMessageMock.text}</div>
                    </div>
                    <div className={style.date_info}>{lastMessageMock.date}</div>
                </div>
            </div>
        </div>
    );
};

export default Chatter;