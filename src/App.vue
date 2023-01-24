<template>
  <main>

  </main>
</template>

<script>
import {getWeatherByLocation} from "@/service/weather.service";

export default {
    mounted() {
      getWeatherByLocation("Astana")
          .then((res)=>console.log(res))
    }
}
</script>

<style lang="scss" scoped>

</style>