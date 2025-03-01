document.getElementById("addUserForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("User added successfully!");
    closeAddUserModal();
});

function openAddUserModal() {
    document.getElementById("addUserModal").style.display = "block";
}

function closeAddUserModal() {
    document.getElementById("addUserModal").style.display = "none";
}

document.getElementById("settingsForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const aiSensitivity = document.getElementById("aiSensitivity").value;
    const alertMethod = document.getElementById("alertMethod").value;
    const autoLogging = document.getElementById("autoLogging").checked;

    const settings = {
        aiSensitivity,
        alertMethod,
        autoLogging
    };

    localStorage.setItem("secureVisionSettings", JSON.stringify(settings));
    alert("Settings saved successfully!");
});