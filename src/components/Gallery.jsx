'use client';
export default function Gallery({ images }) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {images.map((img) => (
        <img key={img} src={img} alt="Gallery" className="w-full h-48 object-cover rounded" />
      ))}
    </div>
  );
}