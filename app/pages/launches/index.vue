<script lang="ts" setup>
const year = ref(null)

const { launches, launchYears } = useLaunches(year)
</script>

<template>
	<section>
		<v-container>
			<v-select
				class="ml-auto"
				max-width="300px"
				variant="outlined"
				label="Filter by year"
				v-model="year"
				clearable
				:items="launchYears"
			/>

			<v-row align="stretch">
				<v-col v-for="launch in launches" :key="launch.id" sm="6" md="4" lg="3">
					<LaunchCard v-bind="launch" />
				</v-col>
			</v-row>
		</v-container>
	</section>
</template>
