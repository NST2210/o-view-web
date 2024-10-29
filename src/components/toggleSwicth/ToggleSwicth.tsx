import React from 'react';
import '../../design/sass/components/toggleSwitch.scss'

const ToggleSwitch = (props) => {

    return (
        <div className="toggle-switch">
            <input
                type="checkbox"
                className="toggle-switch-checkbox"
                name={props.Name}
                id={props.Name}
            />
            <label className="toggle-switch-label" htmlFor={props.Name}>
                <span className="toggle-switch-inner"/>
                <span className="toggle-switch-switch"/>
            </label>
        </div>
    );
}

export default ToggleSwitch;