<script lang="ts" setup>
const { launches } = useLaunches()
</script>

<template>
	<section>
		<v-container>
			<v-row align="stretch">
				<v-col v-for="launch in launches" :key="launch.id" sm="6" md="4" lg="3">
					<LaunchCard v-bind="launch" />
				</v-col>
			</v-row>
		</v-container>
	</section>
</template>
