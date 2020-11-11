<template>
	<div class="myIntroduce-wrap">
		<my-header v-bind:title="title"></my-header>
		{{title}}
	</div>
</template>

<script>
	import myHeader from "@/views/base/header/index"
	export default {
		name: 'myIntroduce',
		data() {
			return {
				title: "个人简介"
			}
		},
		components: {
			myHeader
		}
	}
</script>

<style>

</style>