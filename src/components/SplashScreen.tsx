/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import splashVideo from '../assets/splash.mp4';

export default function SplashScreen() {
  const [visible, setVisible] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const pageLoaded = useRef(false);
  const minTimeReached = useRef(false);

  const tryHide = () => {
    if (pageLoaded.current && minTimeReached.current) {
      setVisible(false);
    }
  };

  useEffect(() => {
    const onLoad = () => {
      pageLoaded.current = true;
      tryHide();
    };

    if (document.readyState === 'complete') {
      pageLoaded.current = true;
    } else {
      window.addEventListener('load', onLoad);
    }

    return () => window.removeEventListener('load', onLoad);
  }, []);

  const handleMetadata = () => {
    const video = videoRef.current;
    if (!video) return;
    const duration = video.duration;
    if (!duration || !isFinite(duration)) return;

    setTimeout(() => {
      minTimeReached.current = true;
      tryHide();
    }, duration * 800);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
        >
          <video
            ref={videoRef}
            src={splashVideo}
            autoPlay
            loop
            muted
            playsInline
            fetchPriority="high"
            onLoadedMetadata={handleMetadata}
            className="max-w-xs w-full"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
