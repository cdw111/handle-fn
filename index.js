// function classNames(...args) {
//     const result = [];
//     args.forEach(value => {
//       if(typeof value === 'string' || typeof value === 'number') {
//         result.push(value)
//       }else if(typeof value === 'object') {
//         if(!value) return
//         if(value instanceof Map) {
            
//           const keys = Object.keys(value);
//           keys.forEach(key => {
//             console.log(value[key])
//             if(!!value[key] && typeof key === 'string') {
                
//               result.push(key)
//             }
//           })
//         }else if(Array.isArray(value)) {
            
//           result.push(classNames(...value))
//         }else {
//           const keys = Object.keys(value)
//           keys.forEach(key => {
//             if(!!value[key] && typeof key === 'string') {
//               result.push(key)
//             }
//           })
//         }
//       }
//     })
    
//     return result.join(" ")
//     // your code here
//   }

//   const obj = new Map([['foo', 'bar']])
//   obj.cool = '!'
//   obj.not = false
//   obj[Symbol()] = 'symbol'
//   Object.defineProperty(obj, 'hidden', {value: true})
// console.log(classNames(['BFE', [{dev: true}, ['is', [obj]]]]))



// function curry(fn) {
//     const fnLength = fn.length;
    
//     return function curry1(...args1) {
//         const args = args1.filter(arg => {
//             if(arg !== curry.placeholder) {
//               return true
//             }
            
//             return false
//           })
//           console.log(args)
//       if(args.length >= fnLength) return fn(...args.splice(0,fnLength))
//       else return function(...args2) { return curry1(...args,...args2)}
//     }
//     // your code here
//   }


//   function join(a, b, c) {
//     return `${a}_${b}_${c}`
//   }
//   const curried = curry(join)(1, 2)
//   console.log("------------------------")
//   console.log(curried(3))
//   console.log("------------------------")
//   console.log(curried(4))

// const a = Symbol()
// console.log(a.description)


let obj = {
    fn: function(){
        console.log(this)
    }
}

obj.fn()