"use client";

import { useEffect, useState } from "react";
import Image, { type ImageProps } from "next/image";

type SmartImageProps = ImageProps & {
  timeoutMs?: number;
  placeholderClassName?: string;
};

const DEFAULT_TIMEOUT_MS = 4500;
const DEFAULT_BLUR_DATA_URL =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSI5IiB2aWV3Qm94PSIwIDAgMTYgOSI+PHJlY3Qgd2lkdGg9IjE2IiBoZWlnaHQ9IjkiIGZpbGw9IiNlMmU4ZjAiLz48L3N2Zz4=";

export default function SmartImage({
  timeoutMs = DEFAULT_TIMEOUT_MS,
  placeholderClassName = "bg-slate-200/70 animate-pulse",
  className,
  blurDataURL = DEFAULT_BLUR_DATA_URL,
  ...props
}: SmartImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasFailed, setHasFailed] = useState(false);
  const [timedOut, setTimedOut] = useState(false);

  useEffect(() => {
    setIsLoaded(false);
    setHasFailed(false);
    setTimedOut(false);
  }, [props.src]);

  useEffect(() => {
    if (isLoaded || hasFailed) return;
    const timeoutId = window.setTimeout(() => {
      setTimedOut(true);
    }, timeoutMs);

    return () => window.clearTimeout(timeoutId);
  }, [hasFailed, isLoaded, timeoutMs, props.src]);

  const hidePlaceholder = isLoaded || hasFailed || timedOut;

  return (
    <>
      {!hidePlaceholder ? (
        <div
          aria-hidden="true"
          className={`absolute inset-0 ${placeholderClassName}`}
        />
      ) : null}
      <Image
        {...props}
        className={`transition-opacity duration-500 ${
          isLoaded || hasFailed ? "opacity-100" : "opacity-0"
        } ${className ?? ""}`}
        blurDataURL={blurDataURL}
        placeholder="blur"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasFailed(true)}
      />
    </>
  );
}
