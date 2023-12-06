import "./App.css";
import {
  EmailSection,
  NotificationSection,
  StatsSection,
  TestimonialsSection,
} from "./sections";

function App() {
  return (
    <div className="w-screen h-screen bg-radial-bg bg-center bg-cover overflow-x-scroll  flex relative pl-16 pr-8 pt-16 pb-16  box-border">
      <div className="flex flex-col w-[calc(100%-40.6%)] relative pb-16">
        <NotificationSection />
        <StatsSection />
        <TestimonialsSection />
      </div>
        <EmailSection />

    </div>
  );
}

export default App;
