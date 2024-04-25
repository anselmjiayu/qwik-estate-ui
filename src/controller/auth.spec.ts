import { Mock, describe, it, vi,beforeEach } from "vitest";
import { mockPromise, type Fetch } from "./testing-setup";
import { AuthApi } from "./auth";

// describe('auth',  () => {
//     let fetchMock: Mock<Parameters<Fetch>, ReturnType<Fetch>>;
//     let delayMock: Mock<[number], Promise<void>>;
//     let api:AuthApi;
//     beforeEach(() => {
//         fetchMock = vi.fn<Parameters<Fetch>, ReturnType<Fetch>>(mockPromise);
//         delayMock = vi.fn<[number], Promise<void>>(mockPromise);
//         api = new AuthApi()
//     })

//     describe('register', () => {
//         it('should return response', async({expect}) => {
//             const responsePromise = api.register()
//         })
//     })

// })
