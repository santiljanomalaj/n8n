<template>
	<h1>{{ title }}</h1>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { mapStores } from 'pinia';
import { useHelloWorldStore } from '@/stores/helloworld.store';

const count = ref(0);

export default defineComponent({
	name: 'HelloWorld',
	data() {
		return {
			title: 'Loading...',
		};
	},
	computed: {
		...mapStores(useHelloWorldStore),
	},
	async mounted() {
		this.title = await this.helloworldStore.getWorld();
	},
});
</script>

<style scoped>
.read-the-docs {
	color: #888;
}
</style>
