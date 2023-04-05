import React from 'react';
import SingleQuestion from './SingleQuestion';

function Question({ questions, activeId, toggleQuestion }) {
  return (
    <section className="container">
      <h2>question</h2>
      {questions.map((item) => {
        return (
          <SingleQuestion
            key={item.id}
            {...item}
            activeId={activeId}
            toggleQuestion={toggleQuestion}
          />
        );
      })}
    </section>
  );
}

export default Question;
