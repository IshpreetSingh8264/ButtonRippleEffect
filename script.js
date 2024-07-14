document.querySelectorAll(".ripple").forEach((button) => {
    button.addEventListener("click", function (e) {
        const circle = document.createElement("span");
        circle.classList.add("circle");

        const rect = button.getBoundingClientRect();
        const xInside = e.clientX - rect.left;
        const yInside = e.clientY - rect.top;

        circle.style.top = `${yInside}px`;
        circle.style.left = `${xInside}px`;

        this.appendChild(circle);

        setTimeout(() => circle.remove(), 600);
    });
});
