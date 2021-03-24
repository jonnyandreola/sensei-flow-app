interface Error {
	message:    string;
	locations:  Location[];
	path:       string[];
	extensions: Extensions;
}

interface Extensions {
	method:          string;
	path:            string;
	statusCode:      number;
	responseHeaders: ResponseHeaders;
	responseBody:    string;
}

interface ResponseHeaders {
	"content-type":   string;
	server:           string;
	"x-powered-by":   string;
	date:             string;
	connection:       string;
	"content-length": string;
}

interface Location {
	line:   number;
	column: number;
}

export interface GraphQLResponse<T> {
	data?: T
	errors?: Error[]
}
