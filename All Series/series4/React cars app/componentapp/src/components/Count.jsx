import React from 'react';
const Count = (count, handelDecrement, handelIncrement) => {
    
    return ( 
        <div>
            
            <button onClick={handelIncrement}>++</button>
            {count}
            <button onClick={handelDecrement}>--</button>
        </div>
     );
}
 
export default Count;