<script lang="ts" setup>
// const year = ref(null)
const { selectedYear, uniqueYears } = useFilterYear()
const sortOrder = ref('Ascending')
const sorts = ['Ascending', 'Descending']

const { launches, launchYears } = useLaunches(selectedYear, sortOrder)
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
					v-model="selectedYear"
					clearable
					:items="uniqueYears"
				/>
			</div>

			<v-row align="stretch">
				<v-col v-for="launch in launches" :key="launch.id" cols="12" sm="6" md="4" lg="3">
					<LaunchCard v-bind="launch" />
				</v-col>
			</v-row>
		</v-container>
	</section>
</template>
