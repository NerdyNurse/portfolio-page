const showDetails = (details) => {
    const allDetails = document.getElementsByClassName("details");

    // Hide all details elements
    Array.from(allDetails).forEach(element => {
        element.style.display = "none";
    });

    const selectedProjectDetails = document.getElementById(details);

    selectedProjectDetails.style.display = "block"

    const allProjects = document.getElementsByClassName("project");
    Array.from(allProjects).forEach(project => {
        project.style.backgroundColor = "#C6E2B4"; 
    });

    currentProject = event.currentTarget;

    currentProject.style.backgroundColor = "#A9D18E";

    
}

document.getElementById("project-1").addEventListener("click", (event) => showDetails("project-details-1"));

document.getElementById("project-2").addEventListener("click", (event) => showDetails("project-details-2"));
