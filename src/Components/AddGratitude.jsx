import Card from "./Card";
import Navigation from "./Navigation";
// Change this import to match the exact path and case
import { Button } from "../components/ui/button";

function AddGratitude() {
    return ( 
        <>
            <Navigation/>
            <div className="flex flex-col px-10" style={{ minHeight: "100vh", overflow: "hidden", marginTop: "20px" }}>
                <div className="flex w-full items-center justify-between">
                    <text className="text-2xl sm:text-3xl font-bold">My Gratitude Journal</text>
                    <Button className="hidden sm:inline-block bg-green-500 text-white hover:bg-green-600 px-2 py-1 sm:px-3 sm:py-2 text-xs sm:text-sm">
                        <span className="mr-2">+</span> New Entry
                    </Button>
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