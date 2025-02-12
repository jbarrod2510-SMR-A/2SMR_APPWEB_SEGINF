document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector(".boton");
    const title = document.querySelector(".titulo");

    function getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    button.addEventListener("click", function () {
        const newColor = getRandomColor();
        document.body.style.backgroundColor = newColor;
        title.textContent = "Background color: " + newColor;
        button.style.backgroundColor = newColor;
    });
});