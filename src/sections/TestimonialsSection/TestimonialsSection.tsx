import Logo from "../../assets/icons/Logo.svg";
import { Testimonial } from "../../components";
import DragableCarousel from "./DragableCarousel/DragableCarousel";
const TestimonialsSection = () => {
  return (
    <div className="w-full flex flex-col justify-center gap-4 pb-16 py-8 md:py-0 md:pb-16">
      <div className="text-white flex flex-col md:pr-16">
        <div className="self-start text-[25px] font-medium py-4 md:self-end">Testimonials</div>
        <hr/>
      </div>
      <div className="flex gap-4 flex-col items-center md:flex-row md:items-end">
        <img src={Logo} alt="logo" />
        <DragableCarousel>
          <Testimonial
            size="small"
            name="Jack F"
            title="Ex Blackrock PM"
            content="“Love how Loch integrates portfolio analytics and whale watching into one unified app.”"
          />
          <Testimonial
            size="small"
            name="Yash P"
            title="Research, 3poch Crypto Hedge Fund"
            content={`“I use Loch everyday now. I don't think I could analyze crypto whale trends markets without it. I'm addicted!”`}
          />
          <Testimonial
            size="large"
            name="Shiv S"
            title="Co-Founder Magik Labs"
            content={`“Managing my own portfolio is helpful and well designed. What’s really interesting is watching the whales though. No one else has made whale tracking so simple.”`}
          />
        </DragableCarousel>
      </div>
    </div>
  );
};

export default TestimonialsSection;
