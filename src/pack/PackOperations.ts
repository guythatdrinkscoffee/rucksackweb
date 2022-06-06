import {PackItem} from "./Pack";

export function totalPrice(items : PackItem[]) : string {
    const currencySymbol = items.at(0)?.gear.price.charAt(0)
    const values = items.map( item => Number(item.gear.price.replace(item.gear.price.charAt(0),' ')))
    const total = values.reduce((partialResult, currentValue) => partialResult + currentValue, 0).toFixed(2)
    return currencySymbol + total
}

export function totalWeight(items: PackItem[]) : string {
    const unitType = items.at(0)?.gear.weight.split(" ")[1]
    const values = items.map( item => Number(item.gear.weight.split(" ")[0]))
    const total = values.reduce((partialResult, currentValue) => partialResult + currentValue, 0).toFixed(4)
    return total + ' ' +  unitType
}

export function totalWeightValue(items: PackItem[]) : Number {
    const values = items.map( item => Number(item.gear.weight.split(" ")[0]))
    return  values.reduce((partialResult, currentValue) => partialResult + currentValue, 0)
}

export function toChartData(items: PackItem[]) : any[] {
    let packData = items as PackItem[]
    let mapData = new Map<string, PackItem[]>()

    packData.forEach(item => mapData.set(item.gear.category, []))
    packData.forEach(item => mapData.get(item.gear.category)?.push(item))

    const data = []

    for(let entry of Array.from(mapData.entries())){
        let key = entry[0]
        let value = entry[1]
        let weight = totalWeightValue(entry[1])
        data.push({name: key, value: {count: weight, price: totalPrice(value), weight: totalWeight(value) }})
    }

    return data
}

export  function toTableViewData(items: PackItem[]) {
    let packData = items as PackItem[]
    let mapData = new Map<string, PackItem[]>()

    packData.forEach(item => mapData.set(item.gear.category, []))
    // @ts-ignore
    packData.forEach(item => mapData.get(item.gear.category).push(item))

    return mapData
}
