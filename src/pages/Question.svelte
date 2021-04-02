<script lang="ts">
import { gql } from 'graphql-request';

	import api from '../helpers/api';
	import type { QuestionDetails } from '../types/question';

	export let params: {questionID: string};

	let questionID: number;
	let questionPromise: Promise<QuestionDetails>;
	let query;

	$: questionID = parseInt(params.questionID);
	$: query = gql`{
		questionDetail(id: ${questionID}) {
			title,
			description
		}
	}`
	$: questionPromise = api(query).then(({questionDetail}) => questionDetail);
</script>

<!-- Single Question -->
{#if questionPromise}
	<h1>Question - {questionID}</h1>
	{#await questionPromise}
		<p>...waiting</p>
	{:then question}
		<p>title: {question.title}</p>
		<div>{ @html question.description }</div>
	{:catch error}
		<p style="color: red">{error.message}</p>
	{/await}
{/if}