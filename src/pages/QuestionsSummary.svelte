<script lang="ts">
	import QuestionSummary from '../components/QuestionSummary.svelte';
	import { get } from '../helpers/api';
	import type { QuestionSummary as QuestionSummaryType } from '../types/question';

	export let params: { typeOfQuestions: 'new' | 'unanswered'};

	let questionsPromise: Promise<QuestionSummaryType[]> = get(`questions/${params.typeOfQuestions}`);
</script>

{#if questionsPromise}
	<h1>{params.typeOfQuestions} Questions</h1>
	{#await questionsPromise}
		<p>...waiting</p>
	{:then questions}
		<ul>
		{#each questions as question}
			<li><QuestionSummary {question}/></li>
		{/each}
		</ul>
	{:catch error}
		<p style="color: red">{error.message}</p>
	{/await}
{/if}