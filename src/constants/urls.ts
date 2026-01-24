export const URl={
    users:'https://dummyjson.com/users'
}
// skip  = сколько элементов пропустить
// limit = сколько элементов взять
//
// skip=limit * (page-1) ~ skip=30 * (2-1)=30 -1 нужен потому что:страницы считаются с 1 массивы и skip считаются с 0
// skip=limit*page-limit ~ skip = 30 * 2 - 30 = 30
//
// skip=0   limit=30 → users 1–30
// skip=30  limit=30 → users 31–60
// skip=60  limit=30 → users 61–90
