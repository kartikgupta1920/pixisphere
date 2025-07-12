export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className="bg-gray-50 font-sans">{children}</body>
    </html>
  );
}