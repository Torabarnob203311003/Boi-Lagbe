import React, { useEffect, useState } from 'react';

function ListedBooks() {
    const [wishlist, setWishlist] = useState([]);

    // Fetch wishlist from localStorage
    useEffect(() => {
        const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        setWishlist(storedWishlist);
    }, []);

    // Clear wishlist
    const clearWishlist = () => {
        setWishlist([]); // Clear the wishlist state
        localStorage.removeItem('wishlist'); // Remove the wishlist from localStorage
    };

    return (
        <div className="flex flex-col min-h-screen">
            <div className="container mx-auto px-4 py-10 flex-grow">
                <h2 className="text-2xl font-bold mb-6">Your Wishlist</h2>

                {/* Clear All Button, only show when there are books */}
                {wishlist.length > 0 && (
                    <button
                        onClick={clearWishlist}
                        className="text-white bg-red-600 hover:bg-red-700 font-medium rounded-lg text-sm px-4 py-2 mb-6"
                    >
                        Clear All
                    </button>
                )}

                {/* Display wishlist items */}
                {wishlist.length === 0 ? (
                    <div className="text-center text-gray-600">No books in your wishlist.</div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {wishlist.map((book, index) => (
                            <div key={index} className="bg-white shadow-lg rounded-lg p-6">
                                <img src={book.image} alt={book.bookName} className="w-full h-48 object-cover rounded-lg mb-4" />
                                <h3 className="text-xl font-semibold">{book.bookName}</h3>
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

export default ListedBooks;