<template>
  <ion-app>
    <login v-if="$store.state.user == null"/>
    <ion-page v-else>
      <ion-header>
        <ion-toolbar>
          <ion-title>GMAO Academy</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-router-outlet/>
      </ion-content>
    </ion-page>
  </ion-app>
</template>
<script>
import login from './components/Login.vue'
export default {
  components: { login }
}
</script>
<style>
</style>
