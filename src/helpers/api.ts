/* eslint-disable @typescript-eslint/no-unsafe-call */
import { request } from 'graphql-request';
import type { Variables } from 'graphql-request/dist/types';

const apiHost = 'http://localhost:3000/graphql'

export default async <T>(query: string, variables?: Variables): Promise<T> => {
	return await request(apiHost, query, variables);
}
