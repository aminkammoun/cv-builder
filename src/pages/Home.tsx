import React from 'react'
import Header from '../partials/Header';


import Footer from '../partials/Footer';


export const Home: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen overflow-hidden">
    
          {/*  Site header */}
          <Header />
    
          {/*  Page content */}
          <main className="flex-grow">
    
            {/*  Page sections */}
            {children}
          </main>
    
    
          {/*  Site footer */}
          <Footer />
    
        </div>
      );
}
