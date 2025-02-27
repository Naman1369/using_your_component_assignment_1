// write the book component code here
import React from "react";

const BookCard = ({ image, name, genre, author }) => {
  return (
    <div className="border rounded-lg shadow-md p-4 max-w-xs bg-white">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover rounded-md"
      />
      <h2 className="text-lg font-semibold mt-2">{name}</h2>
      <p className="text-sm text-gray-600">Genre: {genre}</p>
      <p className="text-sm text-gray-600">Author: {author}</p>
    </div>
  );
};

export default BookCard;

