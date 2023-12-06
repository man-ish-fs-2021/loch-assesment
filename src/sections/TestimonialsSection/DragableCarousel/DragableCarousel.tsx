import React, { useEffect, useRef } from "react";

const DragableCarousel = ({ children }: { children: React.ReactNode }) => {
  const slider = useRef<HTMLDivElement>(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  function one(e: MouseEvent) {
    if (!slider.current) return;
    isDown.current = true;
    startX.current = e.pageX - slider.current.offsetLeft;
    scrollLeft.current = slider.current.scrollLeft;
  }

  function two(e: MouseEvent) {
    if (!slider.current) return;

    isDown.current = true;
    startX.current = e.pageX - slider.current.offsetLeft;
    scrollLeft.current = slider.current.scrollLeft;
  }

  function three() {
    isDown.current = false;
  }

  function four() {
    isDown.current = false;
  }

  function five(e: MouseEvent) {
    if (!slider.current) return;
    if (!isDown.current) return;
    e.preventDefault();
    const x = e.pageX - slider.current.offsetLeft;
    const walk = x - startX.current;
    slider.current.scrollLeft = scrollLeft.current - walk;
  }
  useEffect(() => {
    if (slider && slider.current) {
      const sliderRef = slider.current;
      sliderRef.addEventListener("mousedown", one);
      sliderRef.addEventListener("mousedown", two);
      sliderRef.addEventListener("mouseleave", three);
      sliderRef.addEventListener("mouseup", four);
      sliderRef.addEventListener("mousemove", five);

      return () => {
        sliderRef.removeEventListener("mousedown", one);
        sliderRef.removeEventListener("mousedown", two);
        sliderRef.removeEventListener("mouseleave", three);
        sliderRef.removeEventListener("mouseup", four);
        sliderRef.removeEventListener("mousemove", five);
      };
    }
  }, []);
  return (
    <div
      className="w-full hover:cursor-pointer overflow-x-scroll overflow-y-hidden relative  transition-all delay-200  grid grid-flow-col no-scrollbar gap-4"
      ref={slider}
    >
      {children}
    </div>
  );
};

export default DragableCarousel;
