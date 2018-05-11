import adder from './add';
import multiplier from './multiply';
import divider from './divide'

// export default {
//     add:add.add,
//     multiply:multiply.multiply
// }

 export const add = adder.add;
 export const multiply = multiplier.multiply;
 export const divide = divider.divide;

 export default {
     add: adder.add,
     multiply: multiplier.multiply,
     divide: divider.divide
 }