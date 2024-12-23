/* eslint-disable no-unused-vars */
import React from 'react'
import EmployeeList from './EmployeeList'
import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
 } from '../config/motion';
import state from '../store';
import { CustomButton } from '../components';
import CanvasModel from '../canvas';
import Hero from '../components/Hero';
import Customizer from './Customizer';
function Model() {
  const snap = useSnapshot(state);

  return (
    <>
    <div>
    <AnimatePresence>
      {
        snap.intro && (
          <motion.section className='Model' {...slideAnimation('left')}>
            <motion.div className='Model-content' {...headContainerAnimation}>
              <motion.div {...headTextAnimation}>
                <h1 className='head-text'>
                 LET&apos;S <br className='xl:block hidden'/> Buy Some Clothes. 
                </h1>
                <CustomButton
                 type= "filled"
                 title= "Customize It"
                 handleClick={()=> state.intro = false}
                 customStyles= "w-fit px-4 font-bold text-sm"
                />
              </motion.div>
              <motion.div {...headContentAnimation}
              className='flex flex-col gap-10'>
                <p className='max-w-md font-normal text-gray-300 text-base'>
                  Create your unique and exclusive shirts with our brand new 3D Customization Tool. 
                  <strong className='text-cyan-300'>Unleash your Inner Creativity</strong> {" "} and define your own Style.
                </p>

              </motion.div>
            </motion.div>
          </motion.section>
        )
      }
      <Customizer/>
      <CanvasModel/>
    </AnimatePresence>
    </div>
    </>
  )
}

export default Model