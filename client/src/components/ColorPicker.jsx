/* eslint-disable no-unused-vars */
import React from 'react';
import { SketchPicker } from 'react-color';
import { useSnapshot } from 'valtio';
import state from '../store';
import { color } from 'framer-motion';

const ColorPicker = () => {
  
  const snap = useSnapshot(state);

  return (
    <div className="absolute left-full ml-4">
      <SketchPicker
       color={snap.color}
       disableAlpha
       onChange={(color)=> state.color= color.hex}
     />
    </div>
  )
}

export default ColorPicker