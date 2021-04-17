import { IconButton } from "@material-ui/core"

export function Profile() {
    return (
        <div className="profile">
            <div className="holder-1">
                <IconButton>
                    <div className="user">
                        <i class="fa fa-user" aria-hidden="true"></i>
                        <h3>User</h3>
                    </div>
                </IconButton>

                <IconButton>
                    <div className="records">
                        <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                        <h3>Buy records</h3>
                    </div>
                </IconButton>
              
            </div>

            <div className="holder-2">
                <IconButton>
                    <div className="wishlist">
                        <i class="fa fa-heart" aria-hidden="true"></i>
                        <h3>Wishlist</h3>
                    </div>
                </IconButton>
               
               <IconButton>
                <div className="signout">
                        <i class="fa fa-power-off" aria-hidden="true"></i>
                        <h3>signout</h3>
                    </div>
               </IconButton>
                
            </div>
        </div>

    );
}