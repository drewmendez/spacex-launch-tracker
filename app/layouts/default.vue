<template>
	<v-app>
		<AppNavbar />

		<v-main min-height="100%">
			<slot />
		</v-main>

		<AppFooter />
	</v-app>
</template>
<script>
export default {
	name: 'DefaultLayout',
}
</script>
