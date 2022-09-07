import './App.css';
import React from 'react';

class DatePicker extends React.Component {
  constructor(props) {
    super(props)
    this.datePickerContainer = React.createRef()
  }
  componentDidMount() {
    window.$(this.datePickerContainer.current).datepicker({
      onSelect: this.props.onDateChange
    })
  }
  componentWillUnmount() {
    window.$(this.datePickerContainer.current).datepicker("destroy")
  }
  render() {
    return <div ref={this.datePickerContainer} />
  }
}

class App extends React.Component {
  state = {
    selectedDate: null
  }

  render() {
    return (
      <div className="App">
        <h1>Hello JQuery</h1>
        <h2>{this.state.selectedDate ? this.state.selectedDate : "Please select a date."} </h2>
        <DatePicker onDateChange={(date => {
          this.setState({
            selectedDate: date
          })
        })} />
      </div>
    );
  }
}

export default App;

