import { useState } from "react";

function Quiz() {
  const questionBank = [
    {
      question: "What does bug refer to in software development?",
      options: [
        "Malicious code",
        "Process of testing",
        "Error or flaw in program",
        "Feature not implemented",
      ],
      answer: "Error or flaw in program",
    },
    {
      question: "What is the full form of JSX?",
      options: [
        "Javascript Extensible",
        "Just Simple eXample",
        "Javascript XML",
        "None of the above",
      ],
      answer: "JavaScript XML",
    },
    {
      question: "What is the purpose of testing software?",
      options: [
        "To make it run faster",
        "To find and fix errors or bugs",
        "To improve the hardware",
        "To reduce the overall size of the program",
      ],
      answer: "To find and fix errors or bugs",
    },
    {
      question:
        "Which of the following is an example of a programming language?",
      options: ["Excel", "JavaScript", "PowerPoint", "Word"],
      answer: "JavaScript",
    },
    {
      question: "What is a variable in programming?",
      options: [
        "A specific type of data structure",
        " A keyword used to define an algorithm ",
        "A named storage location that holds a value",
        "A function that manipulates data",
      ],
      answer: "A named storage location that holds a value",
    },
  ];

  
  const [optionSelected, selectOptionSelected] = useState("None");  // var optionSelected = "None";

  function handleSelectOption(option) {
    selectOptionSelected(option);
  }
  return (
    <div>
      <h2> Question 1</h2>
      <p className="question"> {questionBank[0].question}</p>

      {questionBank[0].options.map((option) => (
        <button className="option" onClick={() => handleSelectOption(option)}>
          {option}
        </button>
      ))}

      <p> Option Selected is : {optionSelected} </p>
      <div className="nav-buttons">
        <button> Previous </button>
        <button> Next </button>
      </div>
    </div>
  );
}

export default Quiz;
