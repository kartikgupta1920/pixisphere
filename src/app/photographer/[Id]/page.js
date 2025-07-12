export default async function PhotographerProfile({ params }) {
  const photographer = await fetchPhotographerById(params.id);
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{photographer.name}</h1>
      <p>{photographer.bio}</p>
      <div className="flex gap-2 mt-2">
        {photographer.styles.map((s) => (<span key={s} className="bg-gray-200 px-2 py-1 rounded text-xs">{s}</span>))}
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        {photographer.portfolio.map((img) => (<img key={img} src={img} alt="portfolio" className="w-full h-48 object-cover rounded" />))}
      </div>
      <h3 className="mt-6 font-semibold text-lg">Reviews:</h3>
      {photographer.reviews.map((r) => (
        <div key={r.comment} className="mt-2 p-2 border rounded">
          <p><strong>{r.name}</strong> ({r.rating}⭐)</p>
          <p className="text-sm text-gray-600">{r.comment}</p>
          <p className="text-xs text-gray-400">{r.date}</p>
        </div>
      ))}
    </div>
  );
}