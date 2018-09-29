import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import Tabs from './tabs';

const panes = [{title: 'title1'}, {title: 'title2'}];

function Root () {
  return (
    <div>
      Welcome!
      <Clock />
      <Tabs panes={panes}/>
    </div>
  );
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('page loaded');
  ReactDOM.render(<Root />, document.getElementById('root'));
});
