import React, { Component } from 'react';
const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};
class InputField extends Component {
    constructor(props) {
        super(props);
    }
    handleChange = (e) => {
        this.props.onTemperatureChange(e.target.value);
    }
    render() {
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
            <>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input value={temperature}
                    onChange={this.handleChange} />
            </>
        );
    }
}

export default InputField;