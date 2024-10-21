

const ProfilCard = ({ data }) => {
    const renderItems = () => {
        return data.map((item, index) => (
            <div key={index} className="mb-4 p-2 bg-black border border-dashed rounded-md shadow-md">
                <div className='flex justify-between'>
                    <span className="">
                        <h1 className="text-2xl ">{item.name}</h1>
                        <h3 >{item.Description}</h3>
                    </span>


                </div>
            </div>
        ));
    };

    return (
        <div className="max-w-md mx-auto p-1">

            {renderItems()}
        </div>
    );
};

export default ProfilCard;
