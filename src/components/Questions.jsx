import { useState, useEffect } from "react";
import { BsHandThumbsUp, BsEye, BsTextareaT } from "react-icons/bs";
import { buttonsFilter } from "./constants.jsx";

import { data } from "./QuestionsData.jsx";

import logo from "../assets/logo-stackoverflow.png";

// Constants
const apiFeatured =
  "https://api.stackexchange.com/2.3/questions/featured?order=desc&sort=activity&site=stackoverflow";

// const apiQuestions =
//   "https://api.stackexchange.com/2.3/questions?order=desc&sort=activity&site=stackoverflow";

// End of Constants

const Questions = () => {
  const [questions, setQuestions] = useState(data);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("activity");

  async function fetchQuestions(filter) {
    setLoading(true);
    if (filter === "featured") {
      const response = await fetch(apiFeatured);
      const data = await response.json();
      setQuestions(data.items);
      setLoading(false);
    } else {
      const response = await fetch(
        `https://api.stackexchange.com/2.3/questions?order=desc&sort=${filter}&site=stackoverflow`
      );
      const data = await response.json();
      setQuestions(data.items);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchQuestions(filter);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  console.log(filter);

  return (
    <div className="main-questions-container">
      <div className="questions-top-container">
        <h1 className="questions-top-heading">top</h1>
        <p className="questions-top-para">Questions</p>
      </div>
      <div className="questions-container">
        <div className="questions-filter-container">
          {buttonsFilter.map((btn) => {
            const { text, len } = btn;

            return (
              <button
                type="button"
                key={text}
                className={
                  filter === text
                    ? "question-filter-btn active-btn"
                    : "question-filter-btn"
                }
                onClick={() => setFilter(text)}
              >
                {len
                  ? `${text} ${questions ? questions.length : 0}`
                  : `${text}`}
              </button>
            );
          })}
        </div>
        <div className="questions">
          {loading ? (
            <p className="loading">Loading......</p>
          ) : (
            <ul>
              {questions.slice(0, 6).map((question) => {
                const {
                  answer_count,
                  link,
                  score,
                  tags,
                  title,
                  view_count,

                  owner,
                } = question;
                const { account_id } = owner;

                return (
                  <li key={account_id} className="question-card">
                    <div className="question-details-container">
                      <h5>
                        <a
                          href={link}
                          referrerPolicy="no-referrer"
                          className="question-link"
                        >
                          {title}
                        </a>
                      </h5>
                      <div className="tags-container">
                        {tags.map((tag) => (
                          <div className="question-tag" key={tag}>
                            {tag}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="main-stats-container">
                      <div className="stats-container">
                        <p className="stats">{score}</p>
                        <p className="stats-para">Votes</p>
                        <BsHandThumbsUp />
                      </div>
                      <div
                        className={
                          answer_count > 0 ? "green-bg" : "stats-container"
                        }
                      >
                        <p className="stats">{answer_count}</p>
                        <p className="stats-para">Answers</p>
                        <BsTextareaT />
                      </div>
                      <div className="stats-container">
                        <p className="stats">{view_count}</p>
                        <p className="stats-para">Views</p>
                        <BsEye />
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
      <div className="looking-for-more">
        <img src={logo} alt="logo" className="question-logo-img" />
        <h3>looking for more?</h3>
        <p className="looking-for-more-para">
          Browse the <span>complete list of questions</span> or{" "}
          <span>popular tags. </span>Help us answer unanswered question
        </p>
      </div>
    </div>
  );
};

export default Questions;
