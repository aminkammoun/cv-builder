import React, { useEffect, useRef } from 'react'

import { TransformComponent, TransformWrapper, ReactZoomPanPinchRef, } from 'react-zoom-pan-pinch';
import { AnimatePresence, motion } from "framer-motion";
import { useResumeContext } from '../../context/ResumeContext'
//import TemplateOne from '../templates/template-one/TemplateOne';
import TemplateOne from '../templates/template-one/TemplateOne';
//import { ResumeProvider, useResumeContext } from '../../context/ResumeContext'

// Define styles

const MiddleContainer: React.FC = () => {
  const { resumeData } = useResumeContext();
  const transformComponentRef = useRef<ReactZoomPanPinchRef | null>(null);
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== window.location.origin) return;

      if (event.data.type === "ZOOM_IN") transformComponentRef.current?.zoomIn(0.2);
      if (event.data.type === "ZOOM_OUT") transformComponentRef.current?.zoomOut(0.2);
      if (event.data.type === "CENTER_VIEW") transformComponentRef.current?.centerView();
      if (event.data.type === "RESET_VIEW") {
        transformComponentRef.current?.resetTransform(0);
        setTimeout(() => transformComponentRef.current?.centerView(0.8, 0), 10);
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [transformComponentRef]);
  const endFnc = () => {
    console.log(resumeData)
    console.log('-------------------')
    localStorage.setItem('userProfile', JSON.stringify(resumeData));

  }

  return (
    <>

      <TransformWrapper
        centerOnInit
        maxScale={2}
        minScale={0.4}
        initialScale={0.8}
        ref={transformComponentRef}
        limitToBounds={false}
      >
        <button className='bg-white text-black' onClick={() => endFnc()}>End this to localstora</button>
        <TransformComponent
          contentClass="grid items-start justify-center space-x-12 pointer-events-none" >
          <AnimatePresence>

            <motion.div
              layout
              key={1}
              initial={{ opacity: 0, x: -200, y: 0 }}
              animate={{ opacity: 1, x: 0, transition: { delay: 1 * 0.3 } }}
              exit={{ opacity: 0, x: -200 }}
            >
                <div className='w-full text-black' id='imgExample'>
                  <TemplateOne />
                </div>
              
            </motion.div>
          </AnimatePresence>


        </TransformComponent>




      </TransformWrapper>
    </>

  );
};

export default MiddleContainer