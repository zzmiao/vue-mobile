<template>
	<div class="projectIntroduce-wrap">
		<my-header v-bind:title="title"></my-header>
		{{title}}
	</div>
</template>

<script>
	import myHeader from "@/views/base/header/index"
	export default {
		name: 'projectIntroduce',
		data() {
			return {
				title: "项目简介"
			}
		},
		components: {
			myHeader
		},
		watch: {

		},
		created: function() {

		},
		/**
		 * 实例被挂载后调用
		 */
		mounted() {

		}

	}
</script>

<style scoped="scoped">

</style>