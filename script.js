const questions = [
    "Hey Aishuuu… 💖",
    "Do you feel comfortable and happy when you talk to me? 🌸",
    "Do you believe small moments can mean a lot when shared with the right person? ✨",
    "Would you like someone who genuinely cares about you and chooses you every day? 💓",
    "Would you like to take this beautiful step with me… and be my Valentine? ❤️"
];

let index = 0;

const questionDiv = document.getElementById("question");
const noBtn = document.getElementById("noBtn");
const buttonsDiv = document.querySelector(".buttons");

function nextQuestion() {
    index++;

    if (index < questions.length) {
        questionDiv.classList.remove("fade");
        void questionDiv.offsetWidth;
        questionDiv.classList.add("fade");
        questionDiv.innerText = questions[index];
    } else {
        showFinalMessage();
    }
}

function showFinalMessage() {
    buttonsDiv.style.display = "none";

    questionDiv.classList.remove("fade");
    void questionDiv.offsetWidth;
    questionDiv.classList.add("fade");

    questionDiv.innerHTML = `
        <div style="font-size:22px; line-height:1.75;">
            Aishuuu… ❤️<br><br>

            I didn’t ask these questions to rush you,<br>
            but because every answer led me back to one feeling — you.<br><br>

            I may not know what the future looks like,<br>
            but I know I want to face it with honesty, care,<br>
            and a heart that chooses you again and again.<br><br>

            Thank you for listening,<br>
            for feeling,<br>
            and for being you 💖
        </div>
    `;
}

noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.position = "absolute";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});
