document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector(".click");
    const backgroundText = document.querySelector(".background");
    const body = document.body;

    btn.addEventListener("click", () => {
        let hexColor = generateHexColor();
        body.style.backgroundColor = hexColor;
        backgroundText.innerHTML = `Background Color: <span style="color: ${hexColor}; font-weight: bold;">${hexColor}</span>`;
    });

    function generateHexColor() {
        let hex = "#";
        const hexCharacters = "0123456789ABCDEF";

        for (let i = 0; i < 6; i++) {
            hex += hexCharacters[Math.floor(Math.random() * 16)];
        }

        return hex;
    }
});
