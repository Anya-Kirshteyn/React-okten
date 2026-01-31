import * as Joi from "joi";


export const carValidator=Joi.object(
    {
        brand: Joi.string().min(1).max(20).pattern(new RegExp('^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$')).required()
            .messages({'string.pattern.base':"только буквы(Анг.Укр.Рус)"
            }),
        price: Joi.number().integer().min(0).max(1000000).required()
            .messages({"number.min":"cant be less then 0",
                       "number.max":"cant be more then 1000000"}),
        year: Joi.number().integer().min(1990).max(2026).required()
        .messages({"number.min":"cant be less then 1990",
                    "number.max":"cant be more then 2026"})

    }
)
///для подробной документации о записи joi написано на joi.dev