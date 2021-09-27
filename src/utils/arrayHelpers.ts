import { Category } from '../api/orgaizationAPI'

export const convertArrayToObject = (arr: Array<Category>, key: string) => {
    const intialValue = {}
    const newObj = arr.reduce((obj, item) => {
        return {
            ...obj,
            [item[key]]: new Array(item.subcategories.length).fill(false),
        }
    }, intialValue)
    return newObj
}
