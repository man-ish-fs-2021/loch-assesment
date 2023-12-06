import "./App.css";
// import BarChart from  './assets/icons/bar-chart-2.svg';
import {
  EmailSection,
  NotificationSection,
  StatsSection,
  TestimonialsSection,
} from "./sections";
import { useState } from "react";
import { HomeButton } from "./components";

function App() {
  const [openSidebar, setOpenSidebar] = useState(false);
  const handleClick = () => {
    // e: React.MouseEvent<HTMLButtonElement, MouseEvent> |React.TouchEvent<HTMLButtonElement>
    // e.preventDefault();
    // e.stopPropagation()

    console.log('clicked');
    setOpenSidebar((prev) => !prev)
  }
  return (
    <div className="w-full h-full bg-radial-bg bg-center bg-cover overflow-x-scroll  flex relative p-4 py-10  box-border md:pl-16 md:pr-8 md:pt-16 md:pb-16">
      {/* <img className="w-[28px] h-[28px] text-white" src={BarChart} alt="bell" /> */}
      <HomeButton onClick={handleClick} />

      <div className="flex flex-col lg:w-[calc(100%-40.6%)] relative pb-16 w-full">
      
        <NotificationSection />
        <StatsSection />
        <TestimonialsSection />
      </div>
      <EmailSection openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
    </div>
  );
}

export default App;
