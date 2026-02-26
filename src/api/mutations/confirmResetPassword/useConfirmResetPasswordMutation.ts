import {useMutation, useQueryClient} from "@tanstack/react-query";
import {useApi} from "../../useApi/useApi.ts";


// useConfirmResetPasswordMutation — это кастомный хук,
// который инкапсулирует логику отправки запроса на сервер для установки нового пароля.
// Он использует useMutation что позволяет удобно управлять состоянием запроса (загрузка, ошибка, успех)
// и интегрироваться с кэшем.

// (1)Как использовать хук в компоненте(сценарий — форма сброса пароля)
// (2)Если нужно передать какие-то параметры в onSuccess

export interface ErrorResponse {
    message: string;
    errors?: Record<string, string[]>; // для валидационных ошибок
    statusCode?: number;
}

// interface RequestProps {
//     newPassword: string;
//     resetPasswordToken: string;
//     userId:string
// }
export const useConfirmResetPasswordMutation = () => {
    const queryClient = useQueryClient();
    const { post } = useApi<null>();

    const route = '/user/confirm-reset-password';

    return useMutation({
        mutationFn: async ({
                               newPassword,
                               resetPasswordToken,
                               userId,
                           }: {
            newPassword: string;
            resetPasswordToken: string;
            userId: string;
        }): Promise<null> => {
            return post({ route, body: { newPassword, resetPasswordToken, userId } });
        },
        onSuccess: () => {
            // После успешной смены пароля сбрасываем кэш пользователя
            // Например, если у нас есть хук useUser, который использует queryKey ['user']
            queryClient.invalidateQueries({ queryKey: ['user'] });
            // Если есть другие запросы, зависящие от аутентификации, тоже инвалидируем
            queryClient.invalidateQueries({ queryKey: ['profile'] });
            // Или даже все запросы (но осторожно)
            // queryClient.invalidateQueries();
        },
        retry: false,
    });
};

// (1)Как использовать этот хук в компоненте
// Типичный сценарий — форма сброса пароля, где пользователь вводит новый пароль,
// а токен и userId обычно приходят из URL или из контекста (например, после перехода по ссылке из письма)
// Пояснения:
//  mutation.mutateAsync возвращает Promise, поэтому мы можем использовать await и обработать результат.
//  Если сервер возвращает null при успехе, это сигнал, что операция выполнена.
// Если возвращается ErrorResponse, мы должны интерпретировать это как ошибку
// (возможно, невалидный токен или пароль не соответствует требованиям).
// Флаг mutation.isLoading можно использовать для блокировки кнопки и показа спиннера.
//mutation.isError и mutation.error сработают, если запрос выбросил исключение (например, сеть упала).
// Если же сервер вернул ошибку в теле (ErrorResponse), это не считается исключением,
// и isError останется false.
// Поэтому в коде выше мы проверяем результат явно. Это важный нюанс.

// const ConfirmResetPasswordForm = ({ userId, token }: { userId: string; token: string }) => {
//     const [newPassword, setNewPassword] = useState('');
//     const mutation = useConfirmResetPasswordMutation();
//
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const result = await mutation.mutateAsync({ ... });
//             if (result === null) {
//                 alert('Пароль успешно изменён!');
//                 // перенаправление
//             } else {
//                 console.error('Ошибка:', result);
//             }
//         } catch (error) {
//             console.error('Сетевая ошибка:', error);
//         }
//     };
//
//     return (
//         <form onSubmit={handleSubmit}>
//         <input
//             type="password"
//     value={newPassword}
//     onChange={(e) => setNewPassword(e.target.value)}
//     placeholder="Новый пароль"
//     required
//     />
//     <button type="submit" disabled={mutation.isLoading}>
//         {mutation.isLoading ? 'Сохранение...' : 'Сохранить'}
//         </button>
//     {mutation.isError && <p style={{color: 'red'}}>Ошибка: {mutation.error?.message}</p>}
//     </form>
//     );
//     };


// (2)Если нужно передать какие-то параметры в onSuccess
// onSuccess: (data, variables) => {
//     // data = null (то, что вернула mutationFn)
//     // variables = { newPassword, resetPasswordToken, userId }
//     console.log('Пароль изменён для пользователя', variables.userId);
//     queryClient.invalidateQueries({ queryKey: ['user', variables.userId] });
// }
