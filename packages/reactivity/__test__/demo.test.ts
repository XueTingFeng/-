import { describe, it, expect } from "vitest"

function add(a, b) {
  return Number(a) + Number(b)
}

describe("vitest测试", () => {
  it("测试add函数", () => {
    expect(add(1, 2)).toBe(3)
  })
  it("测试add传入字符串", () => {
    expect(add("1", "2")).toBe(3)
  })
})
