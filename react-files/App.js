import React, {Component} from 'react';

//import { default as TouchBackend } from 'react-dnd-touch-backend';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

import OuterController from './controllers/outer';
import DragLayer from './controllers/drag-layer';




class App extends Component {
    render () {
        return (<OuterController/>);
    }
}

module.exports = DragDropContext(HTML5Backend)(App);
//module.exports = DragDropContext(TouchBackend({ enableMouseEvents: true }))(App);