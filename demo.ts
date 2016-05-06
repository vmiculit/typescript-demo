// Variables have types! Optional but plain awesome.
// Types are structural
var foo: number = 123
var boo: string = 'qwe'
boo = 'something'

var inc = (x) => x+1

class Points {
  constructor(public x: number, public y: number){
  }
  add(point: Points) {
    return new Points(this.x + point.x, this.y + point.y)
  }
}

var p1 = new Points(0, 10)
var p2 = new Points(10, 20)
var p3 = p1.add(p2)

interface Customer {
  firstName: string
  lastName: string
  age?: number
}

var person: Customer = {
  firstName: 'John',
  lastName: 'Test',
  age: 3
}
