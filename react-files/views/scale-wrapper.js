import React, {Component} from 'react';


import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import Tooltip from 'rc-tooltip';
import Slider from 'rc-slider';


const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
const Handle = Slider.Handle;

const handle = (props) => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </Tooltip>
  );
};

export default class ControlsView extends Component
{
	render() {

		//console.log(OuterViewStyle);
    const {startValue, minValue, maxValue, stepSize, onChange} = this.props;

		var _output = (
			<div>
				<span>Scale: </span>
				<Slider
					min={minValue}
					max={maxValue}
					defaultValue={startValue}
					handle={handle}
					tipFormatter={value => `${value}%`}
					onChange={onChange}/>
			</div>
		);
		return _output;
	}
}