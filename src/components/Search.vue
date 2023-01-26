<template>
  <div v-if="isVisible" class="search">
    <div class="input-con">
      <input placeholder="Search" v-model="city" v-if="!loading" @keydown.enter="getWeather" />
      <div v-else>Loading...</div>
    </div>
    <div class="history">
      <div class="recent" v-for="element in history" :key="element.tempMax">
        <span>{{element.city}}</span>
        <span>{{element.tempMax}} / {{element.tempMin}}</span>
      </div>
    </div>
    <button v-if="history.length != 0" @click="removeHistory">Delete</button>
  </div>
  <button @click="toggle">Click</button>
</template>

<script>

import {getWeatherByLocation, getWeatherForecastByLocation} from "@/service/weather.service";

export default {
  data() {
    return{
      isVisible: false,
      city: '',
      loading: false,
      history: [],
    }
  },
  mounted() {
    if (localStorage.getItem('history') !== null)  {
      this.history = JSON.parse(localStorage.getItem('history'));
    }
  },
  methods: {
   getWeather() {
    this.loading = true
    getWeatherForecastByLocation(this.city).then((res) => {
      this.loading = false
      this.history.push({
        city: res.data.location.name,
        tempMax: res.data.forecast.forecastday[0].day.maxtemp_c,
        tempMin: res.data.forecast.forecastday[0].day.mintemp_c,
      })
      localStorage.setItem("history", JSON.stringify(this.history))
    }).catch(err => {
      alert('Error');
      this.loading = false;
    })
     this.city = ''
   },
    removeHistory() {
    if (history.length === 0) {
      return
    }
      localStorage.removeItem('history')
      this.history = []
    },
    toggle() {
     this.isVisible = !this.isVisible
    }
  }
}
</script>

<style scoped>
.recent{
  display: flex;
  justify-content: space-between;
}
.search {
  width: 100%;
  background: whitesmoke;
  padding: 20px 5px 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
}

.history {
  padding: 20px 0;
  width: 50%;
}

.input-con {
}
</style>