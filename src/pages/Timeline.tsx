import { Tweet } from "../components/Tweet";
import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { FormEvent, KeyboardEvent, useState } from "react";

import "./Timeline.css";

export function Timeline() {
  const [ newTweet, setNewTweet ] = useState('')
  const [tweets, setTweet] = useState([
    "Meu primeiro tweet",
    "Teste",
    "Tweetando!",
  ]);

  function createNewTweet(event: FormEvent) {
    event.preventDefault();

    setTweet([newTweet, ...tweets]);
    setNewTweet('')
  }

  function handleHotKeySubmit(event: KeyboardEvent) {
    if(event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      setTweet([newTweet, ...tweets]);
      setNewTweet("");
    }
  }

  return (
    <main className="timeline">
      <Header title="Home" />

      <form onSubmit={createNewTweet} className="newTweetForm">
        <label htmlFor="tweet">
          <img
            src="https://github.com/vanessabrazuna.png"
            alt="Vanessa Brazuna"
          />
          <textarea
            id="tweet"
            placeholder="What's happening?"
            value={newTweet}
            onKeyDown={handleHotKeySubmit}
            onChange={(event) => {
              setNewTweet(event.target.value)
            }}
          />
        </label>
        <button type="submit">Tweet</button>
      </form>

      <Separator />

      {tweets.map((tweet) => {
        return <Tweet content={tweet} key={tweet} />;
      })}
    </main>
  );
}
