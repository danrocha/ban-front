<template>
  <div id="home">
    <logo class="text-3xl" />
    <nav class="flex items-center justify-end">
      <ul class="font-mono text-right">
        <li class="mr-4">events</li>
        <li class="mr-4">jobs</li>
        <li class="mr-4">database</li>
        <li class="mr-4">forum</li>
        <li class="mr-4">about</li>
      </ul>
    </nav>
    <div id="spacer"></div>
    <div class="h-full mt-8">
      <section id="news" class="mb-12">
        <h2 class="font-mono text-xl mb-4">
          <span class="text-red-600">ban</span>events<span class="ml-4"
            >&rarr;</span
          >
        </h2>
        <ul>
          <li v-for="x in 3" :key="x" class="mb-4 flex">
            <!-- <figure class="mr-4">
            <img
              src="https://via.placeholder.com/400x200"
              width="400px"
              height="200px"
            />
          </figure> -->
            <p class="uppercase font-mono text-sm mr-4 mt-1">
              25.09<br />19:00
            </p>
            <div>
              <h3 class="font-semibold mr-4">Exhibition opening</h3>
              <p>
                Peter Wilson: Small World Theory
              </p>
              <p>
                @ SATELLIT Architektur Galerie Berlin
              </p>
            </div>
          </li>
        </ul>
      </section>
      <!-- <section id="events">
      <h2 class="font-mono text-xl mb-4">
        <span class="text-red-600">ban</span>events
      </h2>
      <ul>
        <li v-for="x in 4" :key="x" class="flex mb-4">
          <p class="flex flex-col items-center mr-2">
            <span>23rd</span>
            <span class="uppercase">Oct</span>
          </p>
          <div>
            <h3 class="font-semibold">event title {{ x }}</h3>
            <p>
              event excerpt
            </p>
          </div>
        </li>
      </ul>
    </section> -->
      <section id="jobs" class="mb-12">
        <h2 class="font-mono text-xl mb-4">
          <span class="text-red-600">ban</span>jobs<span class="ml-4"
            >&rarr;</span
          >
        </h2>
        <ul>
          <li v-for="x in 4" :key="x" class="flex flex-wrap mb-4">
            <figure class="flex-none mr-4 mt-1">
              <img
                src="https://via.placeholder.com/50"
                width="50px"
                height="50px"
              />
            </figure>
            <div>
              <h3 class="font-semibold">Office name {{ x }}</h3>
              <p>
                job excerpt
              </p>
              <p>
                Posted on 26.09
              </p>
            </div>
          </li>
        </ul>
      </section>
      <section id="database" class="mb-12">
        <h2 class="font-mono text-xl mb-4">
          <span class="text-red-600">ban</span>database<span class="ml-4"
            >&rarr;</span
          >
        </h2>
        <ul>
          <li v-for="x in 4" :key="x" class="flex flex-wrap mb-4">
            <figure class="flex-none mr-4 mt-1">
              <img
                src="https://via.placeholder.com/50"
                width="50px"
                height="50px"
              />
            </figure>
            <div>
              <h3 class="font-semibold">Office name {{ x }}</h3>
              <p>
                short description
              </p>
              <p>
                typologies, stats, etc
              </p>
            </div>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo'
export default {
  name: 'Home',
  components: {
    Logo
  }
}
</script>

<style>
@screen sm {
  #home {
    display: grid;
    grid-template-columns: auto 1fr;
  }
}
</style>
