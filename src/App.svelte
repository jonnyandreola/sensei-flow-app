<script lang="ts">
	import Router from 'svelte-spa-router';
	import Navbar from './components/Navbar.svelte'
	import routes from './routes'
</script>
<div class="page-layout wrapper">
	<header>
		<Navbar/>
	</header>
	<aside>
	aside content like tags, author, etc
	</aside>
	<main>
		<Router {routes}/>
	</main>
	<footer>
		&copy; Sensei Labs {new Date().getFullYear()}
	</footer>
</div>

<style>

	.page-layout {
		display: grid;
		grid-template-areas: "head head"
												 "aside main"
												 "aside foot";
		grid-template-rows: 56px 1fr 30px;
		grid-template-columns: 150px 1fr;
	}

	header {
		grid-area: head
	}
	aside {
		grid-area: aside;
	}
	main {
		grid-area: main;
	}
	header {
		padding: var(--spacing-sm);
	}
</style>