import React, { createContext, ReactNode, useContext, useState } from 'react';

// Create a context to manage PDF rendering state
interface pdfContext {

    isPdf: boolean;
    togglePdf: ()=> void
  }
  
const PdfContext = createContext<pdfContext | undefined>(undefined);

interface ResumeProviderProps {
    children: ReactNode;
  }
export const PdfProvider : React.FC<ResumeProviderProps> = ({ children }) => {
  const [isPdf, setIsPdf] = useState(false);

  const togglePdf = () => setIsPdf(true);

  return (
    <PdfContext.Provider value={{ isPdf, togglePdf }}>
      {children}
    </PdfContext.Provider>
  );
};

// Custom hook to use the PdfContext
export const usePdfContext = () => {
  return useContext(PdfContext);
};