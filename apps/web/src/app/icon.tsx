import { ImageResponse } from 'next/og'

// Image metadata
export const size = {
  width: 48,
  height: 48,
}
export const contentType = 'image/png'

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 25,
          background: '#e63947', // Brand red color
          fontFamily: 'system-ui, -apple-system, sans-serif',
          fontWeight: 'bold',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#131629', // White text for better contrast
          borderRadius: '8px',
        }}
      >
        TPF
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  )
} 