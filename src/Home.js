import { Product } from "./Product";

export function Home() {
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
        <div className="home">
            {
                // products.map((product, key) => {
                //     return(
                //         <Product
                //           imgLink={product.imgLink}
                //           title={product.title}
                //           price={product.price}
                //           rating={product.rating}
                //           totalRating={product.totalRating}
                //         />
                //     );
                // })
            }
        </div>
    );
}