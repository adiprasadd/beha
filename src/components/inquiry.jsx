// src/components/Chat.jsx

import { useState } from 'react';

const Chat = () => {
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');
    const [submitted, setSubmitted] = useState(false);

    // Handle submitting the form
    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);

        // Send GET request with user information
        fetch(`http://localhost:5000/api/user_info?name=${encodeURIComponent(name)}&gender=${encodeURIComponent(gender)}&age=${age}`)
            .then(response => response.json())
            .then(data => {
                console.log("Response from Flask API:", data);
            })
            .catch(error => {
                console.error("Error sending user information to Flask API:", error);
            });
    };

    return (
        <div className="chat-widget bg-gray-800 p-4 rounded-lg shadow-md max-w-md mx-auto mt-6">
            <h2 className="text-xl text-white mb-4">User Information</h2>

            {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="text-white" htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            className="w-full p-2 bg-white text-black rounded-lg border border-gray-600"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label className="text-white" htmlFor="gender">Gender:</label>
                        <select
                            id="gender"
                            className="w-full p-2 bg-white text-black rounded-lg border border-gray-600"
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                            required
                        >
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <div>
                        <label className="text-white" htmlFor="age">Age:</label>
                        <input
                            type="number"
                            id="age"
                            className="w-full p-2 bg-white text-black rounded-lg border border-gray-600"
                            value={age}
                            onChange={(e) => {
                                const inputAge = e.target.value;
                                if (inputAge >= 0) {
                                    setAge(inputAge);
                                }
                            }}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
                    >
                        Submit
                    </button>
                </form>
            ) : (
                <div className="bg-gray-200 p-4 rounded-lg">
                    <h3 className="text-Black">User Information Summary:</h3>
                    <p className="text-gray-600">Name: {name}</p>
                    <p className="text-gray-600">Gender: {gender}</p>
                    <p className="text-gray-600">Age: {age}</p>
                </div>
            )}
        </div>
    );
};

export default Chat;
