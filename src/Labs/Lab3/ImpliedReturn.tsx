import React from 'react';

// Define the multiply function
const multiply = (a: number, b: number): number => {
    return a * b;
}

const ImpliedReturn = () => {
    const fourTimesFive = multiply(4, 5)
    console.log(fourTimesFive);

    return (
        <div id="wd-implied-return">
            <h4>Implied return</h4>
            fourTimesFive = {fourTimesFive}
            <br />
        </div>
    );
}

export default ImpliedReturn;