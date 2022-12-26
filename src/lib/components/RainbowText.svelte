<script lang="ts">
	export let text: string;
</script>

<div class="layout">
	<div class="rainbow">
		<h2 class="text">{text}</h2>
	</div>
</div>

<style>
	.layout {
		margin-top: 2rem;
		margin-bottom: 1.5rem;
	}
	.text {
		background: red;
		mix-blend-mode: screen;
		background: #fef;
		color: black;
		height: 100%;
		margin: 0;
		padding: 2rem 2rem 1.5rem;
	}

	.rainbow {
		background: linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet, red);
		background-size: 400px;
		animation: 25s shiftBackgroundLeft infinite linear;
		overflow: hidden;
		border-radius: 1rem;
	}

	@keyframes shiftBackgroundLeft {
		from {
			background-position: 0px;
		}
		to {
			background-position: 400px;
		}
	}
</style>
