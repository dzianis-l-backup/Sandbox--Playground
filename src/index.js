import './a'

export const sayHello = () => console.log('Hello')

export function doPromise() {
    return Promise.resolve()
}

export function doAsyncAwait() {
    return async () => {
        return await Promise.resolve()
    }
}

export function doLiteralString() {
    return `string literal`
}
