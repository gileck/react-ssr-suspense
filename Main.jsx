// import React, {useState, useEffect} from 'react'
// import _ from 'lodash'
// import bigJSON from './bigJSON'
//
// const isServer = typeof window === 'undefined'
// const x = 100000
//
// function work() {
//     let a = ''
//     for (let i = 0; i < x; i++) {
//         a = a + JSON.stringify(bigJSON)
//     }
//     return a
// }
//
// function DoWork(props) {
//     work()
//     return props.children
// }
//
// function wrapPromise(promise) {
//     let status = 'pending'
//     let response
//
//     const suspender = promise.then(
//         (res) => {
//             status = 'success'
//             response = res
//         },
//         (err) => {
//             status = 'error'
//             response = err
//         }
//     )
//
//     const read = () => {
//         switch (status) {
//             case 'pending':
//                 throw suspender
//             case 'error':
//                 throw response
//             default:
//                 return response
//         }
//     }
//
//     return {read, status}
// }
//
// function SuspenseInner(props) {
//     // console.log('rendering suspense inner', props.api.status)
//     props.api.read()
//     return props.children
// }
//
//
// function BoxWrapper(props) {
//     console.log('rendering')
//     return props.children
// }
//
// // const createPromise = (ms) => new Promise((r) => setTimeout(r, ms))
// // const createPromise = (ms) => isServer ? new Promise((r) => {}) : new Promise((r) => setTimeout(r, ms))
// // const createPromise = (ms, id) => isServer ? Promise.resolve() : new Promise((r) => window.resolvers[id] = r)
// const createPromise = (ms, id) => isServer ? new Promise((r) => setTimeout(r, ms)) : new Promise((r) => window.resolvers[id] = r)
// // const createPromise = (ms, id) => new Promise((r) => setTimeout(r, ms))
//
//
// function EmptyWrapper(Comp) {
//     return function (props) {
//         return (
//             <BoxWrapper {...props}>
//                 <Comp {...props} />
//             </BoxWrapper>
//         )
//     }
// }
//
// export function SuspenseWrapper(Comp, ms, id) {
//
//     // const Fallback = isServer ? (props) => <Comp {...props} /> : () => <div/>
//     const Fallback = () => <Box>loading...</Box>
//     return function (props) {
//         const api = wrapPromise(createPromise(ms, id))
//         return (
//             // <IntersectionWrapper id={id}>
//                 <React.Suspense fallback={<Fallback {...props} />}>
//                     <SuspenseInner api={api}>
//                         <BoxWrapper {...props}>
//                             <Comp {...props} />
//                         </BoxWrapper>
//                     </SuspenseInner>
//                 </React.Suspense>
//              // </IntersectionWrapper>
//         )
//     }
// }
//
// function Box({children}) {
//     const [color, setColor] = useState('lightgray')
//     useEffect(() => {
//         setColor('lightblue')
//     }, [])
//     return <div style={{border: '1px solid black', width: '100px', padding: '20px', background: color}}>
//         {children}
//     </div>
// }
//
// function Comp(props) {
//     return <Box>
//         {props.children}
//     </Box>
// }
//
// if (!isServer) {
//     window.resolvers = {}
// }
//
// console.log(isServer ? 'server' : 'client')
//
// function IntersectionWrapper({id, children}) {
//     useEffect(() => {
//         const observer = new IntersectionObserver((entries) => {
//             if (entries[0].isIntersecting) {
//                 window.resolvers[id]()
//             }
//         })
//         observer.observe(document.getElementById(id))
//
//
//     }, [id])
//
//     function onComponentClick() {
//         console.log('click', id)
//         window.resolvers[id]()
//     }
//
//
//     return <div id={id}>
//         <button onClick={onComponentClick}>Click</button>
//         {children}
//     </div>
// }
//
// export function Main() {
//     const comps = _.range(0, 10).map((i) => SuspenseWrapper(Comp, i * 1000, i))
//     // const comps = _.range(0, 10).map((i) => EmptyWrapper(Comp, i * 1000, i))
//
//
//     return <div>
//         {
//             comps.map((C, i) => <div key={i}>
//                 <C>
//                     <DoWork>
//                         {i}
//                     </DoWork>
//                 </C>
//
//             </div>)
//         }
//     </div>
// }
//
// // 1.splitting the long task into smaller tasks
// // 2. selective hydration in the client side
// // 3. selective hydration in the server side
// // 4. selective hydration in both
// // 5. selective hydration with resolvers
// // 6. selective hydration with intersection observer

export function Main() {
    return <div></div>
}

