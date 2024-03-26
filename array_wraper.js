// Create a class ArrayWrapper that accepts an array of integers in its constructor. This class should have two features:

// When two instances of this class are added together with the + operator, the resulting value is the sum of all the elements in both arrays.
// When the String() function is called on the instance, it will return a comma separated string surrounded by brackets. For example, [1,2,3].



var ArrayWrap = function(nums) {
    this.nums = nums;
};

ArrayWrap.prototype.valueOf = function() {
return this.nums.reduce((sum, num) => sum + num, 0);
}

 const obj1 = new ArrayWrap([1,2]);
 const obj2 = new ArrayWrap([3,4]);
 const obj3 = new ArrayWrap([1,2]);
 const obj4 = new ArrayWrap([1,2]);
 console.log(obj1 + obj2+obj3+obj4); 
 