import IconButton from '@material-ui/core/IconButton';

export function Navbar() {
    return(
        <div className="navbar">
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
    );
}