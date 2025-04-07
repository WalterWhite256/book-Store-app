import React, { useEffect } from 'react';
import InputField from '../addBook/InputField';
import SelectField from '../addBook/SelectField';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useGetBookByIdQuery } from '../../../redux/features/cart/booksApi';
import Loading from '../../../components/Loading';
import Swal from 'sweetalert2';
import axios from 'axios';
import getBaseUrl from '../../../utils/baseURL';

const UpdateBook = () => {
  const { id } = useParams();

  // Fetch the book by ID
  const { data, isLoading, isError, refetch } = useGetBookByIdQuery(id);
  const book = data?.books;

  // Setup form
  const { register, handleSubmit, setValue } = useForm();

  // Pre-fill the form once book data is available
  useEffect(() => {
    if (book) {
      setValue('title', book.title);
      setValue('description', book.description);
      setValue('category', book.category);
      setValue('trending', book.trending);
      setValue('oldPrice', book.oldPrice);
      setValue('newPrice', book.newPrice);
      setValue('coverImage', book.coverImage);
    }
  }, [book, setValue]);

  // Submit handler
  const onSubmit = async (formData) => {
    const updatedBook = {
      title: formData.title,
      description: formData.description,
      category: formData.category,
      trending: formData.trending || false,
      oldPrice: Number(formData.oldPrice),
      newPrice: Number(formData.newPrice),
      coverImage: formData.coverImage || book.coverImage,
    };

    try {
      await axios.put(`${getBaseUrl()}/api/books/edit/${id}`, updatedBook, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });

      Swal.fire({
        title: 'Book Updated',
        text: 'Your book has been updated successfully!',
        icon: 'success',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Okay',
      });

      await refetch();
    } catch (error) {
      console.error('Failed to update book:', error);
      alert('Failed to update book. Please try again.');
    }
  };

  if (isLoading) return <Loading />;
  if (isError) return <div>Error fetching book data</div>;

  return (
    <div className="max-w-lg mx-auto md:p-6 p-3 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Update Book</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField
          label="Title"
          name="title"
          placeholder="Enter book title"
          register={register}
        />

        <InputField
          label="Description"
          name="description"
          placeholder="Enter book description"
          type="textarea"
          register={register}
        />

        <SelectField
          label="Category"
          name="category"
          options={[
            { value: '', label: 'Choose A Category' },
            { value: 'business', label: 'Business' },
            { value: 'technology', label: 'Technology' },
            { value: 'fiction', label: 'Fiction' },
            { value: 'horror', label: 'Horror' },
            { value: 'adventure', label: 'Adventure' },
          ]}
          register={register}
        />

        <div className="mb-4">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              {...register('trending')}
              className="rounded text-blue-600 focus:ring focus:ring-offset-2 focus:ring-blue-500"
            />
            <span className="ml-2 text-sm font-semibold text-gray-700">Trending</span>
          </label>
        </div>

        <InputField
          label="Old Price"
          name="oldPrice"
          type="number"
          placeholder="Old Price"
          register={register}
        />

        <InputField
          label="New Price"
          name="newPrice"
          type="number"
          placeholder="New Price"
          register={register}
        />

        <InputField
          label="Cover Image URL"
          name="coverImage"
          type="text"
          placeholder="Cover Image URL"
          register={register}
        />

        <button type="submit" className="w-full py-2 bg-blue-500 text-white font-bold rounded-md">
          Update Book
        </button>
      </form>
    </div>
  );
};

export default UpdateBook;
