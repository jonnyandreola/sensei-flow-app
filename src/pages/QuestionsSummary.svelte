<script lang="ts">
	import { gql } from 'graphql-request';
	import QuestionSummary from '../components/QuestionSummary.svelte';
	import api from '../helpers/api';
	import type { QuestionSummary as QuestionSummaryType } from '../types/question';

	export let params: { typeOfQuestions: 'new' | 'unanswered'};

	let questionsPromise: Promise<QuestionSummaryType[]>;

	$: {
		let query = gql`{
			questionsNew {
				title
				questionID
				voteCount
				answerCount
			}
		}
		`
		questionsPromise = api(query).then(({questionsNew}) => questionsNew);
	}

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