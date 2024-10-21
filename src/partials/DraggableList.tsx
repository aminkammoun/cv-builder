import  { useEffect, useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const DraggableList = ({ data, handlesOnDragEnd }) => {
    const [initialData, setInitialData] = useState([]);

    useEffect(() => {

        if (data != undefined) {



            data.map((element, index) => {
                element.id = '' + index + 1;
            })
            setInitialData(data)
        }

    }, [data])


    const handleOnDragEnd = (result) => {
        if (!result.destination) return;

        const newItems = Array.from(initialData);
        const [reorderedItem] = newItems.splice(result.source.index, 1);
        newItems.splice(result.destination.index, 0, reorderedItem);
        setInitialData(newItems);
        handlesOnDragEnd(newItems)
    };

    return (
        <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="droppable">
                {(provided) => (
                    <div
                        className="bg-gray-900 shadow-lg"
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                    >
                        {initialData.map((item, index) => (
                            <div>

                                <Draggable key={item.id} draggableId={item.id} index={index}>
                                    {(provided) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}

                                        >
                                            <div key={index} className="p-1 w-full bg-bg-100 border-bg-200 border border-l-4 hover:bg-bg-200 shadow ">
                                                <div className='flex justify-between'>

                                                    <span className="">
                                                        {
                                                            item.name && <h2 className="text-lg  font-bold">{item.name}</h2>
                                                        }
                                                        {
                                                            item.institution && <h2 className="text-lg  font-bold">{item.institution}</h2>
                                                        }
                                                        {
                                                            item.Organization && <h2 className="text-lg  font-bold">{item.Organization}</h2>
                                                        }
                                                        {
                                                            item.company && <h2 className="text-lg  font-bold">{item.company}</h2>
                                                        }
                                                        {
                                                            item.position && <p className="text-white ">{item.position}</p>
                                                        }
                                                        {
                                                            item.Description && <p className="text-white break-words">{item.Description}</p>
                                                        }

                                                    </span>



                                                    {/* <span>



            {
              item.rangeDate && <p className="text-white">{`${item.rangeDate}`}</p>
            }
            {
              item.date && <p className="text-white">{`${item.date}`}</p>
            }
            {
              item.location && <p className="text-white">{`${item.location}`}</p>
            }
          </span> */}

                                                </div>
                                                <div className='flex justify-between'>
                                                    {
                                                        item.degree && <p className="text-white mb-1">{item.degree}</p>
                                                    }

                                                    {
                                                        item.issuer && <h2 className="text-lg  font-bold">{item.issuer}</h2>
                                                    }
                                                </div>

                                                {/* <p className='break-words'> {item.summary}</p> */}
                                            </div>
                                        </div>
                                    )}
                                </Draggable></div>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
};

export default DraggableList;
