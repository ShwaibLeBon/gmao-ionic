<template>
    <ion-page>
        <ion-content>
            <ion-col class="parent ">
                <div class="hagati">
                    <div class="ion-text-center">
                        <img src="logo.png" alt="">
                    </div>
                    <ion-item>
                        <ion-label position="floating">Username</ion-label>
                        <ion-input></ion-input>
                    </ion-item>
                    <ion-item  expand="block">
                        <ion-label position="floating">Password</ion-label>
                        <ion-input type="password" expand="block"></ion-input>
                    </ion-item>
                    <ion-button expand="block" @click="injira">Login</ion-button>
                </div>
            </ion-col>
        </ion-content>
    </ion-page>
</template>
<script>
export default {
    methods: {
        injira() {
            this.$store.state.user = { name: "User" };
        }
    }
}
</script>
<style scoped>
.parent{
    height: 100%;
    background-color: cadetblue;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.hagati{
    width: 80%;
    background-color: white;
    padding: 20px;
    border-radius: 10px;
}
</style>