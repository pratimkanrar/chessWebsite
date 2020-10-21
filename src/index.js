import React from 'react';
import {render} from 'react-dom';
import {App} from './App';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';


const is_touch_enabled = () => {
    return ( 'ontouchstart' in window ) || ( navigator.maxTouchPoints > 0 ) || ( navigator.msMaxTouchPoints > 0 );
}

render(
    <DndProvider backend={is_touch_enabled() ? TouchBackend : HTML5Backend}>
      <App/>
    </DndProvider>,
    document.getElementById('root')
);
