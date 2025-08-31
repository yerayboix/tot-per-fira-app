"use client"
import { cn } from "@/lib/utils"

interface AvailabilityIndicatorProps {
  variant?: "dot" | "badge" | "inline"
  className?: string
  showText?: boolean
  text?: string
}

export function AvailabilityIndicator({
  variant = "dot",
  className,
  showText = true,
  text = "Disponible para proyectos"
}: AvailabilityIndicatorProps) {
  const baseClasses = "inline-flex items-center gap-2"
  
  const dotClasses = cn(
    "relative w-2 h-2 rounded-full bg-green-500",
    "before:absolute before:inset-0 before:rounded-full before:bg-green-500 before:animate-ping",
    "after:absolute after:inset-0 after:rounded-full after:bg-green-500/20 after:animate-pulse"
  )
  
  const badgeClasses = cn(
    "px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20",
    "text-green-600 dark:text-green-400 text-xs font-pt-mono font-medium"
  )
  
  const inlineClasses = cn(
    "text-green-600 dark:text-green-400 font-pt-mono text-sm"
  )

  if (variant === "dot") {
    return (
      <div className={cn(baseClasses, className)}>
        <div className={dotClasses} />
        {showText && (
          <span className="text-md font-pt-mono">
            {text}
          </span>
        )}
      </div>
    )
  }

  if (variant === "badge") {
    return (
      <div className={cn(baseClasses, className)}>
        <div className={dotClasses} />
        {showText && (
          <span className={badgeClasses}>
            {text}
          </span>
        )}
      </div>
    )
  }

  if (variant === "inline") {
    return (
      <span className={cn(inlineClasses, className)}>
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500 mr-2 animate-pulse" />
        {text}
      </span>
    )
  }

  return null
} 