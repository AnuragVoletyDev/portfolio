import localFont from "next/font/local";

export const SFPro = localFont({
    src: [
      {
        path: "../public/fonts/SF-Pro-Text-Semibold.otf",
        weight: "400",
      },
    ],
    variable: "--font-sf-pro",
  });
  
  export const LeagueSpartan = localFont({
    src: [
      {
        path: "../public/fonts/LeagueSpartan-Bold.otf",
        weight: "700",
      },
    ],
    variable: "--font-league-spartan",
  });
  