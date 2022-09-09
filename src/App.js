import './App.css';
import React from 'react';
import moment from 'moment'

class DatePicker extends React.Component {

  constructor(props) {
    super(props)
    this.datePickerContainer = React.createRef()
  }
  componentDidMount() {
    window.$(this.datePickerContainer.current).datepicker({
      onSelect: this.props.onDateChange,
      defaultDate: this.props.selectedDate
    })
  }
  componentWillUnmount() {
    window.$(this.datePickerContainer.current).datepicker("destroy")
  }
  render() {
    return <div ref={this.datePickerContainer} />
  }
}
function DateDetails({ date, format }) {
  const theDate = moment(date, format)
  const now = moment(new Date()).hour(0).minute(0).seconds(0)
  const nextValentines = moment([theDate.year(), 1, 14])
  if (theDate.isSameOrAfter(nextValentines)) {
    nextValentines.add(1, "year")
  }
  const summerStart = theDate.clone().startOf("year").add(5, "months").add(21, "days")
  const summerEnd = moment(summerStart).month(8).date(23)
  const programmersDay = moment(theDate).startOf("year").dayOfYear(256)
  return (
    <div className="DateDetails">
      <h2>Fun facts about this date</h2>
      <ol>
        <li>The date is: {theDate.format("llll")}</li>
        <li>
          Counting from now ({now.format("LLL")}), it would be {theDate.from(now)}.
        </li>
        <li>
          Next valentine's day ({nextValentines.format('ll')}) will be {theDate.to(nextValentines)}
        </li>
        <li>It {theDate.isLeapYear() ? "falls" : "does not fall"} within a leap year.</li>
        <li>
          It {theDate.isBetween(summerStart, summerEnd) ? "is" : "is not"} a summer day (it's {theDate.isBetween(summerStart, summerEnd) ? "" : "not"} between {summerStart.format('ll')} and {summerEnd.format('ll')}).
        </li>
        <li>It is {programmersDay.isSame(theDate, "day") ? "" : "not"} the Programmer's Day ({programmersDay.format('ll')}).</li>
      </ol>
    </div>
  );
}

class App extends React.Component {
  state = {
    selectedDate: '08/09/2022',
  }

  render() {
    return (
      <div className="App">
        <h1>Hello JQuery</h1>
        <h2>{this.state.selectedDate} </h2>
        <DatePicker onDateChange={(date => {
          this.setState({
            selectedDate: date
          })
        })}
          selectedDate={this.state.selectedDate} />
        <DateDetails date={this.state.selectedDate} format="MM/DD/YYYY" />
      </div>
    );
  }
}

export default App;

