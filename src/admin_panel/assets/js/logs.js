document.addEventListener("DOMContentLoaded", function () {
    const logsTableBody = document.querySelector("#logsTable tbody");

    // Simulated log data (Replace with API call if backend is connected)
    const logs = [
        { timestamp: "2025-02-24 14:30", event: "Weapon Detected", severity: "High", details: "A firearm detected in Lecture Hall A." },
        { timestamp: "2025-02-24 13:15", event: "Unauthorized Access", severity: "Medium", details: "Suspicious movement near Admin Block." },
        { timestamp: "2025-02-24 12:45", event: "System Alert", severity: "Low", details: "AI model updated successfully." }
    ];

    logs.forEach(log => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${log.timestamp}</td>
            <td>${log.event}</td>
            <td>${log.severity}</td>
            <td>${log.details}</td>
        `;
        logsTableBody.appendChild(row);
    });
});
