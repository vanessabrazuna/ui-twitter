import { ArrowClockwise, ChatCircle, Heart } from "phosphor-react";
import { Link } from 'react-router-dom'
import "./Tweet.css";

interface TweetProps {
  content: string;
}

export function Tweet({ content }: TweetProps) {
  return (
    <Link to="/status" className="tweet">
      <img src="https://github.com/vanessabrazuna.png" alt="Vanessa Brazuna" />

      <div className="tweetContent">
        <div className="tweetContentHeader">
          <strong>Vanessa Brazuna</strong>
          <span>@nessabr</span>
        </div>

        <p>{content}</p>

        <div className="tweetContentFooter">
          <button type="button">
            <ChatCircle />
            20
          </button>

          <button type="button">
            <ArrowClockwise />
            20
          </button>

          <button type="button">
            <Heart />
            20
          </button>
        </div>
      </div>
    </Link>
  );
}
