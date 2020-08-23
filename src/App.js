import React from 'react';
import './App.css';
import Navigation from './components/navigation';
import NewsFeed from './components/newsfeed';
import Follow from './components/follow';

function App() {
  const name = "Abul";
  const name2 = "Habul";

  const person = {
    name: "abul",
    age: '20'
  }

  // person.name="new abul"


  console.log("this is the original abul",person);

  return (
    <div className="App">
      <Navigation person={person} name={name} name2={name2}/>
      <NewsFeed/>
      <Follow person={person} name2={name2} name={name}/>
    </div>
  );
}

export default App;
