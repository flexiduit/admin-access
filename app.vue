<template>
  <div class="min-h-screen">
    <NuxtPage />

    <ToastContainer />
    <LoginModal />
    <PaymentWarnModal />
    <ProcessingPaymentModal />
    <AnnouncementModal />
    <MediaViewerModal />
  </div>
</template>

<script setup lang="ts">
const siteStore = useSiteStore()
const mainStore = useMainStore()
const userStore = useUserStore()

onMounted(() => {
  mainStore.bootstrap()
  if (!userStore.loggedIn) {
    userStore.fetchSession()
  }
})
</script>
