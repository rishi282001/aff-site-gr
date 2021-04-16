import { useState } from "react";

export function Titlebar() {

    const[switchState, setSwitchState] = useState(false);

    const toggleHandler = () => {
        let toggle = document.querySelector(".toggle");

        if(switchState)
        {
            toggle.style.transform = "translateX(0px)";
            toggle.style.backgroundColor = "#000";
            toggle.setAttribute('class','toggle fa fa-moon-o');
        }
        else
        {
            toggle.style.backgroundColor = "#0077FF";
            toggle.setAttribute('class','toggle');
            toggle.style.transform = "translateX(-40px)";
        }

        setSwitchState(!switchState);
    }

    return (
        <div className="titlebar">
            <h1>Fill Your Trolly</h1>
            <div className="helper-holder">
                <span className="switch" onClick={() => toggleHandler()}>
                    <i className="toggle"></i>
                </span>
                <i className="fa fa-user fa-2x" aria-hidden="true"></i>
                <i className="fa fa-heart fa-2x" aria-hidden="true"></i>
            </div>
        </div>
    );
}