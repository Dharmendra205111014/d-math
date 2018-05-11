import adder from './add';
import multiplier from './multiply';

// export default {
//     add:add.add,
//     multiply:multiply.multiply
// }

 export const add = adder.add;
 export const multiply = multiplier.multiply;

 export default {
     add: adder.add,
     multiply: multiplier.multiply
 }