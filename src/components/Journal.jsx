import React from 'react';
import axios from 'axios';
import JournalForm from './JournalForm.jsx'
import JournalList from './JournalList.jsx'
import SonderScore from './SonderScore.jsx'

class Journal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [],
    };
    this.addEntry = this.addEntry.bind(this);
    this.getEntries = this.getEntries.bind(this);
  }

  componentDidMount() {
    this.getEntries();
  }

  getEntries() {
    axios.get('/entries')
      .then(res => {
        this.setState({
          entries: res.data,
        });
      })
      .catch(err => {
        console.log(err)
      });
  }

  addEntry(entry) {
    axios.post('/entries', entry)
      .then(() => {
        this.getEntries();
      });
  }

  render() {
    return(
      <div className="main">
        <JournalForm addEntry={this.addEntry} />
        <SonderScore entries={this.state.entries}/>
        <JournalList entries={this.state.entries} />
      </div>
    )
  }

}

export default Journal;
