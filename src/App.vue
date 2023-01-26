<template>
  <main>
    <div class="item">
      <Search />
    </div>
  </main>
</template>

<script>

import Button from "@/components/UI/Button.vue";
import Search from "@/components/Search.vue";

export default {
  components: {Search}

}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.item{
  width: 414px;
  height: 896px;

  border: 1px solid black;
}
</style>