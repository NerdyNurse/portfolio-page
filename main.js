const showDetails = (details) => {
    const allDetails = document.getElementsByClassName("details");

    // Hide all details elements
    Array.from(allDetails).forEach(element => {
        element.style.display = "none";
    });

    const selectedProjectDetails = document.getElementById(details);

    selectedProjectDetails.style.display = "block"

    
}

document.getElementById("project-1").addEventListener("click", () => showDetails("project-details-1"));

document.getElementById("project-2").addEventListener("click", () => showDetails("project-details-2"));
