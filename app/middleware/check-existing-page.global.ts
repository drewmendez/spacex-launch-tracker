export default defineNuxtRouteMiddleware((to) => {
	if (!to.matched.length && to.path !== '/launches') {
		return navigateTo('/launches')
	}
})
