import React from "react";
import { store } from './store';

function dispatchBtnAction(e) {
    const tech = e.target.dataset.tech;
    store.dispatch(setTechnology(tech));
}

function setTechnology(text) {
    return {
        type: "SET_TECHNOLOGY",
        text: text
    }
}
const ButtonGroup = ({ technologies }) => (
  <div>
    {technologies.map((tech, i) => (
      <button
        data-tech={tech}
        key={`btn-${i}`}
        className="hello-btn"
        onClick={dispatchBtnAction}
        >
        {tech}
      </button>
    ))}
  </div> 
);
export default ButtonGroup;