<script lang="ts" setup>
defineProps<{
	id: string
	missionName: string
	launchDate: string
	launchSite: string
	rocketName: string
	details: string
	launchYear: string
	image: string
}>()
</script>

<template>
	<v-card hover height="100%">
		<v-img
			class="align-end text-white"
			gradient="to bottom, rgba(0,0,0,.4), rgba(0,0,0,0.9)"
			height="200"
			:src="image"
			cover
		>
			<v-card-title class="text-h5 font-weight-bold">{{ missionName }}</v-card-title>
		</v-img>

		<v-card-text>
			<p>{{ launchDate }}</p>
			<p>Site name: {{ launchSite }}</p>
			<p class="font-weight-bold text-h6">{{ rocketName }}</p>
		</v-card-text>
		<v-divider class="mx-4 mb-1"></v-divider>
		<v-card-text>
			<p class="truncate">
				{{ details }}
			</p>
		</v-card-text>
	</v-card>
</template>

<style scoped>
.truncate {
	overflow: hidden;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	line-clamp: 2;
	-webkit-line-clamp: 2;
}
</style>
