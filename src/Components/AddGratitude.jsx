import Card from "./Card";
import Navigation from "./Navigation";
// import { Button } from "../ui/button";

function AddGratitude() {
    return ( 
        <>
            <Navigation/>
            <div className="flex flex-col px-10" style={{ minHeight: "100vh", overflow: "hidden", marginTop: "20px" }}>
                <div className="flex w-full items-center justify-between">
                    <text className="text-2xl sm:text-3xl font-bold">My Gratitude Journal</text>
                    {/* <Button className="hidden sm:inline-block bg-green-500 text-white hover:bg-green-600 px-2 py-1 sm:px-3 sm:py-2 text-xs sm:text-sm">
                        <span className="mr-2">+</span> New Entry
                    </Button> */}
                    <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                        <span className="mr-2">+</span> New Entry
                    </button>
                </div>
                {/* New div for Card component */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Card image="vite.svg" />
                    <Card/>
                    <Card image="vite.svg" />
                </div>
            </div>
        </>
    );
}

export default AddGratitude;