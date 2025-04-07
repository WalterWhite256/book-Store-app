import React from 'react';
import { IoCartOutline } from "react-icons/io5";
import { getImgUrl } from '../../utils/getImgUrl'; // Assuming you have this utility function
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/features/cart/cartSlice';
// BookCard Component
const BookCard = ({ book}) => {
    // Assuming `getImgUrl` is a utility function that returns the image URL based on the book's cover image file name
    const imgUrl = getImgUrl(book.coverImage);  // This should return the correct path to the image
    const dispatch = useDispatch();
    const handleAddToCart = (product)=>{
        dispatch(addToCart(product))
    }
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4">
            {/* Book Image */}
            <Link to={`/books/${book._id}`}>
                <img
                    className="object-cover rounded-md"
                    src={imgUrl} // Dynamically load image using the utility function
                    alt={book.title}
                />
            </Link>
            {/* Book Title and Author */}
            <div className="mt-4">
                <Link to={`/books/${book._id}`}>
                    <h2 className="text-xl font-semibold text-gray-800">{book.title}</h2>
                </Link>

                <p className="text-gray-600">{book.category}</p>
            </div>

            {/* Book Description */}
            <p className="text-sm text-gray-700 mt-2">{book.description.length > 80 ? `${book.description.slice(0,80)}...` : book.description}</p>

            {/* Book Prices */}
            <div className="mt-2">
                <p className="text-lg font-medium text-gray-800">
                    ${book.newPrice}
                </p>
                {book.oldPrice && (
                    <p className="text-sm text-gray-500 line-through">
                        ${book.oldPrice}
                    </p>
                )}
            </div>

            {/* Add to Cart Button */}
            <button
                onClick={() => handleAddToCart(book)}  // Handle adding to cart
                className="flex justify-center mt-4 w-full py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition space-x-4 hover:cursor-pointer"
            >
                <IoCartOutline className='md:size-6' />
                <span>Add to Cart</span>
            </button>
        </div>
    );
};

export default BookCard;








// import React from 'react';

// // BookCard Component
// const BookCard = ({ book, addToCart }) => {
//   return (
//     <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4">
//       {/* Book Image */}
//       <img
//         className="w-full h-64 object-cover rounded-md"
//         src={book.imageUrl}
//         alt={book.title}
//       />

//       {/* Book Title and Author */}
//       <div className="mt-4">
//         <h2 className="text-xl font-semibold text-gray-800">{book.title}</h2>
//         <p className="text-gray-600">by {book.author}</p>
//       </div>

//       {/* Book Details */}
//       <div className="mt-2 text-gray-700">
//         <p className="text-lg font-medium">{book.price}</p>
//         <p className="text-sm">{book.description}</p>
//       </div>

//       {/* Add to Cart Button */}
//       <button
//         onClick={() => addToCart(book)}
//         className="mt-4 w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
//       >
//         Add to Cart
//       </button>
//     </div>
//   );
// };

// export default BookCard;