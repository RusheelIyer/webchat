import classNames from 'classnames';
import React, { useCallback, useMemo, useState } from 'react';
import { createStore } from 'botframework-webchat';
import { withCookies } from 'react-cookie';

import $ from 'jquery';

import { IconContext } from 'react-icons';
import { FaComments, FaCircle, FaCaretRight, FaPen, FaCaretDown } from "react-icons/fa";

import WebChat from './WebChat';
import DataPrivacy from './DataPrivacy';
import Customize from './customize/Customize';
import FeedbackButtons from './customize/FeedbackButtons';

import './MainWebChat.css';

const MainWebChat = ({cookies}) => {

  const [botName, setBotName] = useState(cookies.get('botName') || 'ISSDBot');

  const activityMiddleware = () => next => card => {
    if (card.activity.from.role === 'bot' && (card.activity.text || card.activity.attachments)) {

      var messageText = card.activity.text ? card.activity.text : JSON.stringify(card.activity.attachments);

      store.dispatch({
        type: 'WEB_CHAT/SEND_EVENT',
        payload: {
          name: 'webchat/saveMessage',
          value: {
            sender: card.activity.from.id,
            conversationID: card.activity.conversation.id,
            message: messageText,
            timestamp: card.activity.timestamp
          }
        }
      });

      return (children) => (
        <React.Fragment>
          <FeedbackButtons store={store} activity={card.activity}>
            {next(card)(children)}
          </FeedbackButtons>
        </React.Fragment>);
    } else {
      return (children) => (
        <React.Fragment>
        { next(card)(children) }
        </React.Fragment>);
    }
  };

  const activityStatusMiddleware = () => next => args => {
    const {
      activity: {
        from: { role }
      },
      sendState,
      sameTimestampGroup
    } = args;
    if (sendState === 'sending') {
      return <span className="activityStatus activityStatus__sendStatus">Sending&hellip;</span>;
    } else if (sendState === 'send failed') {
      return <span className="activityStatus">Send failed.</span>;
    } else if (!sameTimestampGroup) {
      return (
      <span className="activityStatus activityStatus__timestamp">
        <span className="activityStatus__timestampPretext">{role === 'user' ? 'You on ' : botName + ' on '}</span>
        <span>{next(args)}</span>
      </span>);
    }
      return next(args);
    };

  var storedConsent = false;
  const store = useMemo(
    () =>
      createStore({}, ({ dispatch, getState }) => next => action => {
        if (action.type === 'DIRECT_LINE/CONNECT_FULFILLED') {
          dispatch({
            type: 'WEB_CHAT/SEND_EVENT',
            payload: {
              name: 'webchat/join',
              value: {
                language: window.navigator.language
              }
            }
          });

        } else if (action.type === 'DIRECT_LINE/INCOMING_ACTIVITY') {
          if (action.payload.activity.from.role === 'bot') {

            $.getJSON('http://gd.geobytes.com/GetCityDetails?callback=?', function(data) {
                if (!storedConsent) {
                  store.dispatch({
                    type: 'WEB_CHAT/SEND_EVENT',
                    payload: {
                      name: 'webchat/saveConsent',
                      value: {ip:data.geobytesipaddress}
                    }
                  });
                  storedConsent = true;
                }
              });
          }
        }
        return next(action);
      }),
    [storedConsent]
  );

  const [loaded, setLoaded] = useState(false);
  const [minimized, setMinimized] = useState(true);
  const [newMessage, setNewMessage] = useState(false);
  const [acceptedData, setAcceptedData] = useState(false);
  
  const [token, setToken] = useState();

  const getAvatarUrl = (gender) => {
    switch (gender) {
      case 'female':
        return "https://img.icons8.com/officel/40/000000/user-female.png";
      case 'male':
        return "https://img.icons8.com/officel/40/000000/user-male.png";
      default:
        return "https://img.icons8.com/ultraviolet/40/000000/bot.png";
    }
  }

  const [customize, setCustomize] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState( getAvatarUrl(cookies.get('gender') || 'female') );
  const [showAvatar, setShowAvatar] = useState(cookies.get('avatar') ? cookies.get('avatar') === 'true' : true);
  const [typingIndicator, setTypingIndicator] = useState(cookies.get('typing') ? cookies.get('typing') === 'true' : true);
  const [typingSpeed, setTypingSpeed] = useState(cookies.get('responseTime') || 'medium');

  var styleOptions = showAvatar ? {
    hideUploadButton: true,
    bubbleBackground: '#F9F9F9',
    bubbleFromUserBackground: '#EF7B00',
    bubbleFromUserTextColor: 'White',
    botAvatarImage: avatarUrl,
    timestampFormat: 'absolute',
    groupTimestamp: 2000
  } : {
    hideUploadButton: true,
    bubbleBackground: '#F9F9F9',
    bubbleFromUserBackground: '#EF7B00',
    bubbleFromUserTextColor: 'White',
    botAvatarInitials: botName[0],
    timestampFormat: 'absolute',
    groupTimestamp: 2000
  };

  const saveConfigDB = (config) => {
    
    store.dispatch({
      type: 'WEB_CHAT/SEND_EVENT',
      payload: {
        name: 'webchat/saveConfig',
        value: config
      }
    });

  }

  /**
   * If the user changes the name in the customize panel
   * i.e. enters text in the given input field, the name
   * of the bot is updated.
   */
  const changeBotName = (name) => {
    if (name !== '') {
      setBotName(name);
    }
  }

  /**
   * If the user wants to see an avatar, i.e. show is true
   * set the avatar's image according to the gender chosem
   * otherwise show no avatar
   */
  const changeAvatar = (show, gender) => {
    if (show === 'true') {
      setAvatarUrl(getAvatarUrl(gender));
      setShowAvatar(true);
    } else {
      setShowAvatar(false);
    }
  }

  /**
   * If the user has made changes to the typing settings
   * i.e. show the typing indicator or not/change the speed of the typing indicator
   * send a message to the bot indicating the corresponding wishes
   */
  const changeTypingSettings = async (typing, responseTime) => {

    var showTyping = (typing === 'true');
    if (showTyping !== typingIndicator) {
      setTypingIndicator(showTyping);

      store.dispatch({
        type: 'WEB_CHAT/SEND_EVENT',
        payload: {
          name: 'webchat/sendTypingIndicator',
          value: { typingIndicator: typing}
        }
      });
    }

    if (showTyping && (responseTime !== typingSpeed)) {
      setTypingSpeed(responseTime);

      store.dispatch({
        type: 'WEB_CHAT/SEND_EVENT',
        payload: {
          name: 'webchat/sendTypingSpeed',
          value: {speed: responseTime}
        }
      });
    }
  }

  const handleFetchToken = useCallback(async () => {
    if (!token) {
      const res = await fetch('https://directline.botframework.com/v3/directline/tokens/generate', { method: 'POST', headers: { 'Authorization': 'Bearer C3lV9aXOawY.W51C_66Rz6x5X6UfTywGq0LDNV81q5rk0HBrAnWK5vE' }});
      const { token } = await res.json();

      setToken(token);
    }
  }, [setToken, token]);

  const handleMaximizeButtonClick = useCallback(async () => {
    setLoaded(true);
    setMinimized(false);
    setNewMessage(false);
  }, [setMinimized, setNewMessage]);

  const handleMinimizeButtonClick = useCallback(() => {
    setMinimized(true);
    setNewMessage(false);
  }, [setMinimized, setNewMessage]);

  const handleCustomizeButtonClick = useCallback(() => {
    setCustomize(customize ? false : true);
    setNewMessage(false);
  }, [setCustomize, customize, setNewMessage]);

  const onValueChange = (value, closePanel) => {
    if (closePanel) {
      saveConfigDB(value);
      setCustomize(false);
      changeAvatar(value.avatar, value.gender);
      changeTypingSettings(value.typing, value.responseTime);
    }
    changeBotName(value.botName);
  };

  const submitPrivacy = (accepted, ip) => {
    setAcceptedData(accepted);
  }

  return (
    <div className="main-web-chat">
      {minimized && (
        <button className="maximize" onClick={handleMaximizeButtonClick}>
          <FaComments />
          {newMessage &&
            <IconContext.Provider value={{ className: 'blue-dot' }}>
              <FaCircle />
            </IconContext.Provider> }
        </button>
      )}
      {loaded && (
          <div className={classNames('chat-box', minimized ? 'hide' : '')}>
          <header>
            <div className="filler" />
            <IconContext.Provider value={{ size: '1.5em' }}>
            <button className="minimize" onClick={handleMinimizeButtonClick}>
                <FaCaretDown> Customize </FaCaretDown>
            </button>
            {acceptedData ?
              [<button className="customize" onClick={handleCustomizeButtonClick}>
              Customize&nbsp;&nbsp;
              { customize ?
                <FaCaretRight /> :
                <FaPen />
              }</button>] : null}
            </IconContext.Provider>
          </header>
          {acceptedData ?
            [<WebChat
                className="react-web-chat"
                onFetchToken={handleFetchToken}
                store={store}
                styleOptions = {styleOptions}
                token={token}
                activityMiddleware={activityMiddleware}
                activityStatusMiddleware={activityStatusMiddleware}
            />,
            customize ? (
              <Customize onChange={onValueChange} />
              ) : null]
            : <DataPrivacy onChange={submitPrivacy}/>}
        </div>
      )}
    </div>
  );
};

export default withCookies(MainWebChat);
