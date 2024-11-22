// src/components/Phones.jsx
import { useState } from 'react';

const phonesData = [
    { id: 1, name: 'iPhone 14', image: 'src/assets/iphone14.jpeg', description: 'The latest iPhone with powerful performance and an advanced camera system.', pricePerMonth: 30, totalPrice: 720 },
    { id: 2, name: 'Samsung Galaxy S23', image: 'src/assets/galaxy23.jpg', description: 'Experience the best of Android with exceptional display and camera features.', pricePerMonth: 28, totalPrice: 672 },
    { id: 3, name: 'Google Pixel 7', image: 'src/assets/pixel7.jpg', description: 'Capture stunning photos with Google’s most advanced camera yet, packed with AI features.', pricePerMonth: 25, totalPrice: 600 },
];

const phonesData2 = [
    { id: 4, name: 'iPhone 15', image: 'src/assets/iphone15.jpg', description: 'The newest iPhone featuring enhanced performance and a stunning display.', pricePerMonth: 35, totalPrice: 840 },
    { id: 5, name: 'OnePlus 10 Pro', image: 'src/assets/oneplus.jpg', description: 'A flagship Android device offering premium features and fast performance.', pricePerMonth: 27, totalPrice: 648 },
    { id: 6, name: 'Xiaomi 12 Pro', image: 'src/assets/xia.jpg', description: 'An affordable premium phone with a gorgeous display and powerful specs.', pricePerMonth: 24, totalPrice: 576 },
];

const Phones = () => {
    const [buttonPresses, setButtonPresses] = useState({});

    // Function to handle button click for phones
    const handleButtonClick = (phone) => {
        setButtonPresses((prevPresses) => ({
            ...prevPresses,
            [phone.id]: (prevPresses[phone.id] || 0) + 1
        }));
        
        // Send GET request to the local server
        fetch(`http://localhost:5000/api/selected-phone?phone=${encodeURIComponent(phone.name)}`)
            .then(response => response.json())
            .then(data => console.log(data.message))
            .catch(error => console.error('Error:', error));
    };

    // Lease, Prepaid, and Contract button handlers
    const handleOptionClick = (option) => {
        console.log(`Selected Option: ${option}`);
        
        // Send GET request for the selected option
        fetch(`http://localhost:5000/api/option?selection=${encodeURIComponent(option)}`)
            .then(response => response.json())
            .then(data => console.log(data.message))
            .catch(error => console.error('Error:', error));
    };

    // Find the most clicked phone
    const mostClickedPhone = Object.entries(buttonPresses).reduce((max, [id, count]) => {
        return count > max.count ? { id: parseInt(id), count } : max;
    }, { id: null, count: 0 });

    // Get the details of the most clicked phone from the data
    const mostClickedPhoneData = [...phonesData, ...phonesData2].find(phone => phone.id === mostClickedPhone.id);

    return (
        <div className="phones-section">
            <div className="bg-gray-200 p-4 text-center">
                <p className="text-lg font-semibold">
                    Save more. Save the $70 connection fee when you shop Mobility online. Plus get fast, free shipping.
                </p>
            </div>

            <div className="flex items-center justify-center bg-blue-500 bg-opacity-10 p-4 rounded-lg my-4">
                <h2 className="text-3xl text-black">Available Phones</h2>
            </div>

            {/* New buttons for leasing, prepaid, and contract with dark blue color */}
            <div className="flex justify-around my-4">
                <button 
                    className="bg-blue-800 text-white py-2 px-4 rounded hover:bg-blue-700"
                    onClick={() => handleOptionClick('Leasing')}
                >
                    Leasing
                </button>
                <button 
                    className="bg-blue-800 text-white py-2 px-4 rounded hover:bg-blue-700"
                    onClick={() => handleOptionClick('Prepaid')}
                >
                    Prepaid
                </button>
                <button 
                    className="bg-blue-800 text-white py-2 px-4 rounded hover:bg-blue-700"
                    onClick={() => handleOptionClick('Contract')}
                >
                    Contract
                </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
                {[...phonesData, ...phonesData2].map(phone => (
                    <div key={phone.id} className="phone-card bg-gray-800 p-4 rounded-lg shadow-md">
                        <img src={phone.image} alt={phone.name} className="w-full h-auto rounded-md" />
                        <h3 className="text-xl text-white mt-2">{phone.name}</h3>
                        <p className="text-gray-300 mt-1">{phone.description}</p>
                        <p className="text-gray-200 mt-1">Price: ${phone.pricePerMonth}/month</p>
                        <p className="text-gray-200 mt-1">Total: ${phone.totalPrice}</p>
                        <button 
                            className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
                            onClick={() => handleButtonClick(phone)}
                        >
                            Select {phone.name}
                        </button>
                    </div>
                ))}
            </div>
            
            {mostClickedPhoneData && (
                <div className="bg-gray-200 p-4 rounded-lg mt-6 text-center">
                    <h3 className="text-xl font-semibold">Most Selected Phone</h3>
                    <p className="text-lg">{mostClickedPhoneData.name} - Selected {mostClickedPhone.count} times</p>
                </div>
            )}
        </div>
    );
};

export default Phones;
