"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { DecorativeIcon } from "@/components/shared/DecorativeIcon";
import { Eyebrow } from "@/components/shared/Eyebrow";
import { SlideUp, ScaleIn } from "@/components/ui/motion";

declare global {
  interface Window {
    YT: typeof YT;
    onYouTubeIframeAPIReady: (() => void) | undefined;
  }
}

interface VideoTestimonialProps {
  eyebrow: string;
  heading: string;
  videoId?: string;
}

function loadYTApi(): Promise<void> {
  if (window.YT?.Player) return Promise.resolve();
  return new Promise((resolve) => {
    const prev = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      prev?.();
      resolve();
    };
    if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      document.head.appendChild(tag);
    }
  });
}

export function VideoTestimonial({
  eyebrow,
  heading,
  videoId,
}: VideoTestimonialProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<YT.Player | null>(null);
  const [visible, setVisible] = useState(false);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    if (!videoId) return;

    let destroyed = false;
    loadYTApi().then(() => {
      if (destroyed || !containerRef.current) return;
      playerRef.current = new window.YT.Player(containerRef.current, {
        videoId,
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 0,
          modestbranding: 1,
          loop: 1,
          rel: 0,
          showinfo: 0,
          playsinline: 1,
          iv_load_policy: 3,
          disablekb: 1,
          playlist: videoId,
          enablejsapi: 1,
          origin: window.location.origin,
        },
        events: {
          onReady: () => {
            setTimeout(() => {
              if (!destroyed) setVisible(true);
            }, 3000);
          },
        },
      });
    });

    return () => {
      destroyed = true;
      playerRef.current?.destroy();
      playerRef.current = null;
    };
  }, [videoId]);

  const toggleMute = useCallback(() => {
    const p = playerRef.current;
    if (!p) return;
    if (muted) {
      p.unMute();
      p.setVolume(100);
    } else {
      p.mute();
    }
    setMuted(!muted);
  }, [muted]);

  return (
    <section className="bg-warm py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-4 text-center md:px-8">
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
          <div className="relative mx-auto aspect-video max-w-[800px] overflow-hidden rounded-none md:rounded-lg bg-warm-light -mx-4 md:mx-0">
            {videoId ? (
              <>
                <div
                  className={`pointer-events-none h-full w-full transition-opacity duration-[1500ms] ${visible ? "opacity-100" : "opacity-0"}`}
                >
                  <div ref={containerRef} className="h-full w-full" />
                </div>
                {visible && (
                  <button
                    onClick={toggleMute}
                    aria-label={muted ? "Turn sound on" : "Turn sound off"}
                    className="absolute bottom-4 right-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-colors duration-300 hover:bg-black/70"
                  >
                    {muted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                  </button>
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
