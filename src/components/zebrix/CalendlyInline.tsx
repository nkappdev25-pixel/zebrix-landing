import React, { useEffect, useRef } from 'react';

interface CalendlyInlineProps {
  url: string;
  height?: number;
}

export const CalendlyInline: React.FC<CalendlyInlineProps> = ({ url, height = 680 }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const existing = document.querySelector<HTMLScriptElement>(
      'script[src="https://assets.calendly.com/assets/external/widget.js"]',
    );
    if (existing) return;
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const src = `${url}${url.includes('?') ? '&' : '?'}hide_gdpr_banner=1&primary_color=4F46E5`;

  return (
    <div
      ref={containerRef}
      className="calendly-inline-widget rounded-2xl overflow-hidden border border-black/[0.06] bg-white"
      data-url={src}
      style={{ minWidth: '280px', height: `${height}px` }}
    />
  );
};
