import React from 'react';
import style from './OpponentMessage.module.scss'

const OpponentMessage = ({messages, icon}) => {


    return (
        <div className={'flag' in messages ? style.opponentMessage_wrapper : style.userMessage_wrapper}>
            <div className={'flag' in messages ? style.opponent_message_block : style.user_message_block}>
                <img className={'flag' in messages ? style.opponent_image : style.user_image}
                     src={'flag' in messages ? icon : 'https://cdn-icons-png.flaticon.com/512/1946/1946429.png'}
                     alt="icon"/>
                <div className={'flag' in messages ? style.opponent_text_block : style.user_text_block}>
                    <p className={'flag' in messages ? style.opponent_message : style.user_message}>{messages.text}</p>
                </div>
            </div>

            <div className={style.date_info}>{messages.date}</div>
        </div>
    );
};

export default OpponentMessage;