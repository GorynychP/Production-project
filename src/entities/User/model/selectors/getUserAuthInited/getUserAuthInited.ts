import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema'

export const getUserAuthInited = (state: StateSchema) => state?.user?._inited
