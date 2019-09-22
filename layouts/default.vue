<template>
  <div class="antialiased p-4 sm:p-6">
    <nuxt />
    <base-footer />
  </div>
</template>

<script>
import BaseFooter from '~/components/BaseFooter'
export default {
  name: 'DefaultLayout',
  components: {
    BaseFooter
  }
}
</script>

<style>
body,
html {
  @apply font-sans w-full h-full;
}
.content a,
a.link {
  @apply no-underline;
  @apply text-black;
  box-shadow: inset 0 -0.1em 0 #e53e3e;
  transition: box-shadow 0.2s ease-in-out;
}

.content a:hover,
a.link:hover {
  box-shadow: inset 0 -1.2em 0 #e53e3e;
}
</style>
