import React from "react";
import bg from "../../../public/images/wallpaper.png";
import Image from "next/image";
import Link from "next/link";
import Time from "./Time";

const Screen = () => {
  return (
    <div
      className="text-white "
      style={{
        height: "100%",
        width: "100%",
        borderRadius: "54px",
        borderColor: "black",
        backgroundImage: `url(${bg.src})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        padding: 13,
        position: "relative",
      }}
    >
      <div
        style={{
          height: 38,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginLeft: 22,
          marginRight: 22,
        }}
      >
        <Time />
        <Image
          src={"/images/indicators.png"}
          alt="indicators"
          height={13}
          width={77}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 36,
        }}
      >
        <div
          className={`font-title`}
          style={{
            fontSize: 90,

            opacity: 0.69,
          }}
        >
          Anurag
        </div>
        <div
          className={`font-title`}
          style={{
            fontSize: 45,

            opacity: 0.69,
            lineHeight: "5px",
          }}
        >
          Volety
        </div>
      </div>
      <div
        style={{
          backgroundColor: "rgba(255,255,255, 0.41)",
          width: "94%",
          height: 100,
          borderRadius: 38,
          position: "absolute",
          bottom: 36,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          WebkitBoxShadow: "0px 25px 42px 11px rgba(0,0,0,0.75)",
          MozBoxShadow: "0px 25px 42px 11px rgba(0,0,0,0.75)",
          boxShadow: "0px 25px 42px 11px rgba(0,0,0,0.75)",
        }}
      >
        <Link href={"https://www.linkedin.com/in/vanurag173/"} target="_blank">
          <Image
            src={"/images/linkedin.png"}
            alt="linkedin"
            height={60}
            width={60}
            title="See you on LinkedIn!"
          />
        </Link>

        <Link href={"https://www.instagram.com/anurag.volety/"} target="_blank">
          <Image
            src={"/images/instagram.png"}
            alt="instagram"
            height={60}
            width={60}
            title="Let's connect on Instagram."
          />
        </Link>
        <Link href={"mailto:anurag@volety.dev"} target="_blank">
          <Image
            src={"/images/mail.png"}
            alt="Mail"
            title="Send me a mail!"
            height={60}
            width={60}
          />
        </Link>
        <Link
          href={
            "https://drive.google.com/file/d/1V6idroySK44ZZiMuToXSBOivtcoBwbtE/view?usp=sharing"
          }
          target="_blank"
        >
          <Image
            src={"/images/page.png"}
            alt="Resume"
            title="Have a look at my CV."
            height={48}
            width={48}
          />
        </Link>
      </div>
    </div>
  );
};

export default Screen;
