
// // export before declarations
//  export const info=(params)=>{
//     console.log(params)
// }

// // standalone export
//  export const error=(params)=>{
//     console.error(params)
// }

// // export {info,error}    //export apart from declarations 


// METHED 2 [export as]

// const info=(params)=>{
//     console.log(params);
// }
// const error=(params)=>{
//     console.log(params);
// }
// export {info as printInfo,error as printError}


// METHED 3 [Export default]
// export default class User { // just add "default"
//     constructor(name) {
//       this.name = name;
//     }
//   }

import {middlewareFunction} from './middleware.js'
export  const info=(...params)=>{
    console.log(...params);
}

export const errorLog=(params)=>{
    console.log(params);
}
const warn=(...params)=>{
    console.warn(params);
}
export const _privateVariable='hi mai private bhyya';

export function loggerFunction(){
    console.log('logger function');
    middlewareFunction()
}

// export default info