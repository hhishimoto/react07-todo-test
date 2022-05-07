import React from "react";

export const CompleteTodos = (props) => {
  const { completeTodos, onClickBack } = props;

  return (
    <div className="complete-area">
      <p className="title">完了したTODO</p>
      <ul id="complete-list">
        {completeTodos.map((todo, index) => {
          return (
            <li key={todo} className="list-row">
              <span>{todo}</span>
              <button onClick={() => onClickBack(index)}>戻す</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
