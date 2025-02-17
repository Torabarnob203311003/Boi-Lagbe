import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const booksData = [
    {
        "bookId": 1,
        "bookName": "The Great Gatsby",
        "author": "F. Scott Fitzgerald",
        "image": "https://i.ibb.co.com/khHN7Pk/9780143454212.jpg",
        "review": "'The Great Gatsby' by F. Scott Fitzgerald is a timeless masterpiece that delves into the decadence and disillusionment of the Jazz Age. Set in the Roaring Twenties, the novel unveils the enigmatic Jay Gatsby's extravagant parties, masking a pursuit of lost love. Narrated by Nick Carraway, the story explores themes of wealth, love, and the American Dream, drawing readers into a vivid portrayal of the glittering yet elusive world of the East and West Egg. Fitzgerald's prose is both poetic and haunting, weaving a compelling narrative that transcends its era. A poignant exploration of societal excess and the human condition, 'The Great Gatsby' remains a literary gem that resonates across generations.",
        "totalPages": 192,
        "rating": 4.5,
        "category": "Classic",
        "tags": ["Fiction", "Romance"],
        "publisher": "Scribner",
        "yearOfPublishing": 1925
    },
    {
        "bookId": 2,
        "bookName": "To Kill a Mockingbird",
        "author": "Harper Lee",
        "image": "https://i.ibb.co.com/0cv102J/To-Kill-a-Mockingbird.webp",
        "review": "'The Great Gatsby' by F. Scott Fitzgerald is a timeless masterpiece that delves into the decadence and disillusionment of the Jazz Age. Set in the Roaring Twenties, the novel unveils the enigmatic Jay Gatsby's extravagant parties, masking a pursuit of lost love. Narrated by Nick Carraway, the story explores themes of wealth, love, and the American Dream, drawing readers into a vivid portrayal of the glittering yet elusive world of the East and West Egg. Fitzgerald's prose is both poetic and haunting, weaving a compelling narrative that transcends its era. A poignant exploration of societal excess and the human condition, 'The Great Gatsby' remains a literary gem that resonates across generations.",
        "totalPages": 281,
        "rating": 4.8,
        "category": "Fiction",
        "tags": ["Drama", "Social Justice"],
        "publisher": "J.B. Lippincott & Co.",
        "yearOfPublishing": 1960
    },
    {
        "bookId": 3,
        "bookName": "1984",
        "author": "George Orwell",
        "image": "https://i.ibb.co.com/MprDyVt/51-BIA4rrae-L-AC-UF1000-1000-QL80.jpg",
        "review": "'The Great Gatsby' by F. Scott Fitzgerald is a timeless masterpiece that delves into the decadence and disillusionment of the Jazz Age. Set in the Roaring Twenties, the novel unveils the enigmatic Jay Gatsby's extravagant parties, masking a pursuit of lost love. Narrated by Nick Carraway, the story explores themes of wealth, love, and the American Dream, drawing readers into a vivid portrayal of the glittering yet elusive world of the East and West Egg. Fitzgerald's prose is both poetic and haunting, weaving a compelling narrative that transcends its era. A poignant exploration of societal excess and the human condition, 'The Great Gatsby' remains a literary gem that resonates across generations.",
        "totalPages": 328,
        "rating": 4.6,
        "category": "Fiction",
        "tags": ["Dystopian", "Political"],
        "publisher": "Secker & Warburg",
        "yearOfPublishing": 1949
    },
    {
        "bookId": 4,
        "bookName": "The Catcher in the Rye",
        "author": "J.D. Salinger",
        "image": "https://i.ibb.co.com/tYSWRfG/catcherrye-edited-1-800x.png",
        "review": "'The Great Gatsby' by F. Scott Fitzgerald is a timeless masterpiece that delves into the decadence and disillusionment of the Jazz Age. Set in the Roaring Twenties, the novel unveils the enigmatic Jay Gatsby's extravagant parties, masking a pursuit of lost love. Narrated by Nick Carraway, the story explores themes of wealth, love, and the American Dream, drawing readers into a vivid portrayal of the glittering yet elusive world of the East and West Egg. Fitzgerald's prose is both poetic and haunting, weaving a compelling narrative that transcends its era. A poignant exploration of societal excess and the human condition, 'The Great Gatsby' remains a literary gem that resonates across generations.",
        "totalPages": 224,
        "rating": 4.3,
        "category": "Fiction",
        "tags": ["Young Adult", "Identity"],
        "publisher": "Little, Brown and Company",
        "yearOfPublishing": 1951
    },
    {
        "bookId": 5,
        "bookName": "Pride and Prejudice",
        "author": "Jane Austen",
        "image": "https://i.ibb.co.com/YdQDMpn/81me-ud-V63-L-AC-UF1000-1000-QL80.jpg",
        "review": "'The Great Gatsby' by F. Scott Fitzgerald is a timeless masterpiece that delves into the decadence and disillusionment of the Jazz Age. Set in the Roaring Twenties, the novel unveils the enigmatic Jay Gatsby's extravagant parties, masking a pursuit of lost love. Narrated by Nick Carraway, the story explores themes of wealth, love, and the American Dream, drawing readers into a vivid portrayal of the glittering yet elusive world of the East and West Egg. Fitzgerald's prose is both poetic and haunting, weaving a compelling narrative that transcends its era. A poignant exploration of societal excess and the human condition, 'The Great Gatsby' remains a literary gem that resonates across generations.",
        "totalPages": 279,
        "rating": 4.7,
        "category": "Classic",
        "tags": ["Romance", "Satire"],
        "publisher": "T. Egerton, Whitehall",
        "yearOfPublishing": 1813
    },
    {
        "bookId": 6,
        "bookName": "The Hobbit",
        "author": "J.R.R. Tolkien",
        "image": "https://i.ibb.co.com/xS8YvxL/81m-CE-uclx-L-UF1000-1000-QL80.jpg",
        "review": "'The Great Gatsby' by F. Scott Fitzgerald is a timeless masterpiece that delves into the decadence and disillusionment of the Jazz Age. Set in the Roaring Twenties, the novel unveils the enigmatic Jay Gatsby's extravagant parties, masking a pursuit of lost love. Narrated by Nick Carraway, the story explores themes of wealth, love, and the American Dream, drawing readers into a vivid portrayal of the glittering yet elusive world of the East and West Egg. Fitzgerald's prose is both poetic and haunting, weaving a compelling narrative that transcends its era. A poignant exploration of societal excess and the human condition, 'The Great Gatsby' remains a literary gem that resonates across generations.",
        "totalPages": 310,
        "rating": 4.9,
        "category": "Fantasy",
        "tags": ["Adventure", "Epic"],
        "publisher": "Allen & Unwin",
        "yearOfPublishing": 1937
    },
    {
        "bookId": 7,
        "bookName": "Harry Potter and the Sorcerer's Stone",
        "author": "J.K. Rowling",
        "image": "https://i.ibb.co.com/989qMRW/42844155.jpg",
        "review": "'The Great Gatsby' by F. Scott Fitzgerald is a timeless masterpiece that delves into the decadence and disillusionment of the Jazz Age. Set in the Roaring Twenties, the novel unveils the enigmatic Jay Gatsby's extravagant parties, masking a pursuit of lost love. Narrated by Nick Carraway, the story explores themes of wealth, love, and the American Dream, drawing readers into a vivid portrayal of the glittering yet elusive world of the East and West Egg. Fitzgerald's prose is both poetic and haunting, weaving a compelling narrative that transcends its era. A poignant exploration of societal excess and the human condition, 'The Great Gatsby' remains a literary gem that resonates across generations.",
        "totalPages": 309,
        "rating": 4.8,
        "category": "Fantasy",
        "tags": ["Magic", "Young Adult"],
        "publisher": "Bloomsbury",
        "yearOfPublishing": 1997
    },
    {
        "bookId": 8,
        "bookName": "The Alchemist",
        "author": "Paulo Coelho",
        "image": "https://i.ibb.co.com/zS9jsdK/18144590.jpg",
        "review": "'The Great Gatsby' by F. Scott Fitzgerald is a timeless masterpiece that delves into the decadence and disillusionment of the Jazz Age. Set in the Roaring Twenties, the novel unveils the enigmatic Jay Gatsby's extravagant parties, masking a pursuit of lost love. Narrated by Nick Carraway, the story explores themes of wealth, love, and the American Dream, drawing readers into a vivid portrayal of the glittering yet elusive world of the East and West Egg. Fitzgerald's prose is both poetic and haunting, weaving a compelling narrative that transcends its era. A poignant exploration of societal excess and the human condition, 'The Great Gatsby' remains a literary gem that resonates across generations.",
        "totalPages": 177,
        "rating": 4.6,
        "category": "Fiction",
        "tags": ["Philosophical", "Adventure"],
        "publisher": "HarperCollins",
        "yearOfPublishing": 1988
    },
    {
        "bookId": 9,
        "bookName": "The Girl on the Train",
        "author": "Paula Hawkins",
        "image": "https://i.ibb.co.com/P6hfCmJ/Whats-App-Image-2024-05-22-at-11-21-25-2e21ae46.jpg",
        "review": "'The Great Gatsby' by F. Scott Fitzgerald is a timeless masterpiece that delves into the decadence and disillusionment of the Jazz Age. Set in the Roaring Twenties, the novel unveils the enigmatic Jay Gatsby's extravagant parties, masking a pursuit of lost love. Narrated by Nick Carraway, the story explores themes of wealth, love, and the American Dream, drawing readers into a vivid portrayal of the glittering yet elusive world of the East and West Egg. Fitzgerald's prose is both poetic and haunting, weaving a compelling narrative that transcends its era. A poignant exploration of societal excess and the human condition, 'The Great Gatsby' remains a literary gem that resonates across generations.",
        "totalPages": 316,
        "rating": 4.2,
        "category": "Mystery",
        "tags": ["Suspense", "Psychological"],
        "publisher": "Riverhead Books",
        "yearOfPublishing": 2015
    }

];

function BookDetails() {
    const { bookId } = useParams();
    const book = booksData.find(b => b.bookId === parseInt(bookId, 10));

    const addToWishlist = () => {
        const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        const bookInWishlist = storedWishlist.find(b => b.bookId === book.bookId);

        if (!bookInWishlist) {
            storedWishlist.push({
                bookId: book.bookId,
                bookName: book.bookName,
                image: book.image
            });
            localStorage.setItem('wishlist', JSON.stringify(storedWishlist));
        }
    };


    // State to manage wishlist
    const [wishlist, setWishlist] = useState([]);

    if (!book) {
        return <div className="text-center text-red-500 font-bold text-xl mt-10">Book not found!</div>;
    }

    const renderStars = (rating) => {
        return [...Array(5)].map((_, i) => (
            <span key={i} className={i < rating ? "text-yellow-500" : "text-gray-400"}>★</span>
        ));
    };

    const handleWishlist = () => {
        // Add the book to the wishlist
        const newWishlist = [...wishlist, { name: book.bookName, image: book.image }];
        setWishlist(newWishlist);
        console.log('Added to wishlist:', newWishlist); // You can also handle saving the wishlist to localStorage or a server
    };

    return (
        <div className="container mx-auto px-4 py-10">
            <div className="bg-white shadow-lg rounded-lg p-6 md:flex md:items-start md:space-x-6">

                {/* Book Image */}
                <div className="md:w-1/3 flex justify-center">
                    <img src={book.image} alt={book.bookName} className="w-full max-w-xs object-cover rounded-lg" />
                </div>

                {/* Book Details */}
                <div className="md:w-2/3 mt-6 md:mt-0">
                    <h2 className="text-2xl font-bold">{book.bookName}</h2>
                    <p className="text-gray-600 text-lg">By: <span className="font-semibold">{book.author}</span></p>
                    <p className="text-gray-700 mt-2"><span className="font-semibold">Category:</span> {book.category}</p>

                    {/* Review */}
                    <p className="text-gray-700 mt-4"><span className="font-semibold">Review:</span> {book.review}</p>

                    {/* Tags */}
                    <div className="mt-3 flex flex-wrap gap-2">
                        {book.tags.map((tag, index) => (
                            <span key={index} className="bg-green-100 text-green-800 px-2 py-1 text-sm font-medium rounded">
                                #{tag}
                            </span>
                        ))}
                    </div>

                    {/* Book Info */}
                    <div className="grid gap-4 mt-4">
                        <p><span className="font-semibold">Pages:</span> {book.totalPages}</p>
                        <p><span className="font-semibold">Publisher:</span> {book.publisher}</p>
                        <p><span className="font-semibold">Year:</span> {book.yearOfPublishing}</p>
                        <p><span className="font-semibold">Rating:</span> {renderStars(book.rating)} ({book.rating}/5)</p>
                    </div>

                    {/* Buttons */}
                    <div className="mt-6 flex space-x-4">
                        <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-blue-700 transition">Read</button>
                        <button onClick={addToWishlist} className="bg-cyan-500 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition">Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookDetails;
