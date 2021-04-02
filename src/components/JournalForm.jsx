import React from 'react';


class JournalForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      mood: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  submitForm(event) {
    event.preventDefault();
    this.props.addEntry(this.state);
    this.setState({title: '', body: '', mood: ''});
  }

  render() {
    return(
      <div>
        <div className="journal-form">
          <h2>How are you feeling right now?</h2>
          <label>Title:</label>
          <input type="text" name="title"
          value={this.state.title} onChange={this.handleChange} />
          <label>Journal Entry:</label>
          <input type="text" name="body"
          value={this.state.body} onChange={this.handleChange} />
        </div>
        <div className="mood" onChange={this.handleChange}>
          <p>Current Mood:</p>
          <input type="radio" value="rad" name="mood"/> rad
          <input type="radio" value="good" name="mood"/> good
          <input type="radio" value="meh" name="mood"/> meh
          <input type="radio" value="bad" name="mood"/> bad
          <input type="radio" value="awful" name="mood"/> awful
        </div>
        <button onClick={this.submitForm}>Submit</button>
      </div>
    )
  }
}

export default JournalForm;