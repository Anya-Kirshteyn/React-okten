import axios from 'axios';

type AxiosUpdateData<TData, TBody> = ({
                                          route,
                                          body,
                                      }: {
    route: string;
    body: TBody;
}) => Promise<TData>;

// Расширяем Output, добавляем приватные методы
interface Output<TData, TBody> {
    get: ({ route }: { route: string }) => Promise<TData>;
    post: AxiosUpdateData<TData, TBody>;
    put: AxiosUpdateData<TData, TBody>;
    deleteEntity: ({ route }: { route: string }) => Promise<null>;
    // Новые методы для авторизованных запросов
    getPrivate: ({ route }: { route: string }) => Promise<TData>;
    postPrivate: AxiosUpdateData<TData, TBody>;
    putPrivate: AxiosUpdateData<TData, TBody>;
    deletePrivate: ({ route }: { route: string }) => Promise<null>;
}

const API_URL = 'https://jsonplaceholder.typicode.com';

// Функция для получения токена (можно переопределить в проекте)
//можно при необходимости заменить способ хранения токена (например, на cookie или контекст) без изменения всего хука.
const getToken = (): string | null => {
    return localStorage.getItem('token'); // например, ключ 'token'
};

export const useApi = <T, TBody = any>(): Output<T, TBody> => {
    const getApiPath = (route: string): string => `${API_URL}${route}`;

    // Базовые методы (без токена)
    const get = async ({ route }: { route: string }): Promise<T> => {
        try {
            const { data } = await axios.get(getApiPath(route));
            return data;
        } catch (e) {
            if (e instanceof Error) {
                throw new Error(e.message);
            }
            throw new Error('Network Error');
        }
    };

    const post = async ({ route, body }: { route: string; body: TBody }): Promise<T> => {
        try {
            const { data } = await axios.post(getApiPath(route), { ...body });
            return data;
        } catch (e) {
            if (e instanceof Error) {
                throw new Error(e.message);
            }
            throw new Error('Network Error');
        }
    };

    const put = async ({ route, body }: { route: string; body: TBody }): Promise<T> => {
        try {
            const { data } = await axios.put(getApiPath(route), { ...body });
            return data;
        } catch (e) {
            if (e instanceof Error) {
                throw new Error(e.message);
            }
            throw new Error('Network Error');
        }
    };

    const deleteEntity = async ({ route }: { route: string }): Promise<null> => {
        try {
            await axios.delete(getApiPath(route));
            return null;
        } catch (e) {
            if (e instanceof Error) {
                throw new Error(e.message);
            }
            throw new Error('Network Error');
        }
    };

    // Приватные методы (с токеном в заголовке)
    const getPrivate = async ({ route }: { route: string }): Promise<T> => {
        const token = getToken();
        if (!token) throw new Error('No token provided');
        try {
            const { data } = await axios.get(getApiPath(route), {
                headers: { Authorization: `Bearer ${token}` },
            });
            return data;
        } catch (e) {
            if (e instanceof Error) {
                throw new Error(e.message);
            }
            throw new Error('Network Error');
        }
    };

    const postPrivate = async ({ route, body }: { route: string; body: TBody }): Promise<T> => {
        const token = getToken();
        if (!token) throw new Error('No token provided');
        try {
            const { data } = await axios.post(getApiPath(route), { ...body }, {
                headers: { Authorization: `Bearer ${token}` },
            });
            return data;
        } catch (e) {
            if (e instanceof Error) {
                throw new Error(e.message);
            }
            throw new Error('Network Error');
        }
    };

    const putPrivate = async ({ route, body }: { route: string; body: TBody }): Promise<T> => {
        const token = getToken();
        if (!token) throw new Error('No token provided');
        try {
            const { data } = await axios.put(getApiPath(route), { ...body }, {
                headers: { Authorization: `Bearer ${token}` },
            });
            return data;
        } catch (e) {
            if (e instanceof Error) {
                throw new Error(e.message);
            }
            throw new Error('Network Error');
        }
    };

    const deletePrivate = async ({ route }: { route: string }): Promise<null> => {
        const token = getToken();
        if (!token) throw new Error('No token provided');
        try {
            await axios.delete(getApiPath(route), {
                headers: { Authorization: `Bearer ${token}` },
            });
            return null;
        } catch (e) {
            if (e instanceof Error) {
                throw new Error(e.message);
            }
            throw new Error('Network Error');
        }
    };

    return {
        get,
        post,
        put,
        deleteEntity,
        getPrivate,
        postPrivate,
        putPrivate,
        deletePrivate,
    };
};