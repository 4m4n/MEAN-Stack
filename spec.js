var mainVar = {
    "TestFunction": function(num){
        if(typeof num !== "number"){
            throw new Exception("Invalid argument");
        }
        return num * 2;
    }
}
describe("Check Integer", function() {
   it("Expect Double", function (){
       expect(mainVar.TestFunction(3)).toEqual(6);
   });
   it("Expect Exception", function(){
       expect(function(){mainVar.TestFunction("hello")}).toThrow();
   })
});

/*
var foo = {
    bar: 42
};

describe("foo", function(){
   it("has a bar of 42", function(){
       expect(foo.bar).toEqual(42);
   }) 
});
*/