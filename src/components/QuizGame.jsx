import { useState, useEffect } from "react";
import "./QuizGame.css";

//QUIZ DATA

const quizData = {
  Python: [
    {
      question: "What keyword defines a function in Python?",
      options: ["func", "define", "def", "function"],
      answer: "def",
    },
    {
      question: "Which data type is immutable?",
      options: ["List", "Dictionary", "Set", "Tuple"],
      answer: "Tuple",
    },
    {
      question: "What does PEP stand for?",
      options: [
        "Python Enhancement Proposal",
        "Python Error Program",
        "Program Execution Plan",
        "Performance Execution Process",
      ],
      answer: "Python Enhancement Proposal",
    },
    {
      question: "Which symbol is used for comments?",
      options: ["//", "#", "--", "/* */"],
      answer: "#",
    },
    {
      question: "Which method adds an item to a list?",
      options: ["push()", "add()", "append()", "insert()"],
      answer: "append()",
    },
    {
      question: "What is the output type of input()?",
      options: ["int", "float", "string", "boolean"],
      answer: "string",
    },
    {
      question: "Which loop is used to iterate over sequence?",
      options: ["for", "while", "loop", "iterate"],
      answer: "for",
    },
    {
      question: "Which keyword handles exceptions?",
      options: ["catch", "except", "error", "handle"],
      answer: "except",
    },
  ],

  JavaScript: [
    {
      question: "Which keyword declares a variable?",
      options: ["var", "int", "string", "define"],
      answer: "var",
    },
    {
      question: "Which method converts JSON to object?",
      options: [
        "JSON.parse()",
        "JSON.stringify()",
        "JSON.convert()",
        "JSON.object()",
      ],
      answer: "JSON.parse()",
    },
    {
      question: "What is typeof null?",
      options: ["null", "object", "undefined", "number"],
      answer: "object",
    },
    {
      question: "Which symbol is strict equality?",
      options: ["=", "==", "===", "!="],
      answer: "===",
    },
    {
      question: "Which hook manages state in React?",
      options: ["useFetch", "useState", "useData", "useEffect"],
      answer: "useState",
    },
    {
      question: "Which company created JS?",
      options: ["Microsoft", "Netscape", "Google", "IBM"],
      answer: "Netscape",
    },
    {
      question: "Which method adds item to array?",
      options: ["push()", "add()", "insert()", "append()"],
      answer: "push()",
    },
    {
      question: "Which keyword defines constant?",
      options: ["var", "let", "const", "constant"],
      answer: "const",
    },
  ],

  ReactJS: [
    {
      question: "React is a ____ library.",
      options: ["Backend", "Frontend", "Database", "Server"],
      answer: "Frontend",
    },
    {
      question: "Which hook handles side effects?",
      options: ["useState", "useEffect", "useRef", "useMemo"],
      answer: "useEffect",
    },
    {
      question: "JSX stands for?",
      options: [
        "Java Syntax XML",
        "JavaScript XML",
        "JSON XML",
        "JavaScript Extension",
      ],
      answer: "JavaScript XML",
    },
    {
      question: "Props are ____.",
      options: ["State", "Inputs", "Hooks", "Methods"],
      answer: "Inputs",
    },
    {
      question: "React uses ____ DOM.",
      options: ["Real", "Shadow", "Virtual", "Dynamic"],
      answer: "Virtual",
    },
    {
      question: "Key prop is used for?",
      options: ["Styling", "Loop rendering", "State", "API"],
      answer: "Loop rendering",
    },
    {
      question: "Which method renders React app?",
      options: ["render()", "ReactDOM.createRoot()", "mount()", "init()"],
      answer: "ReactDOM.createRoot()",
    },
    {
      question: "State updates are ____.",
      options: ["Synchronous", "Asynchronous", "Manual", "Static"],
      answer: "Asynchronous",
    },
  ],

  Django: [
    {
      question: "Django is written in?",
      options: ["Java", "Python", "C++", "PHP"],
      answer: "Python",
    },
    {
      question: "Django follows ____ pattern.",
      options: ["MVC", "MVT", "MVVM", "REST"],
      answer: "MVT",
    },
    {
      question: "Which command creates project?",
      options: [
        "django start",
        "startproject",
        "django-admin startproject",
        "create project",
      ],
      answer: "django-admin startproject",
    },
    {
      question: "models.py is used for?",
      options: ["Views", "Templates", "Database", "Routing"],
      answer: "Database",
    },
    {
      question: "Django ORM stands for?",
      options: [
        "Object Relational Mapper",
        "Online Resource Manager",
        "Object Runtime Model",
        "Output Resource Model",
      ],
      answer: "Object Relational Mapper",
    },
    {
      question: "Which file handles URLs?",
      options: ["views.py", "urls.py", "models.py", "settings.py"],
      answer: "urls.py",
    },
    {
      question: "Admin panel path?",
      options: ["/admin", "/dashboard", "/panel", "/root"],
      answer: "/admin",
    },
    {
      question: "Which file contains settings?",
      options: ["config.py", "settings.py", "main.py", "app.py"],
      answer: "settings.py",
    },
  ],

  "Rest APIs": [
    {
      question: "REST stands for?",
      options: [
        "Representational State Transfer",
        "Remote Execution System",
        "Rapid Endpoint Service",
        "Runtime Execution State",
      ],
      answer: "Representational State Transfer",
    },
    {
      question: "GET method is used to?",
      options: ["Create", "Read", "Update", "Delete"],
      answer: "Read",
    },
    {
      question: "POST is used to?",
      options: ["Read", "Delete", "Create", "Fetch"],
      answer: "Create",
    },
    {
      question: "PUT method does?",
      options: ["Update", "Create", "Delete", "Read"],
      answer: "Update",
    },
    {
      question: "DELETE method does?",
      options: ["Create", "Delete", "Update", "Read"],
      answer: "Delete",
    },
    {
      question: "HTTP status 200 means?",
      options: ["Error", "Success", "Not Found", "Server Error"],
      answer: "Success",
    },
    {
      question: "JSON stands for?",
      options: [
        "JavaScript Object Notation",
        "Java Object Network",
        "Joint Script Object Notation",
        "JavaScript Online Network",
      ],
      answer: "JavaScript Object Notation",
    },
    {
      question: "REST APIs are ____.",
      options: ["Stateful", "Stateless", "Database", "Frontend"],
      answer: "Stateless",
    },
  ],

  MongoDB: [
    {
      question: "MongoDB is a ____ database.",
      options: ["SQL", "NoSQL", "Relational", "Graph"],
      answer: "NoSQL",
    },
    {
      question: "Data is stored in?",
      options: ["Tables", "Rows", "Documents", "Cells"],
      answer: "Documents",
    },
    {
      question: "MongoDB uses?",
      options: ["XML", "YAML", "BSON", "CSV"],
      answer: "BSON",
    },
    {
      question: "Collection is like?",
      options: ["Table", "Row", "Column", "Field"],
      answer: "Table",
    },
    {
      question: "Which command inserts data?",
      options: ["insertOne()", "add()", "push()", "create()"],
      answer: "insertOne()",
    },
    {
      question: "Which command finds data?",
      options: ["search()", "find()", "get()", "select()"],
      answer: "find()",
    },
    {
      question: "MongoDB default port?",
      options: ["27017", "3000", "8080", "5000"],
      answer: "27017",
    },
    {
      question: "Schema in MongoDB is?",
      options: ["Fixed", "Strict", "Flexible", "Required"],
      answer: "Flexible",
    },
  ],
};

//COMPONENT
export default function Quiz() {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selected, setSelected] = useState(null);
  const [finished, setFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10);

  // question access
  const questions = selectedTopic ? quizData[selectedTopic] : [];
  const currentQuestion = questions[index];

  //timer

  useEffect(() => {
    if (!selectedTopic || finished) return;

    if (timeLeft === 0) {
      handleNext();
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, finished, selectedTopic]);

  //Functions here

  const handleNext = () => {
    if (index === questions.length - 1) {
      setFinished(true);
    } else {
      setIndex((prev) => prev + 1);
      setAnswered(false);
      setSelected(null);
      setTimeLeft(10);
    }
  };

  const handleAnswer = (option) => {
    if (!answered) {
      if (option === currentQuestion.answer) {
        setScore((prev) => prev + 1);
      }

      setAnswered(true);
      setSelected(option);

      //1 second wait time
      setTimeout(() => {
        handleNext();
      }, 1000);
    }
  };

  const handleRestart = () => {
    setSelectedTopic(null);
    setFinished(false);
    setIndex(0);
    setScore(0);
    setAnswered(false);
    setSelected(null);
    setTimeLeft(10);
  };

  // UI starts

  return (
    <div className="quiz-container">
      {/* -------- HOME / TOPIC SECTION -------- */}
      {!selectedTopic ? (
        <div className="home-section">
          <h1 className="home-title">QuizArena</h1>
          <p className="home-subtitle">
            Choose a category and test your knowledge
          </p>

          <div className="topics-grid">
            {Object.keys(quizData).map((topic) => (
              <div
                key={topic}
                className="topic-card"
                onClick={() => {
                  setSelectedTopic(topic);
                  setIndex(0);
                  setScore(0);
                  setFinished(false);
                  setTimeLeft(10);
                }}
              >
                <div className="topic-icon">
                  {topic === "Python" && "🐍"}
                  {topic === "JavaScript" && "🟨"}
                  {topic === "React" && "⚛️"}
                  {topic === "Django" && "🟢"}
                  {topic === "MongoDB" && "🍃"}
                  {topic === "REST API" && "🔗"}
                </div>

                <h3>{topic}</h3>
                <p>Test your {topic} knowledge</p>
                <span>8 questions</span>
              </div>
            ))}
          </div>
        </div>
      ) : !finished ? (
        //Question Sec
        <div className="question-wrapper">
          <h3>
            Question {index + 1} / {questions.length}
          </h3>

          <h2>{currentQuestion.question}</h2>

          <div className="timer-wrapper">
            <div
              className="timer-circle"
              style={{ "--progress": (timeLeft / 10) * 100 }}
            >
              {timeLeft}s
            </div>
          </div>

          {currentQuestion.options.map((option, i) => (
            <button
              key={i}
              disabled={answered}
              onClick={() => handleAnswer(option)}
              className={`quiz-button ${
                answered
                  ? option === currentQuestion.answer
                    ? "correct"
                    : option === selected
                      ? "wrong-selected"
                      : ""
                  : ""
              }`}
            >
              {option}
            </button>
          ))}

          <p
            className={`score ${
              answered && selected === currentQuestion.answer ? "pulse" : ""
            }`}
          >
            Score: {score}
          </p>
        </div>
      ) : (
        //Result Sec
        <div className="result-box">
          <h2>Quiz Finished 🎉</h2>
          <p>Your Final Score: {score}</p>
          <p>Percentage: {Math.round((score / questions.length) * 100)}%</p>

          <button className="quiz-button" onClick={handleRestart}>
            Back To Topics
          </button>
        </div>
      )}
    </div>
  );
}
