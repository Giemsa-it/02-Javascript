// Google search knap
function search() {
    const query = document.querySelector('.search-bar').value;
    if (query) {
        // Sætter min query ind efter googles url, så det videresender mig til det jeg har søgt på.
        window.location.href = `https://www.google.com/search?q=${query}`;
    }
    // Ellers giver den enn advarelse
    else {
        alert("Please enter a search query");
    }
}

// function til "Jeg prøver lykken" knap
function feelingLucky() {
    // videresender brugen til en min ynglings yt kanal :D
    window.location.href = "https://www.youtube.com/@fromthebottom4927/videos";
}
