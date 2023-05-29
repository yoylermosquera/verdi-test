import React from 'react';
import Slider, { SliderProps } from 'rc-slider';

import { Colors } from '@/styles/config/base';
import { handleRender } from './HandleTooltip';
import 'rc-slider/assets/index.css';

interface RangeSliderProps {
  min?: number;
  max?: number;
  onChange?: SliderProps["onChange"]
  value?: SliderProps["value"]
  onFocus?: SliderProps["onFocus"]
  onBlur?: SliderProps["onBlur"]
}

function RangeSlider({ min, max, value,  onChange }: RangeSliderProps) {
  return (
    <div>
      <Slider
        className="slider__container"
        railStyle={{
          backgroundColor: Colors.goldDark,
        }}
        trackStyle={{
          backgroundColor: 'transparent',
        }}
        handleStyle={{
          backgroundColor: Colors.goldDark,
          border: 'none',
          opacity: 1,
        }}
        range
        min={min}
        max={max}
        step={10}
        allowCross={false}
        value={value}
        // defaultValue={[min || 0, max || 1000 ]}
        onChange={onChange}
        draggableTrack
        handleRender={handleRender}
        
      />
    </div>
  );
}

export default RangeSlider;
