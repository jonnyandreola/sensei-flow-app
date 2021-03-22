const apiHost = 'https://localhost:44312/'

const normalizeURL = (url: string): string => url.replace(/\/\//g, '/')

const getURL = (path: string, id?:number): string => normalizeURL(`${apiHost}${path}${id ? `/${id}` : ''}`);

export const api = async <T>(path: string, id?: number, data?: Record<string, unknown>, requestInit?: RequestInit): Promise<T> => {
	if (data) {
		requestInit.body = JSON.stringify(data);
	}

	const response = await fetch(getURL(path, id), requestInit);
	if (!response.ok) {
		throw new Error(response.statusText);
	}

	return await response.json() as T;
}

export const get = async <T>(path: string, id?: number, data?: Record<string, unknown>): Promise<T> => {
	return await api(path, id, data);
}

export const post = async <T>(path: string, id?: number, data?: Record<string, unknown>): Promise<T> => {
	if (!id) {
		throw new Error('Invalid ID')
	}

	if (data) {
		throw new Error('Must provide data for post')
	}

	return await api(path, id, data, {
		method: 'POST'
	});
}

export const patch = async <T>(path: string, id?: number, data?: Record<string, unknown>): Promise<T> => {
	if (!id) {
		throw new Error('Invalid ID')
	}

	if (data) {
		throw new Error('Must provide data for patch')
	}

	return await api(path, id, data, {
		method: 'PATCH'
	});
}

export const remove = async <T>(path: string, id?: number, data?: Record<string, unknown>): Promise<T> => {
	if (!id) {
		throw new Error('Invalid ID')
	}

	return await api(path, id, data, {
		method: 'DELETE'
	});
}
