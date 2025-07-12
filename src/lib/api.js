export const fetchPhotographers = async () => {
  const res = await fetch('http://localhost:3001/photographers');
  return res.json();
};

export const fetchPhotographerById = async (id) => {
  const res = await fetch(`http://localhost:3001/photographers/${id}`);
  return res.json();
};
