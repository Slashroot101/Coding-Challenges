    /**
     * GROUP ARRAYS BY NAME - 
     * 
     * Given an array of objects, sort them by their names,
     * and concatenate the children together to make it one object,
     * with the children combined. Useful for you need to group data
     * for grouped dropdowns. 
     */
    
     //example format
    let test = [
        {
        name: 'Ohio',
        children: [
            'Cincinnati',
            'Columbus'
         ]
        },
        {
        name: 'Ohio',
        children: [
            'Cincinnati',
            'Columbus'
         ]
        },
        {
        name: 'Kentucky',
        children: [
            'Cincinnati',
            'Columbus'
         ]
        }
    ];
  
  function group(array){
    let sorted = [];
    for(let i = 0; i < array.length; i++){
      let index = includes(sorted, array[i].name);
      if(index >= 0){
        sorted[index].children = sorted[index].children.concat(array[i].children);
        continue;
      } else {
        sorted.push(
          {
            name: array[i].name,
            children: array[i].children
          });
      }
    }
    return sorted;
  }
  
  function includes(array, val){
    let ret = -1;
    for(let i = 0; i < array.length; i++){
      if(array[i].name === val){
        ret = i;
        break;
      }
    }
    return ret;
  }
  


 /**
  * UTILITY FUNCTIONS -
  * 
  * These functions were used somewhere and are reusable. There are some utility functions above, 
  * but they are generally specific to that dataset. These are not specific.
  * 
  */

 function generateRandomArray(){
  let rnd = Math.random () * (10000 - 0) + 0;
  let ret = [];
  for(let i = 0; i < rnd; i ++){
    ret[i] = Math.random () * (25000 - 0) + 0;
  }
  return ret;
}