import {useLocation} from "react-router-dom";
import {useMutation} from "@tanstack/react-query";
import {UrlQueries} from "../../../constants/urlQueries.ts";
import {useApi} from "../../useApi/useApi.ts";

// хук для получения OAuth-URL от сервера—это адрес,на который нужно перенаправить user для авторизации
// через внешнего провайдера (Google, Facebook и т.п.).
// Хук использует useMutation, так как отправляет данные на сервер (PUT-запрос с redirect_url)
// и получает в ответ либо строку (URL), либо объект с ошибкой.

// (1)Что делает этот хук?
// (2)redirect_url — адрес, как формируется динамически?
// (3)Response объяснение что внутри
// (4)Что такое Record<string, string[]>?
// (5)как использовать хук в компоненте? Допустим, у нас есть страница с кнопками для разных провайдеров


interface RequestProps{
    providerKind:string
    //Это входные параметры мутации. providerKind — идентификатор провайдера, например 'google' или 'facebook'.
}
interface Body{
    redirect_url:string//(2)
    // Body-Тело запроса.
    // redirect_url — адрес, на который провайдер вернёт пользователя после авторизации.
}
// Ответ может быть строкой (URL для редиректа) или объектом ошибки
type Response=string | {error:string;details: Record<string, string[]>}//(3)####(4)

export const useGetOAuthUrl = () => {
    const route = 'task/provider'; // добавили слеш в начале
    const { putPrivate } = useApi<Response, Body>();
    const { pathname } = useLocation();

    return useMutation({
        mutationFn: async ({ providerKind }: RequestProps): Promise<Response> => {
            if (!providerKind) throw new Error('Provider kind is required');
            return putPrivate({
                route: `${route}/${providerKind}/oauth/authorize`,
                body: {
                    redirect_url: `${window.location.origin}${pathname}?${UrlQueries.OATH_PROVIDER}=${providerKind}`,
                },
            });
        },
        retry: false,
    });
};

// (1)Что делает этот хук?
// Хук отправляет PUT-запрос на эндпоинт /task/provider/{providerKind}/oauth/authorize с телом,
// содержащим поле redirect_url. Сервер должен вернуть:
// строку — полный URL для перенаправления пользователя на страницу авторизации провайдера (например, https://accounts.google.com/o/oauth2/auth?...).
// объект ошибки — если что-то пошло не так (например, неподдерживаемый провайдер).
// В этом случае объект содержит поле error с сообщением и details с детальными ошибками валидации.
// Хук использует useMutation, поэтому он не выполняется автоматически — его нужно вызвать в нужный момент
// (например, при клике на кнопку «Войти через Google»).

// (2)redirect_url — адрес, котрый формируется динамически
//> window.location.origin — протокол, домен и порт (например, https://mysite.com:3000). Это база.
//> pathname — текущий путь (например, /profile или /oauth/callback). Берётся из useLocation().
//> ?${UrlQueries.OATH_PROVIDER}=${providerKind} — добавляется query-параметр, где ключ (например, provider) взят из константы, а значение — providerKind (google, facebook и т.д.).

// (3)Response объяснение что внутри
// Если ответ — string, значит сервер вернул URL для редиректа.
// Если ответ — объект с полями error и details, значит произошла ошибка.
// error — общее сообщение,
// details — детализированные ошибки по полям.

// (4)Что такое Record<string, string[]>?
//Record<K, V> — это встроенный утилитарный тип TypeScript. Он создаёт тип объекта,
// у которого все ключи имеют тип K, а все значения — тип V.
// Здесь Record<string, string[]> означает объект, где ключи — строки (например, названия полей формы),
// а значения — массивы строк (список ошибок для этого поля)

// (5)как использовать хук в компоненте? Допустим, у нас есть страница с кнопками для разных провайдеров
//Что здесь происходит:
// >При клике вызывается mutation.mutate с нужным providerKind.
//  >В onSuccess проверяем тип ответа:
//    *Если строка — выполняем редирект (window.location.href = data).
//    *Если объект с ошибкой — показываем сообщение.
// >В onError обрабатываются сетевые ошибки (например, сервер недоступен).
// >Кнопка блокируется на время выполнения запроса (mutation.isLoading).
//
// const OAuthButtons = () => {
//   const mutation = useGetOAuthUrl();
//
//   const handleOAuth = (providerKind: string) => {
//     mutation.mutate(
//       { providerKind },
//       {
//         onSuccess: (data) => {
//           if (typeof data === 'string') {
//             // Получен URL – перенаправляем пользователя
//             window.location.href = data;
//           } else {
//             // Обрабатываем ошибку от сервера
//             alert(`Ошибка: ${data.error}`);
//             if (data.details) {
//               console.log('Детали ошибки:', data.details);
//             }
//           }
//         },
//         onError: (error) => {
//           // Сетевая ошибка или исключение
//           console.error('Ошибка запроса:', error);
//         },
//       }
//     );
//   };
//
//   return (
//     <div>
//       <button onClick={() => handleOAuth('google')} disabled={mutation.isLoading}>
//         {mutation.isLoading ? 'Загрузка...' : 'Войти через Google'}
//       </button>
//       <button onClick={() => handleOAuth('facebook')} disabled={mutation.isLoading}>
//         Войти через Facebook
//       </button>
//     </div>
//   );
// };
