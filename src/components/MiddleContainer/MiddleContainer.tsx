import React, { useEffect, useRef } from 'react'
import Basics from './Basics/Index'
import Education from './Education/Index'
import Experience from './Experience/Index'
import Projects from './projects/Index'
import Language from './Language/Index'
import { TransformComponent, TransformWrapper, ReactZoomPanPinchRef, } from 'react-zoom-pan-pinch';
import { AnimatePresence, motion } from "framer-motion";


const MiddleContainer: React.FC = () => {
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


  return (
    <TransformWrapper 
      centerOnInit
      maxScale={2}
      minScale={0.4}
      initialScale={0.8}
      ref={transformComponentRef}
      limitToBounds={false}
    >
      
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
                  <div className="basicStyle bg-white">
                    <Basics />
                    <Language />
                    <Education />
                    <Experience />
                    <Projects />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>


          </TransformComponent>
     
    


    </TransformWrapper>
  );
};

export default MiddleContainer