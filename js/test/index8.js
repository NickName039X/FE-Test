const array1 = ['a', 'b', 'c'];

array1.forEach(
    element => {
        console.log(this);//this指向window
        console.log(element);
    }
);

array1.forEach(function(element){
    console.log(this)
});
// expected output: "a"
// expected output: "b"
// expected output: "c"
