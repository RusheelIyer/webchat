import React from 'react';
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

import './FeedbackButtons.css';

export default class FeedbackButtons extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            likeCliked: false,
            dislikeClicked: false
        }

        this.clickLike = this.clickLike.bind(this);
        this.clickDislike = this.clickDislike.bind(this);
        this.saveFeedback = this.saveFeedback.bind(this);
    }

    saveFeedback(feedback) {
        this.props.store.dispatch({
          type: 'WEB_CHAT/SEND_EVENT',
          payload: {
            name: 'webchat/saveFeedback',
            value: feedback
          }
        });
      }

    async clickLike(){
        if (!this.state.likeClicked && !this.state.dislikeClicked) {
            //Stringify the entire json message in case of an adaptive card and not text message
            var jsonMessage = this.props.activity.text ? this.props.activity.text : JSON.stringify(this.props.activity.attachments);
            var messageDetails = {
                conversationID: this.props.activity.conversation.id,
                message: jsonMessage,
                feedback: "Like",
                timestamp: this.props.activity.timestamp
            };

            await this.setState({likeClicked: true});
            this.saveFeedback(messageDetails);
        }
    }

    async clickDislike() {
        
        if (!this.state.likeClicked && !this.state.dislikeClicked) {
            //Stringify the entire json message in case of an adaptive card and not text message
            var jsonMessage = this.props.activity.text ? this.props.activity.text : JSON.stringify(this.props.activity.attachments);
            var messageDetails = {
                conversationID: this.props.activity.conversation.id,
                message: jsonMessage,
                feedback: "Dislike",
                timestamp: this.props.activity.timestamp
            };
            await this.setState({dislikeClicked: true});
            this.saveFeedback(messageDetails);
        }
    }

    render() {

        let btn_class = this.state.likeClicked ? "feedbackButton__buttonClicked" : "feedbackButton__button";
        let btn_classDislike = this.state.dislikeClicked ? "feedbackButton__buttonClicked" : "feedbackButton__button";

        return <div className="feedbackButton">
                <div className="feedbackButton__content">{this.props.children}</div>
                <div className="feedbackButton__bar">
                    <button id="like" className={btn_class} onClick={this.clickLike}>
                        <FaThumbsUp />
                    </button>
                    <button id="dislike" className={btn_classDislike} onClick={this.clickDislike}>
                        <FaThumbsDown />
                    </button>
                </div> 
        </div>;
    }
}
