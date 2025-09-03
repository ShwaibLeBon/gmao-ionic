<template>
	<ion-page>
		<ion-tabs>
			<ion-header>
				<ion-toolbar>
					<ion-title>GMAO Academy</ion-title>
				</ion-toolbar>
			</ion-header>
			<!-- <ion-content> -->
			<ion-router-outlet />
			<!-- </ion-content> -->
			<AppBottomNav />
		</ion-tabs>
	</ion-page>
</template>

<script>
import AppBottomNav from "./bottom_nav.vue";
export default {
	components: { AppBottomNav },
};
</script>

<style></style>
