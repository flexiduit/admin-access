export const useMediaViewerStore =
defineStore(
  'media-viewer',
  () => {
    const show =
      ref(false)

    const slides =
      ref<any[]>([])

    const slideIndex =
      ref(0)

    function open(
      images: any[],
      index = 0
    ) {
      slides.value = images
      slideIndex.value = index
      show.value = true
    }

    function close() {
      show.value = false
    }

    return {
      show,
      slides,
      slideIndex,
      open,
      close
    }
  }
)
