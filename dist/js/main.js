const closeBtn = document.querySelector("button.close");

const warningDiv = document.querySelector(".warning-div")

closeBtn.addEventListener("click", () => {
    warningDiv.classList.add("display-hide");
});


// code for go to github to this project


const goToGithubSection = document.querySelector(".go_to_github");
const goToGithubBtn = document.querySelector(".go_to_github_btn");
const githubExitBtn = document.querySelector(".exitBtn");

githubExitBtn.addEventListener("click", exitGithubSection)


function exitGithubSection() {
	goToGithubSection.classList.add("display_hide");

	setTimeout(() => {
		goToGithubBtn.classList.remove("opacity-0")
		goToGithubBtn.classList.add("opacity-1")
	}, 5000)

}