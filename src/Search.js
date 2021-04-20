import { useEffect } from "react";

export function Search() {
    let isFocus = false;

    useEffect(() => {
        document.querySelector("#search-input").addEventListener("focus", () => isFocus = true);
        document.querySelector("#search-input").addEventListener("focusout", () => isFocus = false);

        document.addEventListener('keypress', (e) => {
            if (isFocus && e.key === "Enter")
            {

            }
        })
    },[]);

    return (
        <div className="search">
            <input type="text" id="search-input" placeholder="Search" />
            <i className="fa fa-search"></i>
        </div>
    );
}