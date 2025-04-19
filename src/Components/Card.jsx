function Card({ image }) {
    const currentDate = new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return ( 
        <>
            <div className="bg-white shadow-md rounded-lg overflow-hidden min-h-72">
                {/* Conditionally render the image */}
                {image && (
                    <img 
                        src={image} 
                        alt="Entry Thumbnail" 
                        className="w-full h-48 object-cover"
                    />
                )}
                {/* Content */}
                <div className={`p-6 ${!image ? "h-full" : ""}`}>
                    {/* Date */}
                    <p className="text-gray-500 text-sm mb-2">{currentDate}</p>
                    {/* Heading */}
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Grateful for Small Joys</h3>
                    {/* Entry preview */}
                    <p className="text-gray-600 mb-4">
                        Today, I took a walk in the park and enjoyed the fresh air. It reminded me of how beautiful life can be...
                    </p>
                    {/* Link to open full entry */}
                    <a href="#" className="text-gray-400 hover:underline text-sm">Click to open full entry</a>
                </div>
            </div>
        </>
    );
}

export default Card;