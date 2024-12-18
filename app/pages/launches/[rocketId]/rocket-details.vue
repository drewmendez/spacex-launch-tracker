<script lang="ts" setup>
const rocket = useRocket()
</script>

<template>
	<v-container>
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

			<v-btn color="primary" variant="flat" append-icon="mdi-heart-outline" size="large">
				ADD TO FAVORITES
			</v-btn>
		</v-responsive>
	</v-container>
</template>
