import { motion, useScroll } from "framer-motion";
import React from "react";
import { useDeviceMotion, useDeviceOrientation } from "the-platform";
import "./Playground.css";

export const Playground: React.FC = () => {
  // input
  const { scrollYProgress } = useScroll();
  const { acceleration, accelerationIncludingGravity, rotationRate } =
    useDeviceMotion();
  const { alpha, beta, gamma } = useDeviceOrientation();

  // ui
  return (
    <div className="playground-container">
      <motion.img
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        src="https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-hero-220907_Full-Bleed-Image.jpg.large_2x.jpg"
      />
      <motion.h1
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
      >
        Dynamic Island: An Interactive User Experience
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
      >
        The Dynamic Island enables new ways to interact with iPhone, featuring a
        design that blends the line between hardware and software, adapting in
        real time to show important alerts, notifications, and activities.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
      >
        With the introduction of the Dynamic Island, the TrueDepth camera has
        been redesigned to take up less of the display area.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
      >
        Without impeding content on the screen, the Dynamic Island maintains an
        active state to allow users easier access to controls with a simple
        tap-and-hold.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
      >
        Ongoing background activities like Maps, Music, or a timer remain
        visible and interactive, and third-party apps in iOS 16 that provide
        information like sports scores and ride-sharing with Live Activities can
        take advantage of the Dynamic Island.
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
      >
        Featuring iOS 16
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
      >
        Designed to take advantage of the new capabilities of iPhone 14 Pro, iOS
        16 features a reimagined Lock Screen along with new communication,
        sharing, and intelligence features that together change the way users
        experience iPhone.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
      >
        The Lock Screen is more personal, beautiful, and helpful than ever with
        a multilayered effect that artfully sets subjects of photos in front of
        the time, and newly designed widgets that offer information at a glance.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
      >
        For Lock Screen inspiration, the wallpaper gallery offers a range of
        options, including Apple collections, a Weather wallpaper to see live
        weather conditions as they change throughout the day, an Astronomy
        wallpaper for views of the Earth, moon, and solar system, and many more.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
      >
        With Messages, users can now edit or recall recently sent messages, and
        mark conversations as unread to revisit them later.9 iCloud Shared Photo
        Library makes it even easier to share a collection of photos with
        family.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
      >
        10 Live Text gets more powerful with the ability to recognize text in
        video and quickly convert currency, translate text, and more, and Visual
        Look Up adds a new feature that allows users to tap and hold on the
        subject of an image to lift it from the background and place it in apps
        like Messages.
      </motion.p>
      <div className="floating-container">
        <motion.div
          className="plate"
          animate={{
            rotateZ: alpha,
            rotateX: -beta,
            rotateY: -gamma,
            transition: {
              duration: 0,
            },
          }}
          whileTap={{
            scale: 0.8,
          }}
        />
      </div>
    </div>
  );
};
