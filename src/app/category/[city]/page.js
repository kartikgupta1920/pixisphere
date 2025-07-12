'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import PhotographerCard from '@/components/PhotographerCard';
import Filters from '@/components/Filters';
import SearchBar from '@/components/SearchBar';
export default function CategoryPage({ params }) {
  const [photographers, setPhotographers] = useState([]);
  const [filters, setFilters] = useState({ city: params.city, search: '', rating: 0, styles: [], priceRange: [0, 20000] });
  const [filtered, setFiltered] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3001/photographers').then(res => setPhotographers(res.data));
  }, []);
  useEffect(() => {
    const result = photographers.filter(p =>
      p.location === filters.city &&
      p.name.toLowerCase().includes(filters.search.toLowerCase()) &&
      p.rating >= filters.rating &&
      (filters.styles.length === 0 || filters.styles.some(style => p.styles.includes(style))) &&
      p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1]
    );
    setFiltered(result);
  }, [filters, photographers]);
  return (
    <div className="flex flex-col md:flex-row">
      <Filters onFilterChange={setFilters} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 flex-1">
        {filtered.map(p => <PhotographerCard key={p.id} photographer={p} />)}
      </div>
    </div>
  );
}