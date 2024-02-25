import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./styles.module.css";

const Footer = () => {
  return (
    <section
      className={`${styles.footer} flex items-center h-20 md:h-24 w-full justify-evenly`}
    >
      <Link href={"https://www.linkedin.com/in/vanurag173/"} target="_blank">
        <Image
          src={"/images/linkedin.png"}
          alt="linked in"
          title="See you on LinkedIn!"
          width={0}
          height={0}
          sizes="100vw"
          className={styles.social}
        />
      </Link>

      <Link href={"https://www.instagram.com/anurag.volety/"} target="_blank">
        <Image
          src={"/images/instagram.png"}
          alt="instagram"
          width={0}
          height={0}
          sizes="100vw"
          className={styles.social}
          title="Let's connect on Instagram."
        />
      </Link>
      <Link href={"mailto:anurag@volety.dev"} target="_blank">
        <Image
          src={"/images/mail.png"}
          alt="Mail"
          title="Send me a mail!"
          width={0}
          height={0}
          sizes="100vw"
          className={styles.social}
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
          width={0}
          height={0}
          sizes="100vw"
          className={styles.resume}
        />
      </Link>
    </section>
  );
};

export default Footer;
