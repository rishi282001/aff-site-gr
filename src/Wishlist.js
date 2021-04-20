import { Product } from "./Product";

export function Wishlist () {
    const products = [
        {
            imgLink: "",
            title: "Redmi note 9 pro",
            price: "12,000",
            rating: "3.0 of 5.0 stars",
            totalRating: "(2000)"
        },
        {
            imgLink: "",
            title: "Redmi note 9 pro",
            price: "12,000",
            rating: "3.0 of 5.0 stars",
            totalRating: "(2000)"
        },
        {
            imgLink: "",
            title: "Redmi note 9 pro",
            price: "12,000",
            rating: "3.0 of 5.0 stars",
            totalRating: "(2000)"
        },
    ]

    return(
        <div className="wishlist">
            <div className="heart-holder">
                <i className="fa fa-heart" style={{color: "#fff"}}></i>
                <i className="fa fa-heart" style={{color: "#9EEBE2"}}></i>
            </div>
            <h1>My wishlist</h1>
            {
                products.map((product, key) => {
                    return(
                        <Product
                          imgLink={product.imgLink}
                          title={product.title}
                          price={product.price}
                          rating={product.rating}
                          totalRating={product.totalRating}
                          button1={"Buy"}
                          button2={"Remove"}
                        />
                    );
                })
            }
        </div>
    );
}