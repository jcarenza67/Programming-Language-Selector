window.addEventListener("load", function () {
  const submitBtn = document.getElementById("submit");

  submitBtn.addEventListener("click", function(event) {
    event.preventDefault();
    
    const answer1 = document.getElementById("dropdown1").value;
    const answer2 = document.getElementById("dropdown2").value;
    const answer3 = document.getElementById("dropdown3").value;
    const answer4 = document.getElementById("dropdown4").value;
    const answer5 = document.getElementById("dropdown5").value;
    

    let result;
     if (answer1 === "1" && answer2 === "4" && answer3 === "7" && answer4 === "10" && answer5 === "13") {
      result = "Javascript";
    } else if (answer1 === "3" && answer2 === "6" && answer3 === "9" && answer4 === "12" && answer5 === "15") {
      result = "Rust";
    } else {
      result = "Python";
    }
    

    const resultDiv = document.getElementById("answer");
    resultDiv.textContent = result;
  });
});

