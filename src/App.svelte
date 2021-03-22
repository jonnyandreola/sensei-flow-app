<script lang="ts">
	import Router from 'svelte-spa-router';
	import Navbar from './components/Navbar.svelte'
	import Home from './pages/Home.svelte';
	import QuestionsSummary from './pages/QuestionsSummary.svelte';
	import Question from './pages/Question.svelte';
	import Profile from './pages/Profile.svelte';
	import NotFound from './pages/NotFound.svelte';

	const routes = {
		'/': Home,
		'/questions/:typeOfQuestions': QuestionsSummary,
		'/question/:questionID': Question,
		'/me': Profile,
		'*': NotFound,
	}
</script>

<header>
	<Navbar/>
</header>
<main>
	<Router {routes}/>
</main>
