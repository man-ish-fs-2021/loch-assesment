import { FormEvent, useState } from "react";
import Logo from "../../assets/icons/Logo.svg";

interface EmailSectionProps {
  setOpenSidebar: (value: React.SetStateAction<boolean>) => void;
  openSidebar?: boolean;
}

const EmailSection = ({
  setOpenSidebar,
  openSidebar = false,
}: EmailSectionProps) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const onClickButton = () => {
    if (!email) return;
    window.open("https://app.loch.one/welcome", "_blank");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (!/^[A-Z0-9. _%+-]+@[A-Z0-9. -]+\.[A-Z]{2,}$/i.test(e.target.value)) {
      setError(true);
    } else {
      setError(false);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!error) {
      // Submit the form
    }
  };
  console.log("in email", { openSidebar });

  return (
    <div
      className={`h-full transition-all ease-in-out duration-200  fixed right-0 w-full top-0 z-10  ${
        openSidebar ? "block" : "hidden"
      }  lg:block lg:w-[40%]`}
    >
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setOpenSidebar((prev) => !prev)
        }}
        type="button"
        // onTouchStart={() => setOpenSidebar((prev) => !prev)}
        // onTouchStart={() => setOpenSidebar((prev) => !prev)}
        className=" bg-black absolute right-[40px] top-[40px] lg:hidden z-50 cursor-pointer"
      >
        <img src={Logo} alt="logo" />
      </button>

      <div className="w-full h-screen bg-white shadow-side2 flex items-center justify-center p-6">
        <div className="w-[365px] flex flex-col items-start justify-center gap-6">
          <div className="text-[39px] text-neutral-300 font-medium ">
            Sign up for exclusive access.
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
            <div className="w-full">
              <input
                onChange={handleChange}
                value={email}
                type="email"
                placeholder="Your email address"
                className="flex-shrink-0 border-neutral-100 border-[1px] w-[100%] h-[60px] rounded-[8px] py-[24px] px-[20px]"
              />
              {error && <p>Please enter a valid email</p>}
            </div>
            <div className="w-full">
              <button
                onClick={onClickButton}
                disabled={error}
                className="flex-shrink-0 bg-gray-900 text-white hover:bg-black w-full h-[60px] rounded-[8px] border-black border-[1px]"
              >
                Get started
              </button>
            </div>
          </form>
          <div>You'll receive an email with an invite link to join.</div>
        </div>
      </div>
    </div>
  );
};

export default EmailSection;
