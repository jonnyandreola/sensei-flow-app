<script lang="ts">
	import { onMount } from 'svelte';
	import dialogPolyfill from 'dialog-polyfill'
	import { push } from 'svelte-spa-router'
	import { gql } from 'graphql-request';
	import api from '../helpers/api';
	import type { QuestionPostRequest, QuestionPostResponse } from '../types/question';
	import type { GraphQLResponse } from '../types/graphql-response';

	let isLoading = false;
	let dialog;

	const newMessageWarningKey = 'senseiflow.ignoreNewQuestionWarning';

	onMount(() => {
		dialogPolyfill.registerDialog(dialog);
		if (localStorage.getItem(newMessageWarningKey) !== 'true') {
			dialog.showModal();
		}
	})

	function handleModalClick(e) {
		const value = e.target.value;
		if (value === 'ignore') {
			localStorage.setItem(newMessageWarningKey, 'true');
		}
		dialog.close();
	}

	async function createQuestion(question: QuestionPostRequest): Promise<QuestionPostResponse> {
		isLoading = true;
		const postQuery = gql`
			mutation CreateQuestion($question: QuestionPostRequestInput!) {
				postQuestions(questionPostRequestInput: $question)
			}
		`
		const response = await api<QuestionPostResponse>(postQuery, {question});
		isLoading = false;

		return response;
	}

	async function formSubmit(e: Event): Promise<void> {
		e.preventDefault();
		const { titleInput, descriptionInput } = e.target as HTMLFormElement;
		let questionID;
		try {
			questionID =  await createQuestion({
				title: titleInput.value,
				description: descriptionInput.value
			}).then(({postQuestions}) => postQuestions)
		} catch (err) {
			console.error(err)
		}

		push(`/question/${questionID}`)
	}
</script>

<h1>Create new question</h1>

<dialog bind:this={dialog}>
	<h2>Asking a good question</h2>
	<p>You’re ready to ask your first programming-related question and the community is here to help! To get you the best answers, we’ve provided some guidance:</p>
	<p>Before you post, search the site to make sure your question hasn’t been answered.</p>
	<ol>
		<li>Summarize the problem</li>
		<li>Describe what you’ve tried</li>
		<li>When appropriate, show some code</li>
	</ol>
	<div class="buttons">
		<button on:click={handleModalClick}>Ask Question</button>
		<button on:click={handleModalClick} value="ignore">Don't show this again</button>
	</div>
</dialog>

<form on:submit="{formSubmit}" autocomplete="off">
	<div class="form-control">
		<label for="titleInput">Title</label>
		<input id="titleInput" type="text" required minlength="20" maxlength="150">
	</div>
	<div class="form-control">
		<label for="descriptionInput">Description</label>
		<textarea id="descriptionInput" cols="30" rows="10" required></textarea>
	</div>
	{#if isLoading}
		<input type="submit" value="Creating Question..." disabled>
	{:else}
		<input type="submit" value="Create Question">
	{/if}
</form>


<style>
	dialog {
		max-width: 500px;
	}
	form {
		display: flex;
		flex-direction: column;
	}

	input[type=submit] {
		align-self: flex-end;
	}

	.form-control {
		display: flex;
	}

	.form-control label {
		width: 150px;
	}

	.form-control input, .form-control textarea {
		width: 100%;
	}
</style>