<script lang="ts" setup>
import BgImage from '~/assets/bg-image.webp'

defineProps<{
	id: string
	name: string
	first_flight: string
	height: Distance
	diameter: Distance
	mass: Mass
}>()

const store = useFavoriteRocketsStore()
</script>

<template>
	<NuxtLink :to="`/launches/${id}/rocket-details`" class="text-decoration-none">
		<v-card hover>
			<v-img
				class="align-center text-white text-center"
				gradient="to bottom, rgba(0,0,0,.4), rgba(0,0,0,0.9)"
				height="200"
				:src="BgImage"
				cover
			>
				<v-card-title class="text-h4 text-uppercase font-weight-bold">
					{{ name }}
				</v-card-title>
			</v-img>

			<v-card-text class="d-flex justify-space-between align-center">
				<p class="font-weight-bold">HEIGHT</p>
				<p>{{ height.meters }} m</p>
			</v-card-text>
			<v-divider class="mx-4" />
			<v-card-text class="d-flex justify-space-between align-center">
				<p class="font-weight-bold">DIAMETER</p>
				<p>{{ diameter.meters }} m</p>
			</v-card-text>
			<v-divider class="mx-4" />
			<v-card-text class="d-flex justify-space-between align-center">
				<p class="font-weight-bold">MASS</p>
				<p>{{ mass.kg.toLocaleString() }} kg</p>
			</v-card-text>

			<v-card-actions class="pa-4">
				<v-btn
					class="ml-auto"
					append-icon="mdi-minus"
					color="red"
					variant="tonal"
					@click.prevent="store.removeToFavorites(id)"
				>
					Remove
				</v-btn>
			</v-card-actions>
		</v-card>
	</NuxtLink>
</template>
