import { STORES } from '@/constants';
import { defineStore } from 'pinia';

import { RootState, getWorld } from '@/api/helloworld';
import { IRestApiContext } from '@/api/helloworld';

const { VUE_APP_URL_BASE_API } = import.meta.env;

export const useHelloWorldStore = defineStore(STORES.HELLOWORLD, {
	state: (): RootState => ({
		baseUrl: VUE_APP_URL_BASE_API ?? window.BASE_PATH,
		sessionId: Math.random().toString(36).substring(2, 15),
	}),
	actions: {
		async getWorld(): Promise<string> {
			const world = await getWorld(this.getRestApiContext);
			return world;
		},
	},
	getters: {
		getRestApiContext(): IRestApiContext {
			return {
				baseUrl: this.getRestUrl,
				sessionId: this.sessionId,
			};
		},

		getRestUrl(): string {
			return `${this.baseUrl}rest`;
		},
	},
});
