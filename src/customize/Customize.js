import React from 'react';
import $ from 'jquery';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';

import './Customize.css';

class Customize extends React.Component {

    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    constructor(props) {
        super(props);

        const { cookies } = props;

        this.state = {
            botName: cookies.get('botName') || 'ISSDBot',
            gender: cookies.get('gender') || 'female',
            avatar: cookies.get('avatar') || 'true',
            typing: cookies.get('typing') || 'true',
            responseTime: cookies.get('responseTime') || 'medium'
        };

        this.applyChanges = this.applyChanges.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    async applyChanges() {

        const { cookies } = this.props;

        var newBotName = $('#bot-name')[0].value;
        var newGender = $('#gender')[0].value;
        var newAvatar = $('#avatar')[0].value;
        var newTyping = $('#typing')[0].value;
        var newResponseTime = $('#response-time')[0].value;

        cookies.set('botName', newBotName, { path: '/' });
        cookies.set('gender', newGender, { path: '/' });
        cookies.set('avatar', newAvatar, { path: '/' });
        cookies.set('typing', newTyping, { path: '/' });
        cookies.set('responseTime', newResponseTime, { path: '/' });

        await this.setState({
            botName: newBotName,
            gender: newGender,
            avatar: newAvatar,
            typing: newTyping,
            responseTime: newResponseTime
        });

        this.props.onChange(this.state, true);
    }

    renderGenderSelect() {
        var gender = this.state.gender;
        switch (gender) {
            case 'female':
                return <select id="gender">
                    <option value="none">None</option>
                    <option value="male">Male</option>
                    <option selected = "selected" value="female">Female</option>
                </select>;
            case 'male':
                return <select id="gender">
                    <option value="none">None</option>
                    <option selected = "selected" value="male">Male</option>
                    <option value="female">Female</option>
                </select>;
            default:
                return <select id="gender">
                    <option selected = "selected" value="none">None</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>;
        }
    }

    renderAvatarSelect() {
        var avatar = this.state.avatar;
        if (avatar === 'true') {
            return <select id="avatar">
                <option selected = "selected" value="true">Yes</option>
                <option value="false">No</option>
            </select>;
        }
        return <select id="avatar">
            <option value="true">Yes</option>
            <option selected = "selected" value="false">No</option>
        </select>;
    }

    renderTypingSelect() {
        var typing = this.state.typing;
        if (typing === 'true') {
            return <select id="typing">
                <option selected = "selected" value="true">Yes</option>
                <option value="false">No</option>
            </select>;
        }
        return <select id="typing">
            <option value="true">Yes</option>
            <option selected = "selected" value="false">No</option>
        </select>;
    }

    renderResponseSelect() {
        var responseTime = this.state.responseTime;

        switch (responseTime) {
            case 'fast':
                return <select id="response-time">
                    <option selected = "selected" value="fast">Fast</option>
                    <option value="medium">Medium</option>
                    <option value="slow">Slow</option>
                </select>;
            case 'medium':
                return <select id="response-time">
                    <option value="fast">Fast</option>
                    <option selected = "selected" value="medium">Medium</option>
                    <option value="slow">Slow</option>
                </select>;
            default:
                return <select id="response-time">
                    <option value="fast">Fast</option>
                    <option value="medium">Medium</option>
                    <option selected = "selected" value="slow">Slow</option>
                </select>;
        }
    }

    async handleInput() {
        const { cookies } = this.props;
        const textInput = $("#bot-name")[0];
        cookies.set('botName', textInput.value, { path: '/' });
        
        await this.setState({botName: textInput.value});
        this.props.onChange(this.state, false);
    }

    render() {

        return <div className="edit">
            <label for="bot-name">Bot Name:</label>
            <input type="text" id="bot-name" name="bot-name" onChange={this.handleInput} defaultValue={this.state.botName}/>
            <br />
            <label for="gender">Gender: </label>
            {this.renderGenderSelect()}
            <br />
            <label for="avatar">Avatar: </label>
            {this.renderAvatarSelect()}
            <br />
            <label for="typing">Typing Indicator: </label>
            {this.renderTypingSelect()}
            <br />
            <label for="response-time">Response Time: </label>
            {this.renderResponseSelect()}
            <br /><br />
            <div class="center">
                <button className= "apply" onClick={this.applyChanges}>Apply</button>
            </div>
        </div>;
    }
}

export default withCookies(Customize);
