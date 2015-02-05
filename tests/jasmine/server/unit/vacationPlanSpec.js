//"use strict";
describe("Vacation Plan", function () {
    beforeEach(function() {
    })
    it("should be created", function () {
        expect(1).toBe(1);
        spyOn(VacationPlans, "insert").and.callFake(function(doc, callback) {
            // simulate async return of id = "1";
            callback(null, "1");
        });
        console.log('lol');
        var vp = new VacationPlan({name: 'lol'});
 
        expect(vp.name).toBe('lol');
 
        // vp.save();
 
        // // id should be defined
        // expect(vp.id).toEqual("1");
        // expect(VacationPlan.insert).toHaveBeenCalledWith({name: "Tutorial 1", capacity: 20}, jasmine.any(Function));
    });
});

