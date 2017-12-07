import React from 'react';
import ReactDOM from 'react-dom';

class MarkBoard extends React.Component {
  markX() {

  }
  render() {
    let td = document.getElementsByTagName('td');
    for (let i = 0; i < td.length; i++) {
      td[i].setAttribute("id","square-" + (i + 1));
    }
    return <section>{this.td}</section>
  }
}

ReactDOM.render(<MarkBoard />, document.getElementById('root'));
