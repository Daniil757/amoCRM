/**
 * @file unAuthType.ts
 * @description Структура ответа сервера при неправильном токене
 * @author Daniil Perevozchikov
 * @version 1.0
 * @date 23.10.2023
 */

export type unAuth = {
    values: string,
    status: number
}