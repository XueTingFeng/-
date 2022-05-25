import { getActiveEffect } from "./effect"
import { mutableHandler, shalldowReactive } from "./baseHandlers"

export const reactiveMap = new WeakMap()
//代理对象=> 原始对象的缓存

export function reactive(target) {
  //如果调用reactive多次
  return createReactiveObject(target, reactiveMap, mutableHandler)
}

export function shalldowReactive(target) {
  //createReactiveObject
}

// let obj = {name:1}
// reactive(obj)
// reactive(obj)//命中缓存
function createReactiveObject(target, proxyMap, proxyHandlers) {
  if (typeof target !== "object") {
    console.warn("target必须是对象")
    return target
  }
  const existingProxy = proxyMap.get(target)
  if (existingProxy) {
    return existingProxy
  }
  const proxy = new Proxy(target, proxyHandlers)
  proxyMap.set(target, proxy)
  return proxy
}

// target key
// {
//    target1:{
//       key: [effect1,effect2],
//       key2: [effect3,effect2]
//    }
//    target2
// }

// let bucket = new Set()
// export function reactive(target: object) {
//   const obj = new Proxy(target, {
//     get(target, key) {
//       //需要知道effect干了什么
//       bucket.add(getActiveEffect())
//       return target[key]
//     },
//     set(target, key, val) {
//       target[key] = val
//       bucket.forEach((fn) => fn())
//       return true
//     },
//   })
//   return obj
// }
