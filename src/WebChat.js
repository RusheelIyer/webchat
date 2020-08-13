import React, { useEffect, useMemo } from 'react';
import ReactWebChat, { createDirectLine } from 'botframework-webchat';

import { FaRobot } from "react-icons/fa";
import './WebChat.css';

const WebChat = ({ className, onFetchToken, store, token, styleOptions, activityMiddleware, activityStatusMiddleware }) => {
  const directLine = useMemo(() => createDirectLine({ token }), [token]);

  useEffect(() => {
    onFetchToken();
  }, [onFetchToken]);

  return token ? (
    <ReactWebChat
      className={`${className || ''} web-chat`}
      directLine={directLine}
      store={store}
      styleOptions={styleOptions}
      activityMiddleware={activityMiddleware}
      activityStatusMiddleware={activityStatusMiddleware}
      locale='en-US'
    />
  ) : (
    <div className={`${className || ''} connect-spinner`}>
      <div className="content">
        <div className="icon">
          <FaRobot />
        </div>
        <p>Please wait while we are connecting.</p>
      </div>
    </div>
  );
};

export default WebChat;
