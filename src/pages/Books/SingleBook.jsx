import React from 'react';
import { FiShoppingCart } from "react-icons/fi";
import { useParams } from "react-router-dom";
import { getImgUrl } from '../../utils/getImgUrl';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/features/cart/cartSlice';
import { useGetBookByIdQuery } from '../../redux/features/cart/booksApi';

const SingleBook = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { data, isLoading, isError } = useGetBookByIdQuery(id);

  console.log("Book ID:", id);
  console.log("API Response:", data);
  console.log("isLoading:", isLoading, "| isError:", isError);

  const book = data?.book || data || null;

  const handleAddToCart = () => {
    if (book) {
      dispatch(addToCart(book));
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError || !book) return <div>Error loading book data</div>;

  return (
    <div className="max-w-lg shadow-md p-5">
      <h1 className="text-2xl font-bold mb-6">{book.title}</h1>

      <div>
        <img
          src={getImgUrl(book.coverImage)}
          alt={book.title}
          className="mb-8"
        />

        <div className="mb-5">
          <p className="text-gray-700 mb-2"><strong>Author:</strong> {book.author || 'admin'}</p>
          <p className="text-gray-700 mb-4">
            <strong>Published:</strong> {new Date(book?.createdAt).toLocaleDateString()}
          </p>
          <p className="text-gray-700 mb-4 capitalize">
            <strong>Category:</strong> {book?.category}
          </p>
          <p className="text-gray-700"><strong>Description:</strong> {book.description}</p>
        </div>

        <button
          onClick={handleAddToCart}
          className="btn-primary px-6 space-x-1 flex items-center gap-1"
        >
          <FiShoppingCart />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
};

export default SingleBook;
