import {useMutation, useQueryClient} from "@tanstack/react-query";
import {useApi} from "../../useApi/useApi.ts";

// Хук useConnectProvider предназначен для отправки на сервер ключей (API-ключей, токенов и т.п.)
// для подключения внешнего провайдера (например, интеграция с Google Drive, Slack и т.д.).
// После успешной отправки (без ошибок) он автоматически обновляет данные


// 1)структура хука
//(2)Использование refetchQueries
// (3) Как использовать этот хук в компоненте


interface Input{
    providerKind : string;// идентификатор провайдера, например 'google'
}

interface RequestProps {
    keys: Record<string, string>// объект с ключами, например { apiKey: '...', secret: '...' }
}
type Response= null | {error:string;details: Record<string, string[]>}
// Если сервер при успехе возвращает какие-то данные (например, сообщение), то тип null не подойдёт.


    export const useConnectProvider = ({providerKind}:Input)=>{
    const route=`task/provider/${providerKind}/user-keys`

    const {putPrivate}=useApi<Response, RequestProps>()
    //Здесь Response – тип ожидаемого ответа от сервера, RequestProps – тип тела запроса.
    //Второй дженерик используется в putPrivate для типизации body.
    //В useApi второй параметр, вероятно, соответствует TBody.


    const queryClient=useQueryClient()
    return useMutation({
    // mutationFn
    // Функция принимает объект { keys }, который должен соответствовать RequestProps.
    // Затем вызывает putPrivate с маршрутом и телом { keys }.
    // Тело отправляется как объект с полем keys, сработает, если сервер ожидает именно такую структуру.
        mutationFn: async ({keys}:RequestProps):Promise<Response> => {
            return putPrivate({
                route,
                body:{keys}
            })
        },
        onSuccess :async (data)=>{
            if(typeof data === 'object' && data?.error)return;
            await queryClient.refetchQueries({queryKey:['providerQuery'] })//(2)Использование refetchQueries
            // Если ошибки нет, вызывает queryClient.refetchQueries({ queryKey: ['providerQuery'] }) с await.
            // Это принудительно перезапрашивает все активные запросы с ключом ['providerQuery'],
            // обновляя данные в интерфейсе.
        },
        retry:false
    })
}


// 1)Структура хука:
//Принимает providerKind как входной параметр.
// Использует useApi с типами Response и RequestProps для putPrivate.
//  RequestProps — интерфейс с полем keys: Record<string, string>. То есть ожидается,
//что при вызове мутации передадут объект вида { keys: { ... } }.
// route формируется как task/provider/${providerKind}/user-keys.
// Мутация: mutationFn принимает { keys } и отправляет putPrivate с телом { keys }.
// onSuccess: проверяет, если data — объект и имеет поле error (т.е. ошибка от сервера),
// то ничего не делает (возврат).
// Иначе вызывает queryClient.refetchQueries({ queryKey: ['providerQuery'] }) с await.

// 2)Использование refetchQueries вместо invalidateQueries
// refetchQueries немедленно выполняет повторный запрос.
// Если данные обновляются не мгновенно, можно использовать invalidateQueries, который помечает кэш как устаревший,
// и TanStack Query сам перезапросит данные при следующем обращении. Однако если тебе нужно, ч
// тобы интерфейс обновился сразу после мутации, refetchQueries – ок. Просто имей в виду,
// что он более «агрессивный» и может создать лишнюю нагрузку, если запросов много.

// (3)Как использовать этот хук в компоненте
// Предположим, у нас есть страница, где пользователь вводит ключи для подключения провайдера.
// ######Что здесь происходит:
// mutation возвращает объект с полями mutate, isLoading, error и др.
// При отправке формы вызываем mutation.mutate с объектом { keys }. Колбэки onSuccess/onError обрабатывают результат.
// Если сервер вернул { error: ... }, показываем сообщение об ошибке.
// Если ответ null – успех.
// Кнопка блокируется на время загрузки.
// const ConnectProviderForm = ({ providerKind }: { providerKind: string }) => {
//     const [apiKey, setApiKey] = useState('');
//     const [apiSecret, setApiSecret] = useState('');
//
//     const mutation = useConnectProvider({ providerKind });
//
//     const handleSubmit = (e: React.FormEvent) => {
//         e.preventDefault();
//
//         // Формируем объект keys
//         const keys = {
//             api_key: apiKey,
//             api_secret: apiSecret,
//         };
//
//         mutation.mutate(
//             { keys },
//             {
//                 onSuccess: (data) => {
//                     if (data && 'error' in data) {
//                         // Серверная ошибка с деталями
//                         alert(`Ошибка: ${data.error}`);
//                         if (data.details) {
//                             console.log('Детали:', data.details);
//                         }
//                     } else {
//                         // Успех
//                         alert('Провайдер успешно подключён!');
//                         // Можно перенаправить или очистить форму
//                     }
//                 },
//                 onError: (error) => {
//                     // Сетевая ошибка или исключение
//                     alert('Произошла ошибка при подключении. Попробуйте позже.');
//                     console.error(error);
//                 },
//             }
//         );
//     };
//
//     return (
//         <form onSubmit={handleSubmit}>
//             <h2>Подключение {providerKind}</h2>
//     <div>
//     <label>API Key:</label>
//     <input
//     type="text"
//     value={apiKey}
//     onChange={(e) => setApiKey(e.target.value)}
//     required
//     />
//     </div>
//     <div>
//     <label>API Secret:</label>
//     <input
//     type="password"
//     value={apiSecret}
//     onChange={(e) => setApiSecret(e.target.value)}
//     required
//     />
//     </div>
//     <button type="submit" disabled={mutation.isLoading}>
//         {mutation.isLoading ? 'Подключение...' : 'Подключить'}
//         </button>
//         </form>
// );
// };