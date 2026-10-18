import { defineStore } from 'pinia'

export interface MediaSlide {
  src: string
  title?: string
  alt?: string
}

interface MediaViewerState {
  show: boolean
  slides: MediaSlide[]
  slideIndex: number
}

export const useMediaViewerStore = defineStore('media_viewer', {
  state: (): MediaViewerState => ({
    show: false,
    slides: [],
    slideIndex: 0,
  }),

  actions: {
    open(slides: MediaSlide[], index = 0) {
      this.slides = slides
      this.slideIndex = index
      this.show = true
    },
    close() {
      this.show = false
      this.slides = []
      this.slideIndex = 0
    },
    next() {
      if (!this.slides.length) return
      this.slideIndex = (this.slideIndex + 1) % this.slides.length
    },
    prev() {
      if (!this.slides.length) return
      this.slideIndex = (this.slideIndex - 1 + this.slides.length) % this.slides.length
    },
    goTo(i: number) {
      if (i < 0 || i >= this.slides.length) return
      this.slideIndex = i
    },
  },
})
