<script lang="ts">
	export let text = 'Button';
	export let action = () => null;
	export let disabled = false
</script>

<button on:click={action} {disabled}>{text}</button>

<style>
	button {
		display: inline-block;
		border: none;
		padding: 1rem 2rem;
		margin: 0;
		text-decoration: none;
		background: var(--color-link-alt);
		color: var(--color-link);
		cursor: pointer;
		text-align: center;
		transition: background 250ms ease-in-out, transform 150ms ease;
		-webkit-appearance: none;
		-moz-appearance: none;
	}

	button:hover,
	button:focus {
		background: var(--color-link-hover)
	}

	button:focus {
		outline: 1px solid var(--color-link);
		outline-offset: -4px;
	}

	button:active {
		transform: scale(0.99);
	}
</style>
