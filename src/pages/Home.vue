<template>
	<ion-page>
		<ion-content class="ion-padding">
			<div class="wrapper">
				<h2>Welcome to the Home Page</h2>
				<pre><code>{{ $store.state.user }}</code></pre>
				<button @click="logout">Logout</button>
			</div>
		</ion-content>
	</ion-page>
</template>

<script>
export default {
	methods: {
		logout() {
			this.$store.state.user = null;
			localStorage.removeItem("user");
		},
	},
};
</script>

<style>
.wrapper {
	padding-top: 48px;
}
</style>
