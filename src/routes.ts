import Home from './pages/Home.svelte';
import QuestionsSummary from './pages/QuestionsSummary.svelte';
import Question from './pages/Question.svelte';
import Profile from './pages/Profile.svelte';
import NotFound from './pages/NotFound.svelte';

export default {
	'/': Home,
	'/questions/:typeOfQuestions': QuestionsSummary,
	'/question/:questionID': Question,
	'/me': Profile,
	'*': NotFound,
}