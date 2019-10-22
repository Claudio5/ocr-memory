import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Card from './card'
import GuessCount from './guesscount'

class App extends Component {

  handleCardClick(card) {
    console.log(card, 'clicked');
  }

  render() {
    const won = new Date().getSeconds() % 2 === 0
    return (
      <div className="memory">
        <GuessCount guesses={0} />
        <Card card="😀" feedback="hidden" onClick={this.handleCardClick}/>
        <Card card="🎉" feedback="justMatched" onClick={this.handleCardClick}/>
        <Card card="💖" feedback="justMismatched" onClick={this.handleCardClick}/>
        <Card card="🎩" feedback="visible" onClick={this.handleCardClick}/>
        <Card card="🐶" feedback="hidden" onClick={this.handleCardClick}/>
        <Card card="🐱" feedback="justMatched" onClick={this.handleCardClick}/>
        {won && <p>GAGNÉ !</p>}
      </div>

    )
  }
}

export default App
