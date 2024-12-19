<script lang="ts" setup>
const isVisible = ref(false)

const onScroll = () => {
	isVisible.value = window.scrollY > 700
}

const toTop = () => {
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: 'smooth',
	})
}
</script>

<template>
	<div v-scroll="onScroll" class="fixed right-0">
		<v-btn
			v-if="isVisible"
			icon="mdi-arrow-up"
			size="x-large"
			class="scroll-to-top"
			color="black"
			@click="toTop"
		/>
	</div>
</template>

<style scoped>
.scroll-to-top {
	position: fixed;
	bottom: 20px;
	right: 20px;
}
</style>
