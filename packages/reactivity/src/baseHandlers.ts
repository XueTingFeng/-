// get set delete等proxy
import { track, trigger } from "./effect"
function get(target, key) {
  track(target, "get", key)
  return target[key]
}

function set(target, key, val) {
  target[key] = val
  trigger(target, "set", key, val)
  return true
}

export const mutableHandler = {
  get,
  set,
}
