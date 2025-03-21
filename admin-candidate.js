// Function to populate section dropdown based on year and position
document.getElementById("year").addEventListener("change", function() {
    const year = this.value;
    const position = document.getElementById("position").value;
    const sectionDropdown = document.getElementById("section");
    let sections = [];

    if (position === "CR" || position === "DR") {
        if (year === "1st") {
            sections = ["Natural Sciences", "Engineering Sciences", "Economic Sciences"];
        } else if (year === "2nd") {
            sections = ["Bio", "Chm", "Maths", "EES", "DSE", "Phy", "Engineering Sciences", "Economic Sciences"];
        } else if (year === "3rd" || year === "4th" || year === "5th") {
            sections = ["Bio", "Chm", "Maths", "EES", "DSE", "Phy", "Engineering Sciences", "Economic Sciences"];
        }
    } else if (position === "Mess" || position === "Hostel") {
        sections = ["Girls Hostel 1", "Girls Hostel 2", "Boys Hostel 1", "Boys Hostel 2"];
    }

    // Clear previous options and populate new ones
    sectionDropdown.innerHTML = '<option value="">Select Section</option>';
    sections.forEach(section => {
        const option = document.createElement("option");
        option.value = section;
        option.textContent = section;
        sectionDropdown.appendChild(option);
    });
});

// Handle form submission
document.getElementById("addCandidateForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission for testing

    const position = document.getElementById("position").value;
    const year = document.getElementById("year").value;
    const section = document.getElementById("section").value;
    const candidateName = document.getElementById("candidate-name").value;
    const rollNo = document.getElementById("roll-no").value;

    if (position && year && section && candidateName && rollNo) {
        // Process form and send data to backend here
        alert("Candidate added successfully!");
        // You can clear the form here if needed
    } else {
        document.getElementById("error-message").textContent = "All fields are required!";
    }
});