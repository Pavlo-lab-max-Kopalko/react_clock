import React from 'react';
import './App.scss';
// import { render } from 'react-dom';

type State = {
  today: object;
  clockName: string;
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component<{}, State> {
  state: State = {
    today: new Date(),
    clockName: 'Clock-0',
  };

  // This code starts a timer
  timerId: number | null = window.setInterval(() => {
    this.setState({
      today: new Date(),
      clockName: getRandomName(),
    });
  }, 3300);

  // this code stops the timer

  (window as Window).clearInterval(timerId);

  // window.clearInterval(timerId);

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        <div className="Clock">
          <strong className="Clock__name">{clockName}</strong>

          {' time is '}

          <span className="Clock__time">
            {today.toUTCString().slice(-12, -4)}
          </span>
        </div>
      </div>
    );
  }
};
