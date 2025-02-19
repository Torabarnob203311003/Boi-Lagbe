import React from 'react';

function Banner() {
    return (
        <div>
            <div className="hero bg-base-200 mb-10 mt-10 min-w-screen max-w-[1770px] mx-auto min-h-[600px] lg:min-h-[800px]">
                {/* Increased min-h for larger height */}
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src="https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="books"
                        className="  rounded-lg shadow-2xl  lg:ml-20"
                    />
                    <div className='lg:space-y-10'>
                        <h1 className="lg:text-5xl text-2xl font-bold">
                            Books to freshen up <br /> your bookshelf!
                        </h1>
                      
                        <button className="btn btn-primary 
                        text-xl font-bold bg-green-500 border-none text-white mt-7 lg:mt-5">View The List</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
