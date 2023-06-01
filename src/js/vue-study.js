let globalDep = {
  target: null
}

class Dep {
  constructor() {
    this.subs = []
  }
  addSub(sub) {
    this.subs.push(sub)
  }
  removeSub(sub) {
    let index = this.subs.find(ele => ele === sub)
    if (index !== -1) {
      this.subs.splice(index, 1)
    }
  }

  notify() {
    for (let item of this.subs) {
      item.update()
    }
  }
}

class Watcher {
  constructor() {
    globalDep.target = this
  }

  update() {
    console.log('update data')
  }
}

const data = {
  name: 'zx',
  age: 21,
  desc: {
    handsome: true,
    cm: 180
  }
}

function defineReactive(obj, key, val) {
  let dep = new Dep()
  console.log(dep)
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get() {
      if (globalDep.target) {
        dep.addSub(globalDep.target)
      }
      return val
    },
    set(newVal) {
      if (newVal !== val) {
        val = newVal
        dep.notify()
      }
    }
  })
}

for (let key in data) {
  defineReactive(data, key, data[key])
}

let watcher = new Watcher()


const effect = () => {
  console.log('count has been changed')
}
const targetMap = new WeakMap()
const track = (target, key) => {
  let depsMap = targetMap.get(target)
  if (!depsMap) {
    depsMap = new Map()
    targetMap.set(target, depsMap)
  }
  let dep = depsMap.get(key)
  if (!dep) {
    dep = new Set()
    depsMap.set(key, dep)
  }
  dep.add(effect)
}
const trigger = (target, key) => {
  const depsMap = targetMap.get(target)
  if (!depsMap) return
  const dep = depsMap.get(key)
  if (dep) {
    dep.forEach(effect => effect())
  }
}
const reactive = (obj) => {
  return new Proxy(obj, {
    get(target, key) {
      const value = target[key]
      if (value && typeof value === 'object') {
        reactive(value)
      }
      track(target, key)
      return value
    },
    set(target, key, value) {
      target[key] = value
      trigger(target, key)
      return true
    }
  })
}

const state = reactive({
  age: 18
})
console.log(state.age)

