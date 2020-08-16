// declared on "menu.js"
// const clockBtn = document.querySelector(".menu-block__clock"),
//     todoBtn = document.querySelector(".menu-block__todo"),
//     weatherBtn = document.querySelector(".menu-block__weather");

const clockContent = document.querySelector(".contents-clock"),
    todoContent = document.querySelector(".contents-todo");

const contentList = [clockContent, todoContent];

function selectContents(event) {
    console.log(event);
}

function showOffAll() {
    clockContent.classList.remove(SHOWING_OFF);
    todoContent.classList.remove(SHOWING_OFF);
    clockContent.classList.add(SHOWING_OFF);
    todoContent.classList.add(SHOWING_OFF);
}

function loadContent() {
    let loadedContent = localStorage.getItem(MENU_LS);
    if (loadedContent === null) {
        loadedContent = DEFAULT_MENU;
    }
    showOffAll();
    contentList[parseInt(loadedContent)].classList.remove(SHOWING_OFF);
}

function init() {
    loadContent();
    window.addEventListener(
        "storage",
        function (evt) {
            console.log(evt);
        },
        false
    );
}

init();
