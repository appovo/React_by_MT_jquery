import './App.css';
import React from 'react';

class DatePicker extends React.Component {

  constructor(props) {
    super(props)
    this.datePickerContainer = React.createRef()
  }
  componentDidMount() {
    window.$(this.datePickerContainer.current).datepicker({
      onSelect: this.props.onDateChange,
      defaultDate: this.props.initialDate
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
    selectedDate: null,
    initialDate: '01/01/2000'
  }

  render() {
    return (
      <div className="App">
        <h1>Hello JQuery</h1>
        <h2>{this.state.selectedDate ? this.state.selectedDate : this.state.initialDate} </h2>
        <DatePicker onDateChange={(date => {
          this.setState({
            selectedDate: date
          })
        })}
          initialDate={this.state.initialDate} />
      </div>
    );
  }
}

export default App;

