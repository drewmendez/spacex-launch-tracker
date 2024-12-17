<script lang="ts" setup>
const year = ref(null)
const sortOrder = ref('Ascending')
const sorts = ['Ascending', 'Descending']

const { launches, launchYears } = useLaunches(year, sortOrder)
</script>

<template>
	<section>
		<v-container>
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
					v-model="year"
					clearable
					:items="launchYears"
				/>
			</div>

			<v-row align="stretch">
				<v-col v-for="launch in launches" :key="launch.id" sm="6" md="4" lg="3">
					<LaunchCard v-bind="launch" />
				</v-col>
			</v-row>
		</v-container>
	</section>
</template>
