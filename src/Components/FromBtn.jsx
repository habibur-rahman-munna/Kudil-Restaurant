import React from 'react';

const FromBtn = React.forwardRef(({ children, ...props }, ref) => (
  <button ref={ref}{...props}
    className="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-base font-medium capitalize">
    {children}
  </button>
));

export default FromBtn;