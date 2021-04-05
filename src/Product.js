import Button from "@material-ui/core/Button";

export function Product(props) {
    return (
        <center>
            <div className="product">
                <div className="product-details">
                    <div className="product-details-1">
                        <img src="image.png" />
                        <div className="item">
                            <span class="product-title"> {props.title} </span>
                            <span class="product-price"> {props.price} </span>
                            <span class="product-rating"> {props.rating} </span>
                            <span class="product-totalRating"> {props.totalRating} </span>
                        </div>
                    </div>

                    <div className="product-details-2">
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
                            >
                                Add to wishlist
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </center>
    );
}