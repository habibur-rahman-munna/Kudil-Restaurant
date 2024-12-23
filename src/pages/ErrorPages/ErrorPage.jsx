import React from 'react';
import { useRouteError } from "react-router-dom";
import CustomBtn from '../../Components/CustomBtn';

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-black">
      <h1 className="text-6xl font-bold text-white capitalize">Oops!</h1>
      <p className="text-white mt-6 font-medium ">Something went wrong.</p>
      <p className="text-gray-400 mt-4">
        <i className='text-white not-italic text-base capitalize font font-medium'>{error.statusText || error.message}</i>
      </p>
      <CustomBtn link='/'>back to home</CustomBtn>
    </div>
  );
};

export default ErrorPage;