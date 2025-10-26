import React, { useState } from 'react'

const ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg=='

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackText?: string;
  fill?: boolean;
  width?: number | string;
  height?: number | string;
}

export function ImageWithFallback({
  src,
  alt,
  className = '',
  style = {},
  fill = false,
  width,
  height,
  fallbackText = 'Image not available',
  ...rest
}: ImageWithFallbackProps) {
  const [didError, setDidError] = useState(false);

  const handleError = () => {
    setDidError(true);
  };

  const imageStyle: React.CSSProperties = {
    ...style,
    ...(fill ? {
      position: 'absolute',
      height: '100%',
      width: '100%',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      objectFit: 'cover' as const,
      objectPosition: 'center'
    } : {}),
  };

  if (didError) {
    return (
      <div
        className={`inline-flex items-center justify-center bg-gray-100 text-center align-middle ${
          className || ''
        } ${fill ? 'relative w-full h-full' : ''}`}
        style={fill ? { position: 'relative', width: '100%', height: '100%', ...style } : style}
      >
        <div className="text-gray-400 p-4">
          <div className="text-sm">{fallbackText}</div>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`${className} ${fill ? 'absolute inset-0 w-full h-full' : ''}`}
      style={imageStyle}
      width={!fill ? width : undefined}
      height={!fill ? height : undefined}
      onError={handleError}
      {...rest}
    />
  );
}
