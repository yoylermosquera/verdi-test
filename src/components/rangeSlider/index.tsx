import React from 'react';
import Slider from 'rc-slider';

import { Colors } from '@/styles/config/base';
import { handleRender } from './HandleTooltip';
import 'rc-slider/assets/index.css';

interface RangeSliderProps {
  min?: number;
  max?: number;
}

function RangeSlider({ min, max }: RangeSliderProps) {
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
        defaultValue={[0, 20]}
        onChange={() => {}}
        draggableTrack
        handleRender={handleRender}
      />
    </div>
  );
}

export default RangeSlider;
