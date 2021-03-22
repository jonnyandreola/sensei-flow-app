<script lang="ts">
	import {link} from 'svelte-spa-router'
</script>

<nav class="menu">
  <ul>
    <li><a href="/" use:link>Home</a></li>
    <li><a href="/questions/new" use:link>New Questions</a></li>
    <li><a href="/questions/unanswered" use:link>Unanswered Questions</a></li>
    <li><a href="/me" use:link>Profile</a></li>
  </ul>
</nav>