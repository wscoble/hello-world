describe("Hello", function() {
  var hello;
  beforeEach(function() {
    hello = Hello;
  });
  it("when asking hello, world is returned", function() {
    expect(hello.hello()).toEqual("world");
  });
});
