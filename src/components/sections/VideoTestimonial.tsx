"use client";

import { useCallback, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { DecorativeIcon } from "@/components/shared/DecorativeIcon";
import { Eyebrow } from "@/components/shared/Eyebrow";
import { SlideUp, ScaleIn } from "@/components/ui/motion";

interface VideoTestimonialProps {
  eyebrow: string;
  heading: string;
  videoSrc?: string;
  posterSrc?: string;
}

export function VideoTestimonial({
  eyebrow,
  heading,
  videoSrc,
  posterSrc,
}: VideoTestimonialProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const playAttemptedRef = useRef(false);
  const [ready, setReady] = useState(false);
  const [muted, setMuted] = useState(true);
  const [autoplayBlocked, setAutoplayBlocked] = useState(false);

  const attemptPlayback = useCallback(async () => {
    const video = videoRef.current;
    if (!video) return;

    if (playAttemptedRef.current) return;
    playAttemptedRef.current = true;

    try {
      await video.play();
      setAutoplayBlocked(false);
    } catch {
      // Keep controls available so users can always start playback manually.
      setAutoplayBlocked(true);
    }
  }, []);

  const handleReady = useCallback(() => {
    setReady(true);
    void attemptPlayback();
  }, [attemptPlayback]);

  const toggleMute = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    const nextMuted = !video.muted;
    video.muted = nextMuted;
    setMuted(nextMuted);

    if (!nextMuted && video.paused) {
      void video.play().catch(() => {
        setAutoplayBlocked(true);
      });
    }
  }, []);

  return (
    <section className="bg-warm py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-4 text-center md:px-8">
        <SlideUp>
          <DecorativeIcon variant="leaf" className="mb-6" />
        </SlideUp>
        <SlideUp delay={0.1}>
          <Eyebrow className="mb-4">{eyebrow}</Eyebrow>
        </SlideUp>
        <SlideUp delay={0.2}>
          <h2 className="mb-12 text-5xl font-normal leading-[1.2] md:text-6xl lg:text-[72px]">{heading}</h2>
        </SlideUp>
        <ScaleIn delay={0.3}>
          <div className="relative mx-auto aspect-video max-w-[1100px] overflow-hidden rounded-none md:rounded-lg bg-warm-light -mx-4 md:mx-auto">
            {videoSrc ? (
              <>
                <div
                  className={`h-full w-full transition-opacity duration-700 ${ready ? "opacity-100" : "opacity-0"}`}
                >
                  <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted={muted}
                    playsInline
                    preload="auto"
                    controls
                    poster={posterSrc}
                    onLoadStart={() => {
                      playAttemptedRef.current = false;
                      setReady(false);
                      setMuted(true);
                      setAutoplayBlocked(false);
                    }}
                    onCanPlay={handleReady}
                    onLoadedData={handleReady}
                    onVolumeChange={() => {
                      const video = videoRef.current;
                      if (!video) return;
                      setMuted(video.muted || video.volume === 0);
                    }}
                    className="h-full w-full object-cover"
                  >
                    <source src={videoSrc} type="video/mp4" />
                  </video>
                </div>
                {ready && (
                  <button
                    onClick={toggleMute}
                    aria-label={muted ? "Turn sound on" : "Turn sound off"}
                    className="absolute bottom-4 right-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-colors duration-300 hover:bg-black/70"
                  >
                    {muted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                  </button>
                )}
                {autoplayBlocked && (
                  <p className="absolute bottom-4 left-4 rounded-full bg-black/60 px-3 py-1 text-xs text-white">
                    Autoplay blocked. Press play to start.
                  </p>
                )}
              </>
            ) : (
              <div className="flex h-full items-center justify-center text-text-muted">
                <p className="text-sm">Video embed placeholder</p>
              </div>
            )}
          </div>
        </ScaleIn>
      </div>
    </section>
  );
}
