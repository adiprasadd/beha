

const simCardsData = [
    {
        id: 1,
        name: 'Physical SIM',
        image: 'src/assets/ps.jpg', // Replace with the actual path to your image
        description: 'A physical SIM card that you can insert into your phone.',
        price: 10,
        activationFee: 5,
    },
    {
        id: 2,
        name: 'eSIM QR Voucher',
        image: 'src/assets/es.jpg', // Replace with the actual path to your image
        description: 'An eSIM QR code voucher for digital activation on compatible devices.',
        price: 12,
        activationFee: 5,
    },
];

const SimCards = () => {
    // Function to handle button click
    const handleButtonClick = (simCard) => {
        console.log('Selected SIM card:', simCard.name); // Logging for demonstration
        // You can perform actions like navigating to a details page or updating state here
    };

    return (
        <div className="simcards-section">
            {/* Header with light grey background */}
            <div className="bg-gray-200 p-4 text-center">
                <p className="text-lg font-semibold">
                    Choose your preferred SIM card option and enjoy fast activation and connectivity.
                </p>
            </div>

            <div className="flex items-center justify-center bg-blue-500 bg-opacity-10 p-4 rounded-lg my-4">
                <h2 className="text-3xl text-black">Available SIM Cards</h2> {/* Centered Header */}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-4">
                {simCardsData.map(simCard => (
                    <div key={simCard.id} className="sim-card bg-gray-800 p-4 rounded-lg shadow-md">
                        <img src={simCard.image} alt={simCard.name} className="w-full h-auto rounded-md" />
                        <h3 className="text-xl text-white mt-2">{simCard.name}</h3>
                        <p className="text-gray-300 mt-1">{simCard.description}</p>
                        <p className="text-gray-200 mt-1">Price: ${simCard.price}</p>
                        <p className="text-gray-200 mt-1">Activation Fee: ${simCard.activationFee}</p>
                        <button 
                            className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
                            onClick={() => handleButtonClick(simCard)} // Call the function on click
                        >
                            Select {simCard.name}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SimCards;
