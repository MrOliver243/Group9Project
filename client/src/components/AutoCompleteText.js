//this file is part of the search bar module in homePage.js

import React from 'react';
import './AutoCompleteText.css';
export default class AutoCompleteText extends React.Component {
    constructor (props) {
        super(props);
        this.items = [
            'Dark Souls',
            'Minecraft',
            'Fortnite',
            'The Witcher 3: Wild Hunt',
            'League of Legends',
        ];

        this.state = {
            suggestions: [],
            text: '',

        };

    }

    onTextChanged = (e) => {
        const value = e.target.value;
        let suggestions = [];
        if (value.length > 0) {
            
            const regex = new RegExp('^${value}', 'i');
            const suggestions = this.items.sort().filter(v => regex.test(v));
        }
        this.setState(() => ({ suggestions, text: value }));
    }

    suggestionSelected (value) {
        this.setState(() => ({
            text: value,
            suggestions: [],
        }))
    }

    renderSuggestions () {
        const { suggestions } = this.state;
        if (suggestions.length === 0) {
            return null;
        }
        return (
            <ul>
                {suggestions.map((item) => <li onClick={() => this.suggestionSelected(item)}>{item}</li>)}
            </ul>
        )
    }

    render () {
        const { text } = this.state;
        return (
            <div className="AutoCompleteText">
                <input value={ text } onChange={this.onTextChanged} type="text" />
                {this.renderSuggestions()}
            </div>
            
        )
    }
}