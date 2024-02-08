import React from 'react'
import MediumDisplayData from './mediumDisplayData';

const MediumGlobalDisplay = ({Bigtitle, data }) => {
    const renderItems = () => {
        return data.map((item, index) => (
            <MediumDisplayData key={index} title={item.name} date={item.date} addon={item.Description}/>
        ));
      };
    
      return (
        <div className='p-2'>
          {
                data.length > 0 && <div>
                    <h1 className='text-2xl bold'>{Bigtitle}</h1>
                    <hr></hr>
                </div>
            }
          {renderItems()}
        </div>
      );
}

export default MediumGlobalDisplay