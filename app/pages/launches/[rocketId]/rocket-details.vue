<script lang="ts" setup>
const { rocket } = useRocket()

const store = useFavoriteRocketsStore()
</script>

<template>
	<Head>
		<Title>SpaceX | Rocket Details</Title>
		<Meta
			name="description"
			content="Explore the latest and past SpaceX launches with detailed mission timelines, payload information, and live updates. Your gateway to tracking SpaceX's journey to the stars!"
		/>
	</Head>

	<v-container>
		<template v-if="!rocket">
			<v-skeleton-loader
				v-for="n in 15"
				type="text"
				:max-width="Math.floor(Math.random() * 700)"
				class="mx-auto"
			/>
		</template>

		<template v-else>
			<v-responsive class="mx-auto text-center" max-width="800">
				<p class="text-overline mb-2">Rocket Details</p>
				<h1 class="text-uppercase text-h2 font-weight-bold">{{ rocket?.name }}</h1>
				<p class="text-overline mt-5">{{ rocket?.description }}</p>
			</v-responsive>

			<v-responsive class="mx-auto mt-16 text-center" max-width="700">
				<v-row>
					<v-col cols="12" class="text-center">
						<p class="text-h4 font-weight-bold">{{ formatDate(rocket?.first_flight!) }}</p>
						<p class="font-weight-bold text-button">FIRST FLIGHT DATE</p>
					</v-col>
					<v-col class="text-center">
						<p class="text-h4 font-weight-bold">{{ rocket?.stages }}</p>
						<p class="font-weight-bold text-button">NUMBER 0F STAGES</p>
					</v-col>
				</v-row>
				<v-card variant="text">
					<v-card-text class="d-flex justify-space-between align-center">
						<p class="font-weight-bold text-button">HEIGHT</p>
						<p class="font-weight-bold">
							{{ rocket?.height.meters }} m /
							<span class="font-weight-medium">{{ rocket?.height.feet }} ft</span>
						</p>
					</v-card-text>
					<v-divider />
					<v-card-text class="d-flex justify-space-between align-center">
						<p class="font-weight-bold text-button">DIAMETER</p>
						<p class="font-weight-bold">
							{{ rocket?.diameter.meters }} m /
							<span class="font-weight-medium">{{ rocket?.diameter.feet }} ft</span>
						</p>
					</v-card-text>
					<v-divider />
					<v-card-text class="d-flex justify-space-between align-center">
						<p class="font-weight-bold text-button">MASS</p>
						<p class="font-weight-bold">
							{{ rocket?.mass.kg.toLocaleString() }} kg /
							<span class="font-weight-medium">{{ rocket?.mass.lb.toLocaleString() }} lb</span>
						</p>
					</v-card-text>
				</v-card>

				<v-btn
					color="primary"
					size="large"
					:variant="store.isAlreadyInFavorites(rocket?.id!) ? 'tonal' : 'flat'"
					:append-icon="store.isAlreadyInFavorites(rocket?.id!) ? 'mdi-heart' : 'mdi-heart-outline'"
					@click="
						store.isAlreadyInFavorites(rocket?.id!)
							? store.removeToFavorites(rocket?.id!)
							: store.addToFavorites(rocket!)
					"
				>
					{{ store.isAlreadyInFavorites(rocket?.id!) ? 'REMOVE TO FAVORITES' : 'ADD TO FAVORITES' }}
				</v-btn>
			</v-responsive>
		</template>
	</v-container>
</template>
