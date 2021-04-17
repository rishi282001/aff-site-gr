import { IconButton } from "@material-ui/core";
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
            toggle.style.transform = "translateX(-30px)";
        }

        setSwitchState(!switchState);
    }

    return (
        <div className="titlebar">
            <h2>Fill Your Trolly</h2>
            <div className="helper-holder" >
                <IconButton>
                    <span className="switch" onClick={() => toggleHandler()}>
                        <i className="toggle"></i>
                    </span>
                </IconButton>
                <IconButton style={{padding: "10px"}}>
                    <i className="fa fa-user" aria-hidden="true"></i>
                </IconButton>
                <IconButton style={{padding: "10px"}}>
                    <i className="fa fa-heart" aria-hidden="true"></i>
                </IconButton>
            </div>
        </div>
    );
}