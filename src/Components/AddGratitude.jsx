import Navigation from "./Navigation";

function AddGratitude() {
    return ( 
        <>
            <Navigation/>
            <div className="flex flex-col " style={{ minHeight: "100vh", overflow: "hidden" }}>
                <div className="flex">
                    <h2> My Gratitude Journal</h2>
                    
                </div>
            </div>
        </>
    );
}

export default AddGratitude;