import {useLocation} from "react-router-dom";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {useApi} from "../../useApi/useApi.ts";
import {UrlQueries} from "../../../constants/urlQueries.ts";

// пример интеграции OAuth (например, "Войти через Google") в React-приложение с использованием TanStack Query.
// Хук отвечает за отправку данных на сервер для подключения внешнего провайдера (Google, Facebook и т.д.) к учётной записи пользователя.


// providerKind — строка, идентифицирующая провайдера, например 'google', 'facebook'. Хук принимает его как параметр через объект Input.
interface Input{
    providerKind : string;
}
//не безопастная практика лучше сделать поля под ожидания сервера
type RequestProps=Record<string, string>;

type OAuthResponse=null | {error : string};

export const useConnectOAuth = ({providerKind}:Input)=> {
    const queryClient = useQueryClient();
    const route=`task/provider`
    const {putPrivate}=useApi<OAuthResponse,RequestProps >()
    // useLocation().pathname — текущий путь в приложении (например, /profile).
    // Он нужен для формирования redirect_url, куда пользователь вернётся после подтверждения на стороне провайдера.
    const { pathname}=useLocation()

return useMutation({

    mutationFn: async (body: RequestProps): Promise<OAuthResponse> => {
        return putPrivate({
            route: `${route}/${providerKind}/oauth/token`,
            body: {
                redirect_url: `${window.location.origin}${pathname}?${UrlQueries.OATH_PROVIDER}=${providerKind}`,
                ...body
                //             >>redirect_url — полный URL, на который провайдер перенаправит пользователя после авторизации.
                //         Здесь используется window.location.origin (домен + порт), текущий pathname и query-параметр,
                //         указывающий, какой провайдер был использован. Это позволяет после возвращения на сайт понять,
                //         с каким провайдером происходила авторизация.
                //         >>...body — все остальные поля, переданные в mutationFn.
                //         Обычно это code (временный код авторизации) и state (защита от CSRF), которые приходят от провайдера.
            }
        })
    },
    onSuccess: () => {
        // После успешного подключения провайдера обновляем данные пользователя
        void queryClient.invalidateQueries({queryKey: ['user']});
    },
    retry: false,
})
}