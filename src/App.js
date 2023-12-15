import React, { useState } from "react";
import HelloWorld from "./HelloWorld";
import reducer from "./reducers";
import { createStore } from "redux";
import "./App.css";
import logo from './images/test.jpg';
import {store } from './store';
import ButtonGroup from "./ButtonGroup";

const App = () => {
  // const state = {
  //   name: "Deepali Rai",
  //   description: "Software Engineer, Speaker, and Occasional Model",
  //   likes: "Cats, Wine, and Black dresses",
  //   location: "localhost"
  // };

  //const [tech] = useState("Deepali");
  //return <HelloWorld tech={store.getState().tech} />;
  const { name, description, likes, location, tech } = store.getState().user;
  const [techTemp, setTechTemp] = useState('Dummy');
  store.subscribe(()=>{
    console.log('store updated', store.getState());
    setTechTemp(store.getState().tech);
    // console.log('techTemp ', techTemp);
  });
  return (<div className="App">
  <section className="User__img">
    <img src={logo} alt="user" />
  </section>

  <section className="User__info">
    <p>
      {" "}
      <span className="faint">I am</span> a {description}
    </p>
    <p>
      {" "}
      <span className="faint">I like</span> {likes}
    </p>

    <p className="User__info__details User__info__divider faint">
      <span>Name: </span>
      <span>{name}</span>
    </p>
    <p className="User__info__details faint">
      <span>Location: </span>
      <span>{location}</span>
    </p>
    <p className="User__info__details faint">
      <span>Tech: </span>
      <span>{techTemp}</span>
    </p>
  </section>
  <ButtonGroup key={2} technologies={["React", "Node JS", "AWS"]} />
</div>
);
};

export default App;
