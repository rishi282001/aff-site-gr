import Button from "@material-ui/core/Button";

export function Product(props) {
    return (
        <div className="product">
            <div className="product-details">
                <div>
                    <img src="image.png" />
                </div>
                <div className="item">
                    <span className="product-title"> {props.title} </span>
                    <span className="product-price"> {props.price} </span>
                    <span className="product-rating"> {props.rating} </span>
                    <span className="product-totalRating"> {props.totalRating} </span>
                </div>
                <div className="button-holder">
                    <Button
                        id="buy-now-btn"
                        variant="contained"
                        size="medium"
                        color="primary"
                    >
                        Buy Now
                    </Button>
                    <Button
                        id="add-to-wishist-btn"
                        variant="contained"
                        size="medium"
                        color="primary"
                        style={{background: "#FF7171", color: "#FFF"}}
                    >
                        Add to wishlist
                    </Button>
                </div>
            </div>
        </div>
    );
}