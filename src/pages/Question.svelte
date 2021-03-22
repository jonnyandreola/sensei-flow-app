<script lang="ts">
	import { get } from '../helpers/api';
	import type { QuestionDetails } from '../types/question';

	export let params: {questionID: string};

	let questionID: number;
	let questionPromise: Promise<QuestionDetails>;

	$: questionID = parseInt(params.questionID);
	$: questionPromise = get('questions', questionID);
</script>

<!-- Single Question -->
{#if questionPromise}
	<h1>Question - {questionID}</h1>
	{#await questionPromise}
		<p>...waiting</p>
	{:then question}
		<p>title: {question.title}</p>
	{:catch error}
		<p style="color: red">{error.message}</p>
	{/await}
{/if}