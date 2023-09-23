console.log(
  /(guest[0-9]*)\w/g.test(["guest1", { user: "guest1", test: "test" }])
);
console.log(["user", { user: "guest1", test: "test" }]);
