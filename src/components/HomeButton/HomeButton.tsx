import React from 'react'
import Logo from "../../assets/icons/Logo.svg";
interface HomePageProps{
    onClick: () => void;
}

const HomeButton = ({onClick}: HomePageProps) => {
  return (
    <button
    onClick={onClick}
    type="button"
    // onTouchStart={() => setOpenSidebar((prev) => !prev)}
    // onTouchStart={() => setOpenSidebar((prev) => !prev)}
    className=" bg-black absolute right-[40px] top-[40px] lg:hidden z-50 cursor-pointer hover:cursor-pointer"
  >
    <img src={Logo} alt="logo" />
  </button>
  )
}

export default HomeButton