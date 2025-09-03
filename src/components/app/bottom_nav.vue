<template>
	<!-- <ion-footer> -->
	<ion-tab-bar color="light" slot="bottom">
		<ion-tab-button tab="home" href="/home">
			<ion-icon :src="getIcon('homeOutline')"></ion-icon>
			<ion-label>Accueil</ion-label>
			<!-- <ion-badge color="danger"></ion-badge> -->
		</ion-tab-button>

		<ion-tab-button tab="stock" href="/equipements">
			<ion-icon :src="getIcon('basketOutline')"></ion-icon>
			<ion-label>Equipements</ion-label>
		</ion-tab-button>

		<ion-tab-button tab="infrastructures">
			<ion-icon :src="getIcon('cartOutline')"></ion-icon>
			<ion-label>Infrastru.</ion-label>
			<!-- <ion-badge color="danger">47</ion-badge> -->
		</ion-tab-button>

		<ion-tab-button tab="planifications">
			<ion-icon :src="getIcon('download')"></ion-icon>
			<ion-label>Planifi.</ion-label>
			<!-- <ion-badge color="danger">47</ion-badge> -->
		</ion-tab-button>

		<ion-tab-button tab="operations">
			<ion-icon :src="getIcon('trashOutline')"></ion-icon>
			<ion-label>Opérations</ion-label>
			<!-- <ion-badge color="danger">47</ion-badge> -->
		</ion-tab-button>
	</ion-tab-bar>
	<!-- </ion-footer> -->
</template>

<script></script>

<style scoped></style>
