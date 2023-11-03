// number of visits for Discovery Page only

const visitsDisplay = document.querySelector("#num-visits");
let dateToday = new Date();

let numVisits = localStorage.getItem("numVisits") || 0;

const msToDays = 86400000;

let lastVisit = (localStorage.getItem("lastVisit")) || dateToday;
let lastVisitToDate = new Date(lastVisit);
let daysBetweenVisit = (dateToday.getTime() - lastVisitToDate.getTime()) / msToDays;

function displayNumVisits (visitsDisplay, numVisits) {
    if (!visitsDisplay) {
        return;
    } else {
        if (numVisits != 0) {
            visitsDisplay.innerHTML = `${numVisits} | Days since last visit: ${daysBetweenVisit.toFixed(0)}`;
        } else {
            visitsDisplay.textContent = `This is your first visit. 🎉 Welcome!`;
        }
        numVisits++;

        localStorage.setItem("lastVisit", dateToday);
        localStorage.setItem("numVisits", numVisits);
    }
}

displayNumVisits(visitsDisplay, numVisits);