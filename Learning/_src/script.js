print('Hello!');
print(+new Date());
runCommand("cmd", "/C", "date /T");

var array = [1, 2, 3, 4];
print('Length:' , array.length);
print(array.slice(1,2));
print('Length:' , array.length);
var a = ['x', 'y', 'z'];
print('Length:', a.length);
a[10] = 'f';
print(a);
print('Length:', a.length);
a.length = 10;
print(a[10]);
print(a[5]=== undefined);
//print(array.slice(2));
print(a['2']);

a = ['a', 'b', 'c', 'd'];

print('Slice: ', a.slice());

function test(a, b) {
  
}
print(test.length);