'use client';
import Link from 'next/link';
export default function PhotographerCard({ photographer }) {
  return (
    <div className="border p-4 rounded shadow hover:shadow-md">
      <img src={photographer.profilePic} alt={photographer.name} className="w-full h-40 object-cover rounded" />
      <h2 className="text-lg font-bold mt-2">{photographer.name}</h2>
      <p className="text-sm text-gray-600">{photographer.location}</p>
      <p className="text-sm">₹{photographer.price}</p>
      <p className="text-yellow-500">⭐ {photographer.rating}</p>
      <div className="flex flex-wrap gap-2 mt-2">
        {photographer.tags.map((tag) => (<span key={tag} className="bg-gray-200 px-2 py-1 rounded text-xs">{tag}</span>))}
      </div>
      <Link href={`/photographer/${photographer.id}`}>
        <button className="mt-3 w-full bg-blue-600 text-white py-1 rounded">View Profile</button>
      </Link>
    </div>
  );
}