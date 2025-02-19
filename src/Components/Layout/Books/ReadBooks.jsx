import React, { useEffect, useState } from 'react';

function ReadBooks() {
    const [readBooks, setReadBooks] = useState([]);

    // Fetch read books from localStorage
    useEffect(() => {
        const storedReadBooks = JSON.parse(localStorage.getItem('readBooks')) || [];
        setReadBooks(storedReadBooks);
    }, []);

    return (
        <div className="flex flex-col min-h-screen">
            <div className="container mx-auto px-4 py-10 flex-grow">
                <h2 className="text-2xl font-bold mb-6">Your Read Books</h2>

                {/* Display message if no read books are available */}
                {readBooks.length === 0 ? (
                    <div className="text-center text-gray-600">No read books available.</div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {readBooks.map((book, index) => (
                            <div key={index} className="bg-white shadow-lg rounded-lg p-6">
                                <img src={book.image} alt={book.bookName} className="w-full h-48 object-cover rounded-lg mb-4" />
                                <h3 className="text-xl font-semibold">{book.bookName}</h3>
                                <p className="text-gray-600">Author: {book.author}</p>
                                <p className="text-gray-600">Read Date: {book.readDate}</p>
                                <p className="text-gray-600">Description/Review: {book.description}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Footer, fixed at the bottom */}
            <footer className="bg-gray-800 text-white py-4 mt-auto">
                <div className="container mx-auto text-center">
                    <p>&copy; 2025 Boi Lagbe . All rights reserved By Torab.</p>
                </div>
            </footer>
        </div>
    );
}

export default ReadBooks;
