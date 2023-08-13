// Wait for the page to fully load
window.addEventListener('load', function () {
    // Hide the loading screen
    const loadingScreen = document.querySelector('.loading-screen');
    const mainContent = document.querySelector('.main-content');

    loadingScreen.style.display = 'none';
    mainContent.style.display = 'block';
});
