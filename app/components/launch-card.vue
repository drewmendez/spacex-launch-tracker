<script lang="ts" setup>
defineProps<{
	id: string
	missionName: string
	launchDate: string
	launchSite: string
	rocketName: string
	rocketId: string
	details: string
	launchYear: string
	image: string
}>()
</script>

<template>
	<NuxtLink :to="`/launches/${rocketId}/rocket-details`" class="text-decoration-none">
		<v-card hover height="100%">
			<v-img
				class="align-end text-white"
				gradient="to bottom, rgba(0,0,0,.4), rgba(0,0,0,0.9)"
				height="180"
				:src="image"
				cover
			>
				<v-card-title class="text-h5 font-weight-bold">
					{{ missionName }}
				</v-card-title>
				<v-card-text class="font-weight-bold">{{ launchDate }}</v-card-text>
			</v-img>

			<v-card-text>
				<p class="font-weight-bold text-h5 text-uppercase">
					{{ rocketName }}
				</p>
				<p class="text-uppercase">Site name: {{ launchSite }}</p>
			</v-card-text>
			<v-divider class="mx-4"></v-divider>
			<v-card-text>
				<p class="truncate text-subtitle-2">
					{{ details }}
				</p>
			</v-card-text>
		</v-card>
	</NuxtLink>
</template>

<style scoped>
.truncate {
	overflow: hidden;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	line-clamp: 3;
	-webkit-line-clamp: 3;
}
</style>
