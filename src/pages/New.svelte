<script lang="ts">
	import { onMount } from 'svelte';
	import dialogPolyfill from 'dialog-polyfill'
	import { gql } from 'graphql-request';
	import api from '../helpers/api';

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

	function formSubmit(e: Event) {
		e.preventDefault();
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
		<label for="title">Title</label>
		<input id="title" type="text">
	</div>
	<div class="form-control">
		<label for="description">Description</label>
		<textarea id="description" cols="30" rows="10"></textarea>
	</div>
	<input type="submit" value="Create Question">
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