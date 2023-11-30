// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onDecrement = () => {
    const {speed} = this.state

    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  onIncrement = () => {
    const {speed} = this.state

    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  render() {
    const {speed} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png "
          alt="speedometer"
          className="image"
        />
        <h1 className="var-speed">Speed is {speed}mph</h1>
        <p className="max-min">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="btn-container">
          <button
            onClick={this.onIncrement}
            type="button"
            className="button acc-btn"
          >
            Accelerate
          </button>
          <button
            onClick={this.onDecrement}
            type="button"
            className="button app-btn"
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}
export default Speedometer
