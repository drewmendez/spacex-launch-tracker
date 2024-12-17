<template>
	<v-app>
		<AppNavbar />

		<v-main min-height="100%">
			<v-container min-height="100%">
				<slot />
			</v-container>
		</v-main>

		<AppFooter />
	</v-app>
</template>
<script>
export default {
	name: 'DefaultLayout',
}
</script>
