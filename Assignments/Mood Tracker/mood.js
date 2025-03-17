const moodElements = document.querySelectorAll(".mood")
const historyList = document.getElementById("history");
const clearBtn = document.getElementById("Clear");


function updateClearButtonVisibility() {
    const storedHistory = JSON.parse(localStorage.getItem("moodHistory")) || [];
    clearBtn.style.display = storedHistory.length > 0 ? "block" : "none";
}
clearBtn.addEventListener("click", () => {
    localStorage.removeItem("moodHistory");
    historyList.innerHTML = "";
    updateClearButtonVisibility();
})


moodElements.forEach(mood => {
    mood.addEventListener("click", () => {
        const emoji = mood.getAttribute("data-mood");
        const moodText = mood.getAttribute("emotion");
        const finalObj = {date: new Date().toLocaleDateString(), mood: emoji, text: moodText} 

        const storedHistory = JSON.parse(localStorage.getItem("moodHistory")) || [];
        storedHistory.push(finalObj);
        localStorage.setItem("moodHistory", JSON.stringify(storedHistory));

        
        const listItem = createHistoryItem(finalObj);
        historyList.appendChild(listItem);
        updateClearButtonVisibility();  
    })
})


function loadHistory() {
    const storedHistory = JSON.parse(localStorage.getItem("moodHistory")) || [];
    historyList.innerHTML = "";

    storedHistory.forEach(finalObj => {
        const listItem = createHistoryItem(finalObj);
        historyList.appendChild(listItem);
    });
}

function createHistoryItem(finalObj) {
    const listItem = document.createElement("li");

    const dateSpan = document.createElement("span");
    dateSpan.textContent = finalObj.date;

    const moodSpan = document.createElement("span");
    moodSpan.textContent = `${finalObj.text} ${finalObj.mood}`;

    listItem.appendChild(dateSpan);
    listItem.appendChild(moodSpan);

    return listItem;
}

loadHistory();
updateClearButtonVisibility();