<script lang="ts">
	import {link} from 'svelte-spa-router';
	import active from 'svelte-spa-router/active';
</script>

<div class="wrapper">
	<h1>
		<a href="/" use:link>
			<img class="logo" src="//www.senseilabs.com/wp-content/themes/senseilabs/images/sensei-logo-icon.png" alt="SenseiLabs Symbol" role="presentation">
			Sensei Flow
		</a>
	</h1>
	<nav class="menu">
		<ul>
			<li><a href="/" use:link use:active>Home</a></li>
			<li><a href="/questions/new" use:link use:active>New Questions</a></li>
			<li><a href="/questions/unanswered" use:link use:active>Unanswered Questions</a></li>
			<li><a href="/new" use:link use:active>New</a></li>
			<li><a href="/me" use:link use:active>Profile</a></li>
		</ul>
	</nav>
</div>

<style>
	.wrapper {
		display: flex;
		justify-content: space-between;
	}
	h1 {
		margin: 0;
	}

	.logo {
		width: 30px;
	}
	ul {
		display: flex;
		align-items: center;
		height: 100%;
		list-style: none;
		margin: 0;
		padding: 0;
	}

	li a {
		display: block;
		padding: var(--spacing-md);
		border-bottom: 4px solid transparent;
	}
	li a:hover {
		text-decoration: none;
	}

	:global(.menu a.active) {
		border-bottom-color: var(--color-primary-500) !important;
	}
</style>