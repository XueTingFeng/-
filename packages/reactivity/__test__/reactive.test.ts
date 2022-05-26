import { effect } from "../src/effect"
import { reactive } from "../src/reactive"
import { describe, it, expect } from "vitest"

describe("vitest测试", () => {
  it("测试reactive和effect", () => {
    let obj = reactive({
      name: "xxx",
      age: 18,
    })
    let dummy
    effect(() => {
      dummy = obj.name
    })
    expect(dummy).toBe("xxx")
    obj.name = "ttt"
    expect(dummy).toBe("ttt")

    obj.name = "fff"
    expect(dummy).toBe("fff")

    effect(() => {
      dummy = obj.age
    })
    obj.age = 19
    expect(dummy).toBe(19)
  })
})
