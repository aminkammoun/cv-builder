import React, { useEffect, useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const DraggableList = ({ data }) => {
    const initialData = [];
    useEffect(() => {

        if (data != undefined) {

            data.map((element, index) => {
                element.id = index + 1;
                initialData.push(element)

            });
        }

    }, [data])
    const [items, setItems] = useState(initialData);
    setTimeout(() => {
        console.log(initialData)

    }, 1000)

    const handleOnDragEnd = (result) => {
        if (!result.destination) return;

        const newItems = Array.from(items);
        const [reorderedItem] = newItems.splice(result.source.index, 1);
        newItems.splice(result.destination.index, 0, reorderedItem);

        setItems(newItems);
    };

    return (
        <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="droppable">
                {(provided) => (
                    <div
                        className="bg-gray-900 p-4 rounded-lg shadow-lg"
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                    >
                        {initialData.map((item, index) => (
                            <div>
                                <h1>
                                    {item}
                                </h1>
                                <Draggable key={item.id} draggableId={item.id} index={index}>
                                    {(provided) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}

                                        >
                                            <div key={index} className=" p-2 bg-gray-800   shadow-md">
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
