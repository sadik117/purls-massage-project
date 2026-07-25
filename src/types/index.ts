import type { ReactNode } from 'react'

export interface NavbarProps {
  pages: PageConfig[]
  currentPage: number
  isOpen: boolean
  onToggle: () => void
  onNavigate: (index: number) => void
}

export interface PageConfig {
  id: string
  label: string
  component: ReactNode
}

export interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
  delay?: number
  id?: string
}

export type FlipDirection = 'forward' | 'backward'

export interface BookFlipProps {
  pages: PageConfig[]
  currentPage: number
  nextPage: number | null
  isFlipping: boolean
  direction: FlipDirection
  onFlipComplete: () => void
  onNavigate: (index: number) => void
  totalPages: number
}
