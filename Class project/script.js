// Show welcome message on Home Page
document.addEventListener("DOMContentLoaded", function () {
    let learnMoreBtn = document.getElementById("learnMoreBtn");
    if (learnMoreBtn) {
        learnMoreBtn.addEventListener("click", function () {
            alert("Welcome to CareerHub! Start exploring today.");
        });
    }

    // Job Listings Page: Filter jobs dynamically
    let searchInput = document.getElementById("search");
    if (searchInput) {
        searchInput.addEventListener("keyup", function () {
            let input = searchInput.value.toLowerCase();
            let jobs = document.getElementById("jobList").getElementsByTagName("li");

            for (let i = 0; i < jobs.length; i++) {
                let job = jobs[i].textContent.toLowerCase();
                jobs[i].style.display = job.includes(input) ? "" : "none";
            }
        });
    }

    // Contact Page: Handle form submission
    let contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();
            document.getElementById("response").innerText = "Thank you for your message!";
        });
    }
});
