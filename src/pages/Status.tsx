import { Tweet } from "../components/Tweet";
import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { PaperPlaneRight } from "phosphor-react";
import { FormEvent, KeyboardEvent, useState } from "react";

import "./Status.css";

export function Status() {
  const [newAnswer, setNewAnswer] = useState("");
  const [answers, setAnswers] = useState([
    "Concordo...",
    "Olha, faz sentido!",
    "Parabéns pelo progresso.",
  ]);

  function createNewAnswer(event: FormEvent) {
    event.preventDefault();

    setAnswers([newAnswer, ...answers]);
    setNewAnswer("");
  }

  function handleHotKeySubmit(event: KeyboardEvent) {
    if(event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      setAnswers([newAnswer, ...answers]);
      setNewAnswer("");
    }
  }

  return (
    <main className="status">
      <Header title="Tweet" />

      <Tweet
        content="Lorem, ipsum dolor sit amet consectetur 
        adipisicing elit. Labore dolorem accusamus nemo dolore commodi."
      />

      <Separator />

      <form onSubmit={createNewAnswer} className="answerTweetForm">
        <label htmlFor="tweet">
          <img
            src="https://github.com/vanessabrazuna.png"
            alt="Vanessa Brazuna"
          />
          <textarea 
            id="tweet" 
            placeholder="Tweet your answer"
            value={newAnswer}
            onKeyDown={handleHotKeySubmit}
            onChange={(event) => { 
              setNewAnswer(event.target.value)
            }}
          />
        </label>
        <button type="submit">
          <PaperPlaneRight />
          <span>Answer</span>
        </button>
      </form>

      {answers.map((answer) => {
        {
          return <Tweet content={answer} key={answer} />;
        }
      })}
    </main>
  );
}
