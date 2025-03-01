document.addEventListener("DOMContentLoaded", function () {
    const logsTable = document.getElementById("logsTable").getElementsByTagName("tbody")[0];

    const logs = [
        { timestamp: "2024-02-24 14:23", event: "Weapon Detected", severity: "High", location: "Main Gate", details: "A firearm detected near the university entrance." },
        { timestamp: "2024-02-24 14:45", event: "Suspicious Activity", severity: "Medium", location: "Library", details: "Unusual movement detected near restricted access area." },
        { timestamp: "2024-02-24 15:00", event: "Unauthorized Access", severity: "Low", location: "Dormitory Block B", details: "An unrecognized individual attempted to access a secured area." },
        { timestamp: "2024-02-24 15:20", event: "Knife Detected", severity: "High", location: "Cafeteria", details: "AI identified a knife in a crowded location." }
    ];

    logs.forEach(log => {
        const row = logsTable.insertRow();
        row.innerHTML = `
            <td>${log.timestamp}</td>
            <td>${log.event}</td>
            <td>${log.severity}</td>
            <td>${log.location}</td>
            <td>${log.details}</td>
        `;
    });
});
