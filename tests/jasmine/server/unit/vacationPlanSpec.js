//"use strict";
describe("Vacation Plan", function () {
    var VacationPlan;

    beforeEach(function() {
        VacationPlan = new VacationPlan;
    })
    it("should be created", function () {
        expect(1).toBe(1);
        spyOn(VacationPlans, "insert").and.callFake(function(doc, callback) {
            // simulate async return of id = "1";
            callback(null, "1");
        });
 
        var vp = new VacationPlan(null, "Tutorial 1", 20);
 
        expect(vp.name).toBe("vp 1");
        expect(vp.capacity).toBe(20);
 
        // vp.save();
 
        // // id should be defined
        // expect(vp.id).toEqual("1");
        // expect(VacationPlan.insert).toHaveBeenCalledWith({name: "Tutorial 1", capacity: 20}, jasmine.any(Function));
    });
});