function ResponsiveButton() {
  return (
    <>
      <br />
      <br />
      <h2 className="font-bold"> mobile-first</h2>
      <ul className="text-slate-700">
        <li>sm: min-width: 640px</li>
        <li>md: min-width: 768px</li>
        <li>lg: min-width: 1024px</li>
        <li>xl: min-width: 1280px</li>
      </ul>
      <button className="bg-blue-500 sm:bg-orange-400 md:bg-red-500 lg:bg-green-500 xl:bg-slate-800 text-white py-2 px-4 rounded">
        Responsive
      </button>
    </>
  );
}

export default ResponsiveButton;
