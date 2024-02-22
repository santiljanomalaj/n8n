import { makeRestApiRequest } from '@/utils/apiUtils';

export interface IRestApiContext {
	baseUrl: string;
	sessionId: string;
}

export interface RootState {
	baseUrl: string;
	sessionId: string;
}

export async function getWorld(context: IRestApiContext): Promise<string> {
	const result: string = await makeRestApiRequest(context, 'GET', '/hello');

	return result;
}
