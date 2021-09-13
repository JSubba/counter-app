let welcomeEl = document.getElementById("welcome-el");
let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");

count = 0;

function increment() {
    count += 1;
    countEl.innerText = count;
}

function decrement() {
    count -= 1;
    countEl.innerText = count;
}

function save() {
    let countStr = `${count} | `;
    saveEl.textContent += countStr;
    console.log(count);
    countEl.innerText = 0;
    count = 0;
}

function reset() {
    saveEl.innerHTML = "";
    saveEl.innerHTML = "Saved Entries Cleared!";
    setTimeout(function () {
        window.location.reload();
    }, 3000);
}
