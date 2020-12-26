class Rug {
  constructor(options) {
    this.options = options;
    // bind this.method ke hanya pada object this saat instantiate class
    // nggak akan terpengaruh, meskipun method direferensikan ke obj lain dgn nama elemen yg sama (options)
    this.method = this.method.bind(this);
  }

  method(name) {
    console.log("options from method: ", this.options, " name: ", name);
  }

  method2(name) {
    console.log("options from method2: ", this.options, " name: ", name);
  }
}

let rug = new Rug("hahaha");

let obj = {
  options: "hahaha options from obj",
  method(name) {
    console.log("options from method: ", this.options, " name: ", name);
  },
  method3: rug.method,
  method4: rug.method2,
};

obj.method("ali");
// options from method:  hahaha options from obj  name:  ali

obj.method3("akbar");
// options from method:  hahaha  name:  akbar

obj.method4("hakim");
// options from method2:  hahaha options from obj  name:  hakim

console.table(obj);
