import { Get, RestController } from '@/decorators';

async function waitFor(milliseconds: number): Promise<string> {
	// We return a new Promise
	return await new Promise((resolve) => {
		// setTimeout is used to resolve the promise after the specified time
		setTimeout(() => {
			resolve('World');
		}, milliseconds);
	});
}

@RestController('/hello')
export class HelloWorldController {
	@Get('/')
	async getWorld() {
		const result: string = await waitFor(2000);
		return result;
	}
}
