import React from "react";

const CardProduct = ({ product }) => {
  if (!product) return null;

  const { item, price, currency, user, location, date, type } = product;

  return (
    <div className="w-full max-w-sm rounded-2xl p-4 shadow-lg bg-gradient-to-br from-pink-100 to-yellow-100 dark:from-gray-900 dark:to-gray-800 transition duration-300">
      <header className="flex items-center justify-between mb-3">
        <span
          className={`text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wide ${
            type === "sell"
              ? "bg-green-500 text-white dark:bg-green-400"
              : "bg-blue-500 text-white dark:bg-blue-400"
          }`}
        >
          {type}
        </span>
        <span className="text-xs text-gray-700 dark:text-gray-300">
          {new Date(date).toLocaleDateString()}
        </span>
      </header>
      <h3 className="text-xl font-extrabold text-purple-700 dark:text-purple-300 mb-1">
        {item}
      </h3>
      <p className="text-sm font-medium text-gray-800 dark:text-gray-200 mb-3">
        📍 {location}
      </p>
      <div className="flex items-center justify-between mt-4">
        <span className="text-lg font-bold text-orange-600 dark:text-orange-300">
          {currency} {price}
        </span>
        <span className="text-sm text-gray-600 dark:text-gray-400 italic">
          👤 {user}
        </span>
      </div>
    </div>
  );
};

export default CardProduct;
