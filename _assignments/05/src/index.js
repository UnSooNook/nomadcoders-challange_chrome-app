// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

// You're gonna need this
const NINE_HOURS_MILLISECONDS = 32400000;

const timer = document.querySelector(".timer");

function getTime() {
    // Don't delete this.
    const xmasDay = new Date("2020-12-24:00:00:00+0900");
    const currentDay = new Date();
    const difDay = new Date(xmasDay - currentDay - NINE_HOURS_MILLISECONDS);
    const date = Math.floor((xmasDay - currentDay) / (24 * 60 * 60 * 1000));
    const hour = difDay.getHours();
    const min = difDay.getMinutes();
    const sec = difDay.getSeconds();

    timer.innerText = `${date}D ${hour < 10 ? `0${hour}` : hour}h ${
        min < 10 ? `0${min}` : min
    }m ${sec < 10 ? `0${sec}` : sec}s`;
}

function showClock() {
    getTime();
    setInterval(getTime, 1000);
}

function init() {
    showClock();
}

init();
