const obj = {
  methodFromObj: () => {
    return `calling ${this.name} from methodFromObj`;
  },
  name: "ali",
  traditionalFunction,
  traditionalFunction2,
};

function traditionalFunction(name) {
  this.name = name;
  const longName = `${this.name} akbar`;

  return `halooo ${longName}`;
}

function traditionalFunction2(name) {
  const longName = `${this.name} akbar`;

  return `halooo ${longName}! this.name is from obj and name param is here: ${name}`;
}

// return name as undefined because arrow fun doesn't have its own `this` binding
// calling undefined from methodFromObj
console.log(obj.methodFromObj());

// return obj.name element still as "ali"
// ┌────────────────┬────────┐
// │    (index)     │ Values │
// ├────────────────┼────────┤
// │ methodFromObj  │        │
// │      name      │ 'ali'  │
// │ methodFromObj2 │        │
// │ methodFromObj3 │        │
// └────────────────┴────────┘
console.table(obj);

// return name from `obj.name` element, i.e "ali", because regular function
// will look up `this.name` binding up to its nearest reference i.e. the obj.name
// embedding reg fun to obj is similar with instantiating class with `new Class()` command
// halooo ali akbar! this.name is from obj
console.log(obj.traditionalFunction2());

// still this.name refers to obj even after providing name param as "kikuuu"
// halooo ali akbar! this.name is from obj and name param is here: kikuuu
console.log(obj.traditionalFunction2("kikuuu"));

// obj.name not mutated
console.log(obj);

// make `this.name` binding i.e. `obj.name` reference be overwritten to "osairisali", not "ali" anymore
// halooo osairis akbar
console.log(obj.traditionalFunction("osairis"));

// `obj.name` element had mutated to "osairisali"
// ┌────────────────┬───────────┐
// │    (index)     │  Values   │
// ├────────────────┼───────────┤
// │ methodFromObj  │           │
// │      name      │ 'osairis' │
// │ methodFromObj2 │           │
// │ methodFromObj3 │           │
// └────────────────┴───────────┘
console.table(obj);

// try to change `this.name` with param but failed, still print "osairis"
const obj2 = {
  obj,
  name: "morolov",
  fun() {
    return this.name;
  },
  arrFun: () => {
    return this.name;
  },
  fun2() {
    return () => {
      return this.name;
    };
  },
  fun3() {
    return this.arrFun;
  },
};

function a() {
  this.name = "sarus";
  return obj2.arrFun();
}

// ┌─────────┬───────────────────────────┬───────────┬─────────────────────────────────┬──────────────────────────────────┬───────────┐
// │ (index) │       methodFromObj       │   name    │       traditionalFunction       │       traditionalFunction2       │  Values   │
// ├─────────┼───────────────────────────┼───────────┼─────────────────────────────────┼──────────────────────────────────┼───────────┤
// │   obj   │ [Function: methodFromObj] │ 'osairis' │ [Function: traditionalFunction] │ [Function: traditionalFunction2] │           │
// │  name   │                           │           │                                 │                                  │ 'morolov' │
// │   fun   │                           │           │                                 │                                  │           │
// │ arrFun  │                           │           │                                 │                                  │           │
// └─────────┴───────────────────────────┴───────────┴─────────────────────────────────┴──────────────────────────────────┴───────────┘
console.table(obj2);

// morolov
console.log("obj2.fun(): ", obj2.fun());

// undefined
console.log("obj2.arrFun(): ", obj2.arrFun());

// undefined at node.js, but return "sarus" in browser
console.log("a(): ", a());

// no changes in `obj2.name` element since a() is not embedded and called from obj2
// ┌─────────┬───────────────────────────┬───────────┬─────────────────────────────────┬──────────────────────────────────┬───────────┐
// │ (index) │       methodFromObj       │   name    │       traditionalFunction       │       traditionalFunction2       │  Values   │
// ├─────────┼───────────────────────────┼───────────┼─────────────────────────────────┼──────────────────────────────────┼───────────┤
// │   obj   │ [Function: methodFromObj] │ 'osairis' │ [Function: traditionalFunction] │ [Function: traditionalFunction2] │           │
// │  name   │                           │           │                                 │                                  │ 'morolov' │
// │   fun   │                           │           │                                 │                                  │           │
// │ arrFun  │                           │           │                                 │                                  │           │
// └─────────┴───────────────────────────┴───────────┴─────────────────────────────────┴──────────────────────────────────┴───────────┘

// return "morolov"
console.log(obj2.fun2()());

// return undefined as fun3() return arrFun, then executed as is, while this.name in arrFun()
// is not bounded to obj, it should be called like obj2.fun2()
console.log(obj2.fun3()());

console.table(obj2);
