import type {RequestHandler, RequestEvent } from "@builder.io/qwik-city";

export type Fetch = RequestHandler;

export function mockPromise<T>() {
    let resolve!: (value: T) => void;
    let reject!: (error: any) => void;
    const promise = new Promise((res, rej) => {
        resolve = res;
        reject = rej;
    }) as Promise<T> & { resolve: typeof resolve; reject: typeof reject };
    promise.resolve = resolve;
    promise.reject = reject;
    return promise;
}
export function delay(ms:number){return new Promise(res=>setTimeout(res,ms));}

