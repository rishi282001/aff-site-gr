export function popper(message) {
    let root = document.getElementById("root");
    let popup = document.createElement("div");
    popup.setAttribute("class","popup");
    popup.textContent = message;
    root.appendChild(popup);

    setTimeout(() => {
        popup.style.transform = "translateY(40px)";
    }, 500);

    setTimeout(() => {
        popup.style.transform = "translateY(-100px)";

        setTimeout(() => {
            root.removeChild(popup);    
        }, 500);
    }, 2800);
}