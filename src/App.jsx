import { useState, useEffect } from "react";
import "./App.css";
import Button from "./components/Button";
import Students from "./components/Students";

function App() {
  const [student, setStudent] = useState([]);

  useEffect(() => {
    fetch("https://hp-api.herokuapp.com/api/characters/students")
      .then((response) => response.json())
      .then((response) => setStudent(response));
  });

  const [choices, setChoices] = useState([]);
  const randomStudent = () => Math.floor(Math.random() * 11);

  const randomChoice = (value) => {
    let selectedStudents = [...student];
    let filteredStudents = [];

    for (let i = 0; i < value; i++) {
      let randomSelectedStudent = selectedStudents[randomStudent()];

      filteredStudents.push(randomSelectedStudent);

      setChoices([...filteredStudents]);
      console.log(filteredStudents);
    }
  };

  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    randomChoice(3);
    setClicked(!clicked);
    console.log(choices);
  };

  return (
    <div className="App">
      <header className="App-header">
        {clicked ? (
          <div>
            <h2>Os escolhidos:</h2>

            <Students student={choices} className="studentBox" />
            <Button onClick={() => setClicked(!clicked)}>
              Tentar novamente...
            </Button>
          </div>
        ) : (
          <div>
            {" "}
            <h3>Torneio Tribruxo</h3>{" "}
            <p>Clique no botão para encontrar os feiticeiros!</p>{" "}
            <Button
              onClick={() => {
                handleClick();
              }}
            >
              Começar!
            </Button>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
