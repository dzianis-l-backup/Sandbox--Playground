import {b} from './b'

export const a = () => {
    console.log('Hello, a')
}

b() // cycle dependency that will work
// export expression is not hoisted and matter during the module execution phase
