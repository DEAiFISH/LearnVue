// 定义接口用于限制person对象的具体属性
export interface PersonInter{
    id:string,
    name:string,
    age:number,
    x?:number
}

// 一个自定义类型
// export type Persons = Array<PersonInter>
export type Persons = PersonInter[]