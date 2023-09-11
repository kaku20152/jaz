$(document).ready(function() {
    $(".read-more").click(function() {
        var section = $(this).closest(".section");
        var paragraph = section.find("p");
        
        if (paragraph.is(":hidden")) {
            paragraph.slideDown();
            $(this).text("Read Less");
        } else {
            paragraph.slideUp();
            $(this).text("Read More");
        }
    });
});
document.querySelector(".quiz-button").addEventListener("click", function () {
    const correctAnswers = ["correct", "correct", "correct", "correct", "correct"];
    const userAnswers = [];

    const questions = document.querySelectorAll(".question");

    questions.forEach((question, index) => {
        const selectedAnswer = question.querySelector("input:checked");

        if (selectedAnswer) {
            userAnswers.push(selectedAnswer.value);
        }
    });

    const score = userAnswers.filter((answer, index) => answer === correctAnswers[index]).length;

    document.querySelector(".quiz-results").style.display = "block";
    document.getElementById("score").textContent = score;
});

