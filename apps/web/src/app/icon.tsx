import { ImageResponse } from 'next/og'

// Image metadata
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 16,
          background: '#e63947', // slate-900 color
          fontFamily: 'var(--font-khand)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#131629', // white text
          borderRadius: '6px',
          fontWeight: 'bold',
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