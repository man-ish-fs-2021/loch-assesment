/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        text: " 0px 4px 4px 0px #000000",
        notification: "0px 2.799999952316284px 7px 0px #000000",
        side: "0px 14px 64px -4px #18274B",
        side2: "0px 8px 22px -6px #18274B",
      },
      backgroundImage: {
        "notification-bg":
          "linear-gradient(180deg, rgba(255, 255, 255, 0.2) 27.5%, rgba(22, 93, 255, 0.162) 157.71%)",
        "radial-bg":
          "radial-gradient(79.84% 79.84% at 32.27% 91.27%, rgba(31, 169, 17, 0.810119) 17.21%, #2F15D0 64.58%, rgba(0, 0, 0, 1) 100%)",
      },
      backgroundColor: {
        "radial-bg-color":
          "radial-gradient(79.84% 79.84% at 32.27% 91.27%, rgba(31, 169, 17, 0.810119) 17.21%, #2F15D0 64.58%, rgba(0, 0, 0, 0) 100%)",
      },
      boxShadow: {
        notification: "0px 2.799999952316284px 7px 0px #000000",
        side: "0px 14px 64px -4px #18274B",
        side2: "-20px 0px 22px -10px #18274B",
        side12: "-20px 0px 22px -10px #18274B,10px 0px 22px -10px #18274B",
      },
      borderRadius: {
        notification: "8.4px",
      },
      textColor: {
        sub: "#F2F2F2",
      },
      width: {
        "testimonial-small": "350px",
        "testimonial-large": "530px",
      },
    },
  },
  plugins: [],
};
