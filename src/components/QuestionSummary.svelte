<script lang="ts">
	import {link} from 'svelte-spa-router';
	import type { QuestionSummary } from '../types/question';

	export let question: QuestionSummary;
</script>

<article>
	<header>
		<h3><a href="/question/{question.questionID}" use:link>{question.title}</a></h3>
	</header>
	<dl>
		<dt>Votes</dt>
		<dd>{question.voteCount}</dd>
		<dt>Answers</dt>
		<dd>{question.answerCount}</dd>
	</dl>
</article>

<style>
dl {
	display: flex;
}
dd {
	margin: 0 12px 0 4px;
}
dt:after {
	content: ': ';
}
</style>

