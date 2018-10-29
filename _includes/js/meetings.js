var euroDate = new Date(Date.UTC(2018, 3, 3, 15, 0, 0, 0));
var asiaDate = new Date(Date.UTC(2018, 3, 12, 4, 0, 0, 0));
var asiaBugDate = new Date(Date.UTC(2018, 3, 19, 4, 30, 0, 0));

function formatDate(date) {
        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', timeZoneName: 'short', hour: 'numeric', minute: 'numeric' };
        return date.toLocaleDateString(undefined, options);
}

var currentDate = new Date();
currentDate.setHours(currentDate.getHours() - 1);

while (euroDate < currentDate) {
        euroDate.setDate(euroDate.getDate() + 14);
}

while (asiaDate < currentDate) {
        asiaDate.setDate(asiaDate.getDate() + 14);
}

while (asiaBugDate < currentDate) {
        asiaBugDate.setDate(asiaBugDate.getDate() + 14);
}

euroDate = new Date(Date.UTC(euroDate.getFullYear(), euroDate.getMonth(), euroDate.getDate(), 15, 0, 0, 0));
//asiaDate = new Date(Date.UTC(asiaDate.getYear(), asiaDate.getMonth(), asiaDate.getDate(), 4, 0, 0, 0));
//asiaBugDate = new Date(Date.UTC(asiaBugDate.getYear(), asiaBugDate().getMonth(), asiaBugDate().getDate(), 4, 30, 0, 0));

document.getElementById("euro-mtg").textContent = formatDate(euroDate);
document.getElementById("asia-mtg").textContent = formatDate(asiaDate);
document.getElementById("asia-bug-mtg").textContent = formatDate(asiaBugDate);
