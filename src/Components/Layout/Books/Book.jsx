import React from 'react';
import { Link } from 'react-router-dom';

function Book({ book }) {
    const { bookId, image, bookName, author, rating } = book; // Assuming "rating" is part of the book data

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            if (i < rating) {
                stars.push(<span key={i} className="text-yellow-500">★</span>);
            } else {
                stars.push(<span key={i} className="text-gray-400">★</span>);
            }
        }
        return stars;
    };

    return (
        <Link to= {`/books/${bookId}`}>
            <div className="card bg-base-100 w-full shadow-xl mx-auto mt-5 lg:mt-10 md:mt-8">
                <figure>
                    <img
                        className="max-w-full max-h-96 object-cover"
                        src={image} // Dynamically setting the image from the book data
                        alt={bookName}
                    />
                </figure>
                <div className="card-actions justify-center mt-5">
                    <div className="badge badge-outline">Fiction</div>
                    <div className="badge badge-outline">Books</div>
                </div>
                <div className="card-body">
                    <h2 className="card-title justify-center">{bookName}</h2>
                    <p className="text-center">Author: {author}</p>
                    <div className="flex justify-center mt-2">
                        {renderStars(rating)} {/* Display the stars based on rating */}
                    </div>
                </div>
            </div>
       
       </Link>
    );
}

export default Book;
