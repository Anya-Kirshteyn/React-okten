import {useApi} from "../../useApi/useApi.ts";
import {keepPreviousData, useQuery} from "@tanstack/react-query";

// хук usePostsQuery для получения постов с пагинацией по неделям и опциональным polling.


// (1)Важные моменты
// (2)что возвращает хук? usePostsQuery
// (3)Как работать с хуком usePostsQuery

// Определяем тип входных параметров
interface Input {
    weekStart: string;        // дата начала недели (например, '2025-03-24')
    isEnablePolling: boolean;  // нужно ли опрашивать сервер каждые 5 секунд
}
// если isEnablePolling = true → интервал 5000 мс (опрос каждые 5 секунд);
// если isEnablePolling = false → интервал отключён (значение false).

export interface PostPreviewResponse {
    id: number;
    title: string;
    body: string;
    userId: number;

}

export interface PublishPostPreviewResponse extends PostPreviewResponse {
    published: string;
    status: string;
    updated: string;
}

export const usePostsQuery = ({ weekStart, isEnablePolling }: Input) => {
    const route = `posts?scheduledForFrom=${weekStart}`;
    const { getPrivate } = useApi<PublishPostPreviewResponse[]>();

    return useQuery({
        queryKey: ['posts', weekStart],
        queryFn: async (): Promise<PublishPostPreviewResponse[]> => {
            return getPrivate({ route });
        },
        retry: false,
        enabled: !!weekStart, // токен проверяется внутри getPrivate
        // enabled: !!weekStart – запрос выполнится только если weekStart не пустой.
        // Проверку на токен убрали, потому что getPrivate сам выбросит ошибку, если токена нет.
        // Но если нужно не выполнять запрос без токена, можно добавить условие && !!getToken(),
        // но лучше довериться ошибке.
        staleTime: Infinity,
        refetchInterval: isEnablePolling ? 5000 : false,
        placeholderData: keepPreviousData,
        // при изменении weekStart или при фоновом обновлении старые данные будут показываться до загрузки новых.
    });
};

// (1)Важные моменты
// >Зависимость от токена: токен должен быть сохранён в localStorage под ключом 'token' (или другим, если переопределишь getToken в useApi).
//   Если токена нет, getPrivate выбросит ошибку, и error станет непустым.
//  >Автоматическое обновление: если включён polling (isEnablePolling: true), данные будут запрашиваться каждые 5 секунд.
//     Это удобно для страниц, где данные могут меняться в реальном времени.
// >Кэширование: благодаря staleTime: Infinity данные не будут считаться устаревшими,
//     поэтому переключение на ту же неделю не вызовет повторный запрос (если только не пройдёт время cacheTime,
//     но по умолчанию кэш живёт 5 минут после ухода с компонента). 
// При повторном монтировании компонента данные возьмутся из кэша.


// (2)что возвращает хук? usePostsQuery возвращает стандартный объект UseQueryResult со следующими полезными полями:
//   > data: PublishPostPreviewResponse[] | undefined – массив постов или undefined, если данные ещё не загружены.
// >error: Error | null – объект ошибки, если запрос провалился.
//  >refetch: () => void – функция для ручного перезапроса.
// >status: 'pending' | 'error' | 'success' – строка состояния.
// >isLoading: boolean – true во время первой загрузки (данных ещё нет).
// >isFetching: boolean-true при любой загрузке (включая фоновую). Полезно для индикации обновления.

// (3)Как работать с хуком usePostsQuery
// const PostsPage = () => {
//     const [weekStart, setWeekStart] = React.useState('2025-03-24');
//     const [polling, setPolling] = React.useState(false);
//
//     const {
//         data: posts,
//         isLoading,
//         isFetching,
//         error,
//         refetch,
//     } = usePostsQuery({ weekStart, isEnablePolling: polling });
//
//     if (isLoading) return <div>Загрузка...</div>;
//     if (error) return <div>Ошибка: {error.message}</div>;
//
//     return (
//         <div>
//             <h1>Посты на неделю с {weekStart}</h1>
//     <button onClick={() => setWeekStart('2025-03-31')}>Следующая неделя</button>
//     <label>
//     <input type="checkbox" checked={polling} onChange={(e) => setPolling(e.target.checked)} />
//     Автообновление каждые 5 сек
//     </label>
//     {isFetching && <span> (обновление...)</span>}
//     <ul>
//     {posts?.map(post => (
//         <li key={post.id}>
//             <strong>{post.title}</strong> – статус: {post.status}
//             </li>
//     ))}
//         </ul>
//         <button onClick={() => refetch()}>Обновить вручную</button>
//     </div>
//     );
//     };



// import {useLocation} from "react-router-dom";
// import {keepPreviousData, useQuery} from "@tanstack/react-query";
// import {useApi} from "../../useApi/useApi.ts";
//
// export interface PublishPostPreviewResponse extends PostPreviewResponse {
//     published: string;
//     status:string;
//     updated:string;
// }
// export const usePostsQuery=({weekStart,isEnablePolling}:Input)=> {
//     const route=`posts?scheduledForFrom=${weekStart}`
//
//     const {getPrivate}=useApi<PublishPostPreviewResponse[]>();
//     const token=useLocation().get({key:LocalStorageValues.TOKEN})
//
//     return useQuery({
//         queryKey:['posts',weekStart],
//         queryFn: async (): Promise<PublishPostPreviewResponse[]> => {
//             return getPrivate({route})
//         },
//         retry:false,
//         enabled: !!token && !!weekStart,
//         staleTime:Infinity,
//         refetchInterval:isEnablePolling ? 5000 : 0,
//         placeholderData:keepPreviousData
//     })
//
// }
