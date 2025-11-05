'use client'

import { cn } from '@site/src/lib/utils'
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from 'framer-motion'
import React, { useRef } from 'react'

interface MovingButtonProps {
  borderRadius?: string
  children: React.ReactNode
  as?: React.ElementType
  containerClassName?: string
  borderClassName?: string
  duration?: number
  className?: string
  [key: string]: any
}

export function MovingButton({
  borderRadius = '1.75rem',
  children,
  as: Component = 'div',
  containerClassName,
  borderClassName,
  duration,
  className,
  ...otherProps
}: MovingButtonProps) {
  return (
    <Component
      className={cn(
        'relative h-14 w-auto min-w-32 overflow-hidden bg-transparent p-[2px] text-sm',
        containerClassName,
      )}
      style={{
        borderRadius: borderRadius,
      }}
      {...otherProps}
    >
      {/* Glow removed per design request */}

      <div
        className={cn(
          'relative flex h-full w-full items-center justify-center bg-slate-900/70 text-sm antialiased backdrop-blur',
          className,
        )}
        style={{
          borderRadius: `calc(${borderRadius} * 0.96)`,
        }}
      >
        {children}
      </div>
    </Component>
  )
}

interface MovingBorderProps {
  children: React.ReactNode
  duration?: number
  rx?: string
  ry?: string
  [key: string]: any
}

export const MovingBorder = ({
  children,
  duration = 5000,
  rx,
  ry,
  ...otherProps
}: MovingBorderProps) => {
  const pathRef = useRef<SVGRectElement | null>(null)
  const progress = useMotionValue<number>(0)

  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength()
    if (length) {
      const pxPerMillisecond = length / duration
      progress.set((time * pxPerMillisecond) % length)
    }
  })

  const x = useTransform(progress, (val) => {
    const el = pathRef.current
    if (!el) return 0
    const length = el.getTotalLength()
    if (!length || Number.isNaN(length)) return 0
    const point = el.getPointAtLength(Math.max(0, Math.min(val, length)))
    return point?.x ?? 0
  })
  const y = useTransform(progress, (val) => {
    const el = pathRef.current
    if (!el) return 0
    const length = el.getTotalLength()
    if (!length || Number.isNaN(length)) return 0
    const point = el.getPointAtLength(Math.max(0, Math.min(val, length)))
    return point?.y ?? 0
  })

  const transform = useMotionTemplate`
    translateX(${x}px) translateY(${y}px)
    translateX(-50%) translateY(-50%)
  `

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute size-full"
        width="100%"
        height="100%"
        {...otherProps}
      >
        <rect
          fill="none"
          width="100%"
          height="100%"
          rx={rx}
          ry={ry}
          ref={pathRef}
        />
      </svg>
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          display: 'inline-block',
          transform,
        }}
      >
        {children}
      </motion.div>
    </>
  )
}