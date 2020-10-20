import React from 'react';
import {render} from 'react-dom';
import {App} from './App';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

render(
    <DndProvider backend={HTML5Backend}>
      <App />
    </DndProvider>,
  document.getElementById('root')
);
