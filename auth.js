// Пароль для доступа
const PASSWORD = "2655"; // Замените на ваш пароль

// Проверка пароля
function checkPassword() {
    const passwordInput = document.getElementById("password-input").value;
    const errorMessage = document.getElementById("error-message");

    if (passwordInput === PASSWORD) {
        document.getElementById("login-container").style.display = "none";
        document.getElementById("content-container").style.display = "block";
        startSessionTimer(); // Запуск счетчика сессии
    } else {
        errorMessage.style.display = "block";
    }
}

// Счетчик времени сессии
function startSessionTimer() {
    let seconds = 0;
    const timerElement = document.getElementById("session-timer");

    const timer = setInterval(() => {
        seconds++;
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        timerElement.textContent = `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }, 1000);
}