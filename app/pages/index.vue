<template>
	<Head>
		<Title>SpaceX</Title>
		<Meta
			name="description"
			content="Explore the latest and past SpaceX launches with detailed mission timelines, payload information, and live updates. Your gateway to tracking SpaceX's journey to the stars!"
		/>
	</Head>

	<section class="hero h-100">
		<v-container class="d-flex align-center justify-center h-100">
			<div class="w-66 text-center text-white d-flex flex-column align-center ga-7">
				<h1 class="font-weight-black text-h3 text-lg-h1">SpaceX Launch Tracker</h1>
				<p class="text-lg-h6">
					Explore the latest and past SpaceX launches with detailed mission timelines, payload
					information, and live updates. Your gateway to tracking SpaceX's journey to the stars!
				</p>
				<v-btn
					append-icon="mdi-rocket-launch"
					variant="outlined"
					:size="$vuetify.display.lgAndUp ? 'x-large' : 'default'"
					to="/launches"
				>
					Explore Launches
				</v-btn>
			</div>
		</v-container>
	</section>
</template>
<script lang="ts" setup></script>

<style scoped>
.hero {
	background: linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5)), url('~/assets/bg-image.webp');
	background-size: cover;
}
</style>
