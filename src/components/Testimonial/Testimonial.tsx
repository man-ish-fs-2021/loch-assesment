import { twMerge } from "tailwind-merge";

type Size = "small" | "large";

interface Testimonial {
  name: string;
  title: string;
  content: string;
  size?: Size;
}

const Testimonial = ({ content, name, title, size = "small" }: Testimonial) => {
  return (
    <div
      className={twMerge(
        `max-h-[136px] h-[136px] flex flex-col p-4 gap-2 bg-white rounded-[12px]`,
        size === "small" ? `w-testimonial-small` : `w-testimonial-large`
      )}
    >
      <div className="flex gap-2 items-end ">
        <div className="text-[16px] font-semibold">{name}</div> <div className="text-[13px] text-neutral-400">{title}</div>
      </div>
      <div className="text-[16px]">{content}</div>
    </div>
  );
};

export default Testimonial;
