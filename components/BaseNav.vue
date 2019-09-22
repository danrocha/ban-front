<template>
  <nav class="w-full flex justify-between flex-wrap items-center">
    <div>
      <logo class="text-3xl" />
    </div>
    <ul class="font-mono mx-auto sm:mx-0 flex">
      <li class="mr-4">database</li>
      <li class="mr-4">news</li>
      <li class="mr-4">forum</li>
      <li class="mr-4">events</li>
      <li class="mr-4">jobs</li>
      <li class="mr-4">about</li>
    </ul>
  </nav>
</template>

<script>
import Logo from '~/components/Logo'
export default {
  name: 'BaseNav',
  components: {
    Logo
  }
}
</script>

<style lang="scss" scoped></style>
