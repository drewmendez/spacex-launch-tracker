<script lang="ts" setup>
import Empty from '~/assets/empty.png'

const store = useFavoriteRocketsStore()
</script>

<template>
	<Head>
		<Title>SpaceX | Favorites</Title>
		<Meta
			name="description"
			content="Explore the latest and past SpaceX launches with detailed mission timelines, payload information, and live updates. Your gateway to tracking SpaceX's journey to the stars!"
		/>
	</Head>

	<v-container class="mx-auto">
		<p class="text-button text-center">FAVORITE ROCKETS</p>
		<v-row>
			<v-btn
				class="ml-auto"
				color="red"
				append-icon="mdi-delete-outline"
				:disabled="!store.getFavorites.length"
				@click="store.clearFavorites()"
			>
				REMOVE ALL FAVORITES
			</v-btn>
		</v-row>
		<template v-if="!store.getFavorites.length">
			<v-empty-state
				headline="Empty"
				title="Looks like nothing's in here"
				:image="Empty"
			></v-empty-state>
		</template>
		<v-row>
			<v-col v-for="rocket in store.getFavorites" :key="rocket.id" cols="3">
				<RocketCard v-bind="rocket" />
			</v-col>
		</v-row>
	</v-container>
</template>
