import { NavLink } from 'react-router-dom';


const CustomBtn = ({children, link}) => {
  return (
    <div className='mt-4'>
      <NavLink to={link} className={`inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-base font-medium capitalize`}> {children} </NavLink>
    </div>
  )
}

export default CustomBtn;






