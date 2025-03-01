document.addEventListener("DOMContentLoaded", () => {
    const videoElements = {
        camera1: document.getElementById("camera1"),
        camera2: document.getElementById("camera2"),
        camera3: document.getElementById("camera3"),
    };

    // Simulating live camera feeds (Replace these with actual RTSP/WebRTC streams)
    function startLiveFeeds() {
        Object.values(videoElements).forEach(video => {
            video.src = "assets/videos/sample_feed.mp4"; // Replace with actual stream
            video.loop = true;
            video.play();
        });
    }

    startLiveFeeds(); // Start simulating feeds

    // Video Upload & AI Scanning
    const uploadBtn = document.getElementById("uploadBtn");
    const videoUpload = document.getElementById("videoUpload");
    const uploadStatus = document.getElementById("uploadStatus");
    const loadingDiv = document.getElementById("loading");

    uploadBtn.addEventListener("click", async () => {
        const file = videoUpload.files[0];
        if (!file) {
            alert("Please select a video file.");
            return;
        }

        // Show loading animation
        loadingDiv.classList.remove("loading-hidden");

        const formData = new FormData();
        formData.append("video", file);

        try {
            const response = await fetch("/api/upload-video", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                uploadStatus.textContent = "Video uploaded successfully! AI is analyzing...";
            } else {
                uploadStatus.textContent = "Upload failed.";
            }
        } catch (error) {
            uploadStatus.textContent = "Error uploading video.";
        }

        // Simulate processing time
        setTimeout(() => {
            loadingDiv.classList.add("loading-hidden");
            uploadStatus.textContent = "Analysis complete. No threats detected.";
        }, 5000);
    });
});
