import React, {Component} from 'react';
import { findDOMNode } from 'react-dom';
import { DropTarget } from 'react-dnd';

import GridTileView from '../views/grid-tile';
import {DragTypes} from '../misc/constants';


const gridTileTarget = {
  canDrop(props, monitor) {
    // You can disallow drop based on props or item
    const item = monitor.getItem();
    return true;
  },

  hover(props, monitor, component) {
    // This is fired very often and lets you perform side effects
    // in response to the hover. You can't handle enter and leave
    // here—if you need them, put monitor.isOver() into collect() so you
    // can just use componentWillReceiveProps() to handle enter/leave.

    // You can access the coordinates if you need them
    const clientOffset = monitor.getClientOffset();
    const componentRect = findDOMNode(component).getBoundingClientRect();

    // You can check whether we're over a nested drop target
    const isJustOverThisOne = monitor.isOver({ shallow: true });

    // You will receive hover() even for items for which canDrop() is false
    const canDrop = monitor.canDrop();
  },

  drop(props, monitor, component) {
    if (monitor.didDrop()) {
      // If you want, you can check whether some nested
      // target already handled drop
      return;
    }

    // Obtain the dragged item
    const item = monitor.getItem();

    // You can do something with it
    //ChessActions.movePiece(item.fromPosition, props.position);

    //console.log("Item dropped on drop target!");

    let _newDroppedIcons = component.state.droppedTokens.slice();
    _newDroppedIcons.push(item);

    component.setState({droppedTokens: _newDroppedIcons, droppedTokensChanged: true});

    // You can also do nothing and return a drop result,
    // which will be available as monitor.getDropResult()
    // in the drag source's endDrag() method
    return { moved: true };
  }
};

function collect(connect, monitor) {
  return {
    // Call this function inside render()
    // to let React DnD handle the drag events:
    connectDropTarget: connect.dropTarget(),
    // You can ask the monitor about the current drag state:
    isOver: monitor.isOver(),
    isOverCurrent: monitor.isOver({ shallow: true }),
    canDrop: monitor.canDrop(),
    itemType: monitor.getItemType()
  };
}


class GridTileController extends Component
{
	constructor(props){
		super(props);

		this.state = {
			droppedTokens: [],
			droppedTokensChanged: false
		};
	}

	shouldComponentUpdate(nextProps, nextState){
		if (nextState.droppedTokensChanged)
		{
			this.setState({droppedTokensChanged: false});
			return true;
		}
		if (this.props.sizes.height != nextProps.sizes.height ||
			this.props.sizes.width != nextProps.sizes.width)
		{
			return true;
		}
		
		return false;
	}

	render() {

		//console.log(OuterViewStyle);
		const {sizes, id} = this.props;

	    // Your component receives its own props as usual
	    const { position } = this.props;

	    // These props are injected by React DnD,
	    // as defined by your `collect` function above:
	    const { isOver, canDrop, connectDropTarget } = this.props;

		var _output = (
			<span><GridTileView sizes={sizes} id={id} droppedTokens={this.state.droppedTokens}/></span>
		);
		return connectDropTarget(_output);
	}
}
export default DropTarget(DragTypes.TOKEN, gridTileTarget, collect)(GridTileController)