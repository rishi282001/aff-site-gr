import IconButton from '@material-ui/core/IconButton';
import {useEffect} from "react";

export function Navbar() {
    let count = 0;
    let overlay = document.createElement("div");
    overlay.setAttribute("class","overlay");
    overlay.addEventListener("click",() => handleSlide());

    // useEffect(() => {
    //     window.addEventListener('resize',() => {
           
    //     });
    // },[]);

    function handleSlide() {
        let navContent = document.querySelector(".nav-content");
        let barsButton = document.querySelector("#bars-btn");
        let body = document.getElementById("root");
        count++;

        if(count % 2 !== 0)
        {
           navContent.style.display = "block";
           body.appendChild(overlay);

           setTimeout(() => {
                navContent.style.transform = "translateX(0)";
                barsButton.style.transform = "translateX(220px)";
                setTimeout(() => {
                    if(navContent.style.display === "block")
                        barsButton.setAttribute("class","fa fa-times");
                }, 500);
           }, 200);
        }
        else 
        {
            body.removeChild(overlay);
            barsButton.setAttribute("class","fa fa-bars");
            navContent.style.transform = "translateX(-100vw)";
            barsButton.style.transform = "translateX(0)";
            setTimeout(() => {
                navContent.style.display = "none";
           }, 600);
        }
    }

    return (
        <div className="navbar">
            <IconButton onClick={() => handleSlide()}>
                <i id="bars-btn" className="fa fa-bars" aria-hidden="true"></i>
            </IconButton>

            <div className="nav-content">
                <div className="nav-items">
                    <div className="icon-holder">
                        <IconButton>
                            <div className="icon-holder">
                                <div>
                                    <i className="fa fa-male fa-2x" aria-hidden="true"></i>
                                    <i className="fa fa-female fa-2x" aria-hidden="true"></i>
                                </div>
                                <span>{"Men & Women"}</span>
                            </div>
                        </IconButton>
                    </div>

                    <div className="icon-holder">
                        <IconButton>
                            <div className="icon-holder">
                                <i className="fa fa-mobile fa-2x" aria-hidden="true"></i>
                                <span>{"Mobiles"}</span>
                            </div>
                        </IconButton>
                    </div>

                    <div className="icon-holder">
                        <IconButton>
                            <div className="icon-holder">
                                <i className="fa fa-laptop fa-2x" aria-hidden="true"></i>
                                <span>{"Laptops"}</span>
                            </div>
                        </IconButton>
                    </div>

                    <div className="icon-holder">
                        <IconButton>
                            <div className="icon-holder">
                                <i className="fa fa-television fa-2x" aria-hidden="true"></i>
                                <span>{"Appliances"}</span>
                            </div>
                        </IconButton>
                    </div>

                    <div className="icon-holder">
                        <IconButton>
                            <div className="icon-holder">
                                <i className="fa fa-heartbeat fa-2x" aria-hidden="true"></i>
                                <span>{"Fitness"}</span>
                            </div>
                        </IconButton>  
                    </div>
                </div>
            </div>
        </div>
    );
}