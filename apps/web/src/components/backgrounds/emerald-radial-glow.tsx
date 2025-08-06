export function EmeraldRadialGlow() {
    return (
        <div
            className="absolute inset-0 z-0"
            style={{
                backgroundImage: `radial-gradient(circle 500px at 50% 300px, rgba(16,185,129,0.35), transparent)`,
            }}
        />
    )
}