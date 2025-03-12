import React from 'react';
import './App.scss';
// import { render } from 'react-dom';

type State = {
  today: object;
  clockName: string;
  hasClock: boolean;
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component<{}, State> {
  state: State = {
    today: new Date(),
    clockName: 'Clock-0',
    hasClock: false,
  };

  // This code starts a timer

  timerId: number | undefined;

  componentDidUnmount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({
        today: new Date(),
        clockName: getRandomName(),
        hasClock: true,
      });

      // eslint-disable-next-line no-console
      console.log(this.state.today);
    }, 3300);

    document.addEventListener('contextmenu', (event: MouseEvent) => {
      event.preventDefault(); // not to show the context menu
    });

    document.addEventListener('click', () => {});
  }

  // this code stops the timer
  componentWillUnmount(): void {
    window.clearInterval(this.timerId);

    this.setState({
      today: new Date(),
      clockName: getRandomName(),
      hasClock: true,
    });

    document.removeEventListener('contextmenu', (event: MouseEvent) => {
      event.preventDefault();
    });

    document.removeEventListener('click', () => {});
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        <div className="Clock">
          <strong className="Clock__name">{this.state.clockName}</strong>

          {' time is '}

          <span className="Clock__time">
            {String(this.state.today).toString().slice(-12, -4)}
          </span>
        </div>
      </div>
    );
  }
}
