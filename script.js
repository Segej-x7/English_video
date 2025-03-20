document.addEventListener("DOMContentLoaded", function() {
    const lessonsList = document.getElementById("lessons");
    const videoContainer = document.getElementById("video-container");
    const lessonTitle = document.getElementById("lesson-title");
    const videoIframe = document.getElementById("video-iframe");

    // Заполняем список уроков
    videos.forEach((video, index) => {
        const li = document.createElement("li");
        li.textContent = video.title;
        li.addEventListener("click", () => {
            lessonTitle.textContent = video.title;
            videoIframe.src = video.src;
            videoContainer.style.display = "block";
        });
        lessonsList.appendChild(li);
    });
});