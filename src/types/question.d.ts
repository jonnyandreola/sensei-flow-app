import { components } from './generated-schema';

export type Question = components["schemas"]["Question"]
export type QuestionSummary = components["schemas"]["QuestionSummary"]
export type QuestionDetails = components["schemas"]["QuestionDetails"]
export type QuestionPostRequest = components["schemas"]["QuestionPostRequest"];
export type QuestionPostResponse = {
	postQuestions: int
}