'use client';
export default function ReviewList({ reviews }) {
  return (
    <div>
      <h3 className="text-lg font-bold mt-4">Reviews</h3>
      {reviews.map((review, index) => (
        <div key={index} className="border p-2 mt-2 rounded">
          <p className="font-semibold">{review.name} ({review.rating}⭐)</p>
          <p>{review.comment}</p>
          <p className="text-xs text-gray-500">{review.date}</p>
        </div>
      ))}
    </div>
  );
}