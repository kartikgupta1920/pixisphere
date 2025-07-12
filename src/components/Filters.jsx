import { useState } from 'react';
import Slider from 'rc-slider';

export default function Filters({ onFilterChange }) {
  const [rating, setRating] = useState(0);
  const [priceRange, setPriceRange] = useState([0, 20000]);
  const [styles, setStyles] = useState([]);

  const styleOptions = ['Traditional', 'Candid', 'Studio', 'Outdoor'];

  const handleStyleChange = (style) => {
    setStyles((prev) =>
      prev.includes(style) ? prev.filter((s) => s !== style) : [...prev, style]
    );
  };

  const applyFilters = () => {
    onFilterChange({ rating, priceRange, styles });
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-xs mx-auto space-y-6">
      <h2 className="text-xl font-semibold text-gray-800">Filters</h2>

      <div>
        <label className="block text-sm font-medium text-gray-600 mb-2">Rating: {rating}+</label>
        <Slider
          min={0}
          max={5}
          step={0.5}
          value={rating}
          onChange={(value) => setRating(value)}
          className="!text-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-600 mb-2">
          Price Range: ₹{priceRange[0]} - ₹{priceRange[1]}
        </label>
        <Slider
          range
          min={0}
          max={20000}
          value={priceRange}
          onChange={(value) => setPriceRange(value)}
          className="!text-blue-500"
        />
      </div>

      <div>
        <p className="block text-sm font-medium text-gray-600 mb-2">Styles</p>
        <div className="flex flex-wrap gap-2">
          {styleOptions.map((style) => (
            <label key={style} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={styles.includes(style)}
                onChange={() => handleStyleChange(style)}
                className="accent-blue-500"
              />
              <span className="text-sm text-gray-700">{style}</span>
            </label>
          ))}
        </div>
      </div>

      <button
        onClick={applyFilters}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-medium"
      >
        Apply Filters
      </button>
    </div>
  );
}
