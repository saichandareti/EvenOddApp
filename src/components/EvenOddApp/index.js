// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {number: 0, text: 'Even'}

  getNumberAndText = () => {
    const {number} = this.state
    const increment = Math.floor(Math.random(1, 100) * 100) + number
    const newText = Math.ceil(increment) % 2 === 0 ? 'Even' : 'Odd'
    this.setState({
      number: increment,
      text: newText,
    })
  }

  render() {
    const {number, text} = this.state
    return (
      <div className="main-container">
        <div className="bg-container">
          <h1 className="main-heading">
            Count <span>{number}</span>
          </h1>
          <p className="paragraph">
            Count is <span>{text}</span>
          </p>
          <button
            className="button"
            type="button"
            onClick={this.getNumberAndText}
          >
            Increment
          </button>
          <p className="paragraph-2">
            Increase by Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
