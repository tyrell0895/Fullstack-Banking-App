import React, { Component } from "react";
import Header from "./Header";
import Note from "./Note";
import notes from "../notes";
import Body from "./Body";
import About from "./About";
import Footer from "./Footer";

import Top from "./Top";
import Connect from "./connect/Connect";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Header />
          {notes.map(noteItem => (
            <Note
              key={noteItem.key}
              title={noteItem.title}
              content={noteItem.content}
            />
          ))}
          <Connect />
          <left>
            <Top />
          </left>
          <Body />
          <About />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
