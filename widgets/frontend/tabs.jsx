import React from 'react';

export default class Tabs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected_index: 0,
    };
  }

  render() {
    // const pane = this.props.panes[this.state.selected_index];
    const tabs = this.props.panes.map((pane) => {
      return (
        <h1>{pane.title}</h1>
      );
    });

    return (
      <div>
        <h1>Tabs</h1>
        {tabs}
      </div>
    );
  }
}
