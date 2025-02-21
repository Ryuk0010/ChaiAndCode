let writeReview = document.getElementById("writeReview");
let nameInput = document.getElementById("nameuser"); 
let review = document.getElementById("review");
let postBtn = document.querySelector("#button1 button"); 
let stars = document.querySelectorAll("#stars span");


postBtn.addEventListener("click", function () {
    let reviewText = writeReview.value.trim(); 
    let userNameText = nameInput.value.trim(); 

    if (reviewText !== "" && userNameText !== "") {
        let newDiv = document.createElement("div"); 
        newDiv.classList.add("review-item"); 

        let userName = document.createElement("div"); 
        userName.classList.add("review-user"); 
        userName.innerText = `👤 ${userNameText}`; 

        let textDiv = document.createElement("div"); 
        textDiv.classList.add("review-text"); 
        textDiv.innerText = reviewText; 

        let starDiv = document.createElement("div"); 
        starDiv.classList.add("review-stars"); 


        let starCount = 0;
        stars.forEach(star => {
            if (star.style.color === "rgb(255, 166, 0)") starCount++;
        });

        starDiv.innerText = "⭐".repeat(starCount) || "No rating given"; 


        newDiv.appendChild(userName);
        newDiv.appendChild(textDiv);
        newDiv.appendChild(starDiv);
        review.appendChild(newDiv); 


        writeReview.value = ""; 
        nameInput.value = "";
    } else {
        alert("Please enter both your name and a review!");
    }
});


stars.forEach((star, index) => {
    star.addEventListener("click", function () {
        let isHighlighted = star.style.color === "rgb(255, 166, 0)";

        stars.forEach((s, i) => {
            s.style.color = i <= index && !isHighlighted ? "rgb(255, 166, 0)" : "black";
        });
    });
});
