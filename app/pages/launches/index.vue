<script lang="ts" setup>
const { selectedYear, uniqueYears } = useFilterYear()
const { sortOrder, sorts } = useSortByYear()

const { launches } = useLaunches(selectedYear, sortOrder)
</script>

<template>
	<Head>
		<Title>SpaceX | Launches</Title>
		<Meta
			name="description"
			content="Explore the latest and past SpaceX launches with detailed mission timelines, payload information, and live updates. Your gateway to tracking SpaceX's journey to the stars!"
		/>
	</Head>

	<section>
		<v-container class="">
			<div class="d-flex ga-7">
				<v-select
					class="ml-auto"
					max-width="300px"
					variant="outlined"
					label="Sort by date"
					v-model="sortOrder"
					:items="sorts"
				/>
				<v-select
					max-width="300px"
					variant="outlined"
					label="Filter by year"
					v-model="selectedYear"
					clearable
					:items="uniqueYears"
				/>
			</div>

			<v-row align="stretch">
				<template v-if="!launches.length">
					<v-col v-for="n in 12" :key="n" cols="12" sm="6" md="4" lg="3">
						<v-skeleton-loader type="card, text, paragraph" elevation="1" />
					</v-col>
				</template>

				<template v-else>
					<v-col v-for="launch in launches" :key="launch.id" cols="12" sm="6" md="4" lg="3">
						<LaunchCard v-bind="launch" />
					</v-col>
				</template>
			</v-row>
		</v-container>
	</section>
</template>
