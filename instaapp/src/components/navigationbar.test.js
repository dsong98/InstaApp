const navigationbar = require("./navigationbar")
// @ponicode
describe("toggle", () => {
    let inst

    beforeEach(() => {
        inst = new navigationbar.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.toggle()
        }
    
        expect(callFunction).not.toThrow()
    })
})
