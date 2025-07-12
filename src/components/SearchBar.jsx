'use client';
import { useState, useMemo } from 'react';
import debounce from 'lodash.debounce';

export default function SearchBar({ onSearch }) {
  const [input, setInput] = useState('');
  const debounced = useMemo(() => debounce(onSearch, 300), []);
  
  function handleChange(e) {
    setInput(e.target.value);
    debounced(e.target.value);
  }

  return (
    <input
      type="text"
      placeholder="Search..."
      value={input}
      onChange={handleChange}
      className="border p-2 w-full rounded mb-4"
    />
  );
}