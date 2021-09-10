const closeBtn = document.querySelector("button.close");

const warningDiv = document.querySelector(".warning-div")

closeBtn.addEventListener("click", () => {
    warningDiv.classList.add("display-hide");
});