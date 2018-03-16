import React from 'react';
import ReactDOM from 'react-dom';
import InfoPanel from './index';


let props = {
    type: "downloads",
    number: 400
}


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<InfoPanel {...props}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
