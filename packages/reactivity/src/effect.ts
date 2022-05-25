let activeEffect = null
// export function getActiveEffect() {
//   return activeEffect
// }
export function effect(fn) {
  activeEffect = fn
  fn()
}

// {
//    target:{key:[effect,effect2]}
// }
const targetMap = new WeakMap()

export function track(target, type, key) {
  let depsMap = targetMap.get(target)
  if (!depsMap) {
    depsMap = new Map()
    targetMap.set(target, depsMap)
  }
  let deps = depsMap.get(key)
  if (!deps) {
    deps = new Set()
  }
  if (activeEffect) {
    deps.add(activeEffect)
  }
  depsMap.set(key, deps)
}

export function trigger(target, type, key, val) {
  let depsMap = targetMap.get(target)
  if (!depsMap) {
    return
  }
  let deps = depsMap.get(key)
  if (!deps) {
    return
  }
  deps.forEach((effect) => effect())
}
