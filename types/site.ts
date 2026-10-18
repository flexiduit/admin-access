export interface SiteConfig {
  title?: string
  description?: string
  is_index?: number
  logo?: string
  logoWhite?: string
}

export interface PageSeoSettings {
  title?: string
  description?: string
  keywords?: string
}

export interface AnnouncementSlide {
  id: number
  image_url: string
  link_url?: string
  title?: string
}
