//;console.log("object====");
const arr = [1, 2, 3, 4, 5];
const [, ...more] = arr;
//console.log(more);
const person= {
    name:'tom',
    say: ()=>{
        console.log(`hi my name is ${this.name}`);
    }
}
//console.log(person.say());

const a = {a:1,b:2}
const b = {c:3,d:4,e:{f:1}}
const c = Object.assign({},a,b)
b.e.f = 8;
//console.log(c,a);
const test = {
    name:'12',
    age:12
}
//console.log(Reflect.has(test,'name'));
//console.log(Reflect.deleteProperty(test,'age'));
//console.log(Reflect.ownKeys(test));

const obj = {
    name:'ll',
    jj:'fg',
    store:["dd","ff",3,4,5],
[Symbol.iterator]:function(){
    let index = 0;
    const self = this;
    return {
        next:function(){
            const result =  {
                value:self.store[index],
                done:index>=self.store.length
            }
            index++;
            return result
        }
    }

}};
for (const iterator of obj) {
    console.log(iterator);
    
}

const dnd = {
    css:12,
    javascript:1,
    html:15
}
for (const [name,value] of Object.entries(dnd)) {
    console.log(`${name.padEnd(16,'-')}|${value.toString().padStart(3,'0')}`);
    
}
