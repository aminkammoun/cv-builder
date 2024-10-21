


const ProfilCard = ({ data }) => {
    const renderItems = () => {
        return data.map((item, index) => (
            <div key={index} className="p-1 max-w-sm bg-bg-100 border-bg-200 border border-l-4 hover:bg-bg-200 shadow ">
                <div className='gap-1 flex'>


                    <img height="15" width="15" src={"https://cdn.simpleicons.org/" + item.networks + "/white"} />
                    <h3 >{item.username}</h3>



                </div>
            </div>
        ));
    };

    return (
        <div className="max-w-md mx-auto p-1 shadow">

            {renderItems()}
        </div>
    );
};

export default ProfilCard;
