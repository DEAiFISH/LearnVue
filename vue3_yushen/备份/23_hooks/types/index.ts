// 定义接口用于限制person对象的具体属性
export interface Dog{
    id:number,
    image:string
}

// 一个自定义类型
// export type Persons = Array<PersonInter>
export type Dogs = Dog[]