import { render } from "@testing-library/svelte";
import type { QuestionSummary as QuestionSummaryType } from '../types/question';
import QuestionSummary from "../components/QuestionSummary.svelte";

type RenderOptionsType = {
	props: {question: QuestionSummaryType}
}

const renderOptions: RenderOptionsType = {
	props: {
		question: {
			questionID: 1,
			title: 'Lorem Ipsum Dolor',
			answerCount: 2,
			voteCount: 3,
		}
	}
}

test("should render", () => {
  const results = render(QuestionSummary, renderOptions);

  expect(() => results.getByText("Lorem Ipsum Dolor")).not.toThrow();

	expect(results.container.querySelector('a').getAttribute('href')).toBe('#/question/1')
});