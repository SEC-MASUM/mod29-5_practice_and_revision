console.log("clicked");
// 1. H2 title color change
const sectionTitles = document.getElementsByClassName("section-heading");
// console.log(sectionTitles);
for (let i = 0; i < sectionTitles.length; i++) {
  console.log((sectionTitles[i].style.color = "#8A39E1"));
}

// 2. Every Player's background color change
const playeDiv = document.querySelectorAll(".player h3");
const playeImg = document.querySelectorAll(".player > img");

// console.log(sectionTitles);
for (let i = 0; i < playeDiv.length; i++) {
  console.log((playeDiv[i].style.backgroundColor = "rgba(242, 255, 233,1)"));
}

// 3. Add list item in ul element
const reviewButton = document.getElementById("review-button");
const reviewList = document.getElementById("review");
let reviewCount = 3;
reviewButton.addEventListener("click", function () {
  reviewCount = reviewCount + 1;
  const li = document.createElement("li");
  reviewList
    .appendChild(li)
    .appendChild((li.innerText = "Review " + reviewCount));
  // console.log(reviewList);
});

// 4. count number from 0 to 5 using button
const inputField = document.getElementById("number-count");
const countButton = document.getElementById("count-button");
countButton.addEventListener("click", function () {
  console.log("count clicked");

  if (inputField.value < 5) {
    inputField.value = Number.parseInt(inputField.value) + 1;
    console.log(Number.parseInt(inputField.value));
    // 5. count button become disabled when inputfield value is 5
    if (inputField.value == 5) {
      console.log("disabled");
      countButton.setAttribute("disabled", false);
      countButton.style.backgroundColor = "#6c6b6e";
      countButton.style.cursor = "not-allowed";
    }
  }
});
