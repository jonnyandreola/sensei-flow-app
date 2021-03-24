<script lang="ts">
	import Router, {link} from 'svelte-spa-router';
	import Navbar from './components/Navbar.svelte'
	import routes from './routes'
</script>

<header>
	<h1>
		<img src="//www.senseilabs.com/wp-content/themes/senseilabs/images/sensei-logo-icon.png" alt="SenseiLabs Symbol" role="presentation">
		<a href="/" use:link>Sensei Flow</a>
	</h1>
	<Navbar/>
</header>
<aside>

</aside>
<main>
	<Router {routes}/>
</main>

<style>
	header {
		background: gray ;
	}
</style>