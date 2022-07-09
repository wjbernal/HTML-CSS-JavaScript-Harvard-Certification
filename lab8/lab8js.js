
/* “Part 1” a multiple-choice trivia question to be answered using buttons*/
var x = document.querySelectorAll("button[name='btnPart1']");
for (i = 0; i < x.length; i++)
{
    x[i].addEventListener("click", function(){
    //gets the first Div ancestor to the current pressed button
    parentDiv = this.parentNode;

    //console.log("Parent is: ", parentDiv);

    childrn = parentDiv.children;

    //console.log("Children are: ", childrn);

    var paragraphAnswer;

    // Clean the buttons background-color and paragraph answer
    for(i=0; i< childrn.length; i++)
    {
        if (childrn[i].nodeName == "BUTTON")
        {
            childrn[i].classList.remove("buttoncorrect", "buttonwrong");
        }

        if (childrn[i].nodeName == "P")
        {
            paragraphAnswer = childrn[i];
            paragraphAnswer.innerHTML = ""
            paragraphAnswer.classList.remove("correct-Answer", "incorrect-Answer");
        }
    }

    //show result
    // gets the value for the current pressed button
    value = this.getAttribute("value");
    if (value == "1")
    {
        this.classList.add('buttoncorrect');
        paragraphAnswer.innerHTML = "Correct!"
        paragraphAnswer.classList.add("correct-Answer");
    }
    else
    {
        this.classList.add('buttonwrong');
        paragraphAnswer.innerHTML = "incorrect!"
        paragraphAnswer.classList.add("incorrect-Answer");
    }
});


}

/* Part 2”  text-based free response question*/
var y = document.querySelectorAll("button[name='btnPart2']")
for(j=0; j<y.length; j++)
{
    y[j].addEventListener("click", function(){
        //find siblings: a input text box and a P alert.
        parentNd = this.parentNode;
        console.log(parentNd);

        inputText = this.parentNode.querySelector("input");
        console.log("inputText:", inputText);

        answerValue = inputText.value.toLowerCase();
        console.log("answerValue: ",answerValue);

        correctAnswer = "";

        pAlert = this.parentNode.querySelector("P");
        console.log("pAlert: ", pAlert);
        buttonValue = this.getAttribute("value");

        if (buttonValue == "1")
        {
            correctAnswer = "cat";
        }
        if (buttonValue == "2")
        {
            correctAnswer = "michael jackson";
        }
        if (buttonValue == "3")
        {
            correctAnswer = "orange";
        }

        if (answerValue == correctAnswer)
        {
            pAlert.innerHTML = "Correct!";
            inputText.classList.add("correct-answer");
            pAlert.classList.add("correct-Answer");

            inputText.classList.remove("incorrect-Answer");
            pAlert.classList.remove("incorrect-Answer");
        }
        else
        {
            pAlert.innerHTML = "incorrect!";
            inputText.classList.remove("correct-Answer");
            pAlert.classList.remove("correct-Answer");

            inputText.classList.add("incorrect-Answer");
            pAlert.classList.add("incorrect-Answer");
        }

    });
}

