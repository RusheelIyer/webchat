import React from 'react';
import $ from 'jquery';

import './DataPrivacy.css'

export default class DataPrivacy extends React.Component {

    constructor(props) {
        super(props)

        this.submitDataPrivacy = this.submitDataPrivacy.bind(this);
    }

    submitDataPrivacy() {
        let ip = null;
        $.getJSON('http://gd.geobytes.com/GetCityDetails?callback=?', function(data) {
            ip = data.geobytesipaddress;
        });
        this.props.onChange(true, ip);
    }

    render() {
        return (<div className='data_privacy'>
            <div className='data_privacy_header'>
                Declaration of Consent
            </div>
            <div className='data_privacy_text'>
                I have read the <a href="https://issd.iism.kit.edu/1527.php" target="_blank" rel="noopener noreferrer">privacy policy</a> and hereby agree that the content of my messages to the chatbot is sent to Microsoft servers for language processing purposes. I further agree that my anonymized data can be used for scientific purposes. I am aware that I can revoke my consent at any time.
            </div>
            <button className="accept" type="button" onClick={this.submitDataPrivacy}>
                Accept
            </button>
        </div>);
    }

}
