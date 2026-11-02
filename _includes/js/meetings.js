// Weekly community meeting, Tuesdays at 15:00 UTC. That is the same
// date in the US and in Europe, so the holidays below are UTC dates.
var firstMeeting = Date.UTC(2018, 3, 3, 15);
var week = 7 * 24 * 60 * 60 * 1000;
var hour = 60 * 60 * 1000;

// No meeting on these days, as "MM-DD" every year or "YYYY-MM-DD" once.
var holidays = [
        "12-24", // Christmas Eve
        "12-25", // Christmas Day
        "12-26", // Boxing Day
        "12-31", // New Years Eve
        "01-01", // New Years Day
        "01-06", // Epiphany
        "07-04", // Fourth of July
        "2026-12-08", // SPDK Developer Meetup
];

function isHoliday(date) {
        var day = date.toISOString().slice(0, 10);

        return holidays.includes(day) || holidays.includes(day.slice(5));
}

function formatDate(date) {
        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', timeZoneName: 'short', hour: 'numeric', minute: 'numeric' };
        return date.toLocaleDateString(undefined, options);
}

// Show a meeting until an hour after it starts. Step in UTC, so daylight
// saving time in the reader's time zone does not move the meetings.
var cutoff = Date.now() - hour;
var meetingDate = new Date(firstMeeting);

while (meetingDate.getTime() < cutoff || isHoliday(meetingDate)) {
        meetingDate = new Date(meetingDate.getTime() + week);
}

document.getElementById("community-mtg").textContent = formatDate(meetingDate);
