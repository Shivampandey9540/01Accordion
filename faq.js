const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];

const accordianBody = document.querySelector(".accordian_body");

const faqs = [];

/**
 * 
 * @param {
 * this function ShowFaq if You want to just show, all of them and 
 * not want to closs other Faq
 * } 

function showFaq(cl) {
  let ChangeCss = document.getElementsByClassName(`${cl}`);

  // for()

  if (ChangeCss[0].style.display === "flex") {
    ChangeCss[0].style.display = "none";
  } else {
    ChangeCss[0].style.display = "flex";
  }
}
 */

function showFaq(cl) {
  let ChangeCss = document.getElementsByClassName(`Answer`);

  for (let i = 0; i < ChangeCss.length; i++) {
    console.log(ChangeCss[i].classList);
    if (ChangeCss[i].classList.value == cl) {
      console.log(ChangeCss[i].classList.contains, "ghellow");
      // ChangeCss[i].style.display = "flex";

      if (ChangeCss[i].style.display === "flex") {
        ChangeCss[i].style.display = "none";
      } else {
        ChangeCss[i].style.display = "flex";
      }
    } else {
      ChangeCss[i].style.display = "none";
    }
  }
}

function createFaq() {
  faqData.forEach((e) => {
    //Createing Element for Question
    let Container = document.createElement("div");
    Container.className = "Container";
    Container.classList.add(`${e.id}`);

    //Creating Element for Answer
    let Answer = document.createElement("div");
    Answer.className = "Answer";
    Answer.classList.add(`${e.id}`);
    Answer.innerHTML = ` <div><p>${e.answer}</p></div>`;

    //Appending Container and Answer

    Container.innerHTML = ` <div class="Question_div"><p class="Question">${e.question}</p> </div> <div onclick="btnStatusUpdate(${e.id})" class="Button">-</div>`;
    accordianBody.appendChild(Container);
    accordianBody.appendChild(Answer);
  });
}

function btnStatusUpdate(key) {
  let AnswerShow = document.getElementsByClassName("Answer");

  //Looping my Class lenght
  for (let i = 0; i < AnswerShow.length; i++) {
    // If value exist only then we can see the answer
    if (AnswerShow[i].classList.value === `Answer ${key}`) {
      //Calling the ShowFaq function here
      showFaq(AnswerShow[i].classList.value);
    }
  }
}

createFaq();
