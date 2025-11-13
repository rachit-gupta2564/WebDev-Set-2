import React from 'react';

const Loader = () => (
  <div className="flex justify-center items-center py-8">
    <span className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-600"></span>
    <span className="ml-2 text-blue-600 font-semibold">Loading...</span>
  </div>
);

export default Loader;
