import React from 'react';

export default function IfElse() {
    let true1 = true, false1 = false;
    let numberVariable = 123; // Define numberVariable
    let floatingPointNumber = 321.432; // Define floatingPointNumber
    let false2 = false;

    let true2 = true1 || false1;
    let true3 = !false2;
    let true4 = numberVariable === 123; // always use === not ==
    let true5 = floatingPointNumber !== 321.432;
    let false3 = numberVariable < 100;
    return(
        <div id="wd-if-else">
            <h4>If Else</h4>
            { true1 && <p>true1</p> }
            { !false1 ? <p>!false1</p> : <p>false1</p> }
            {true2 && <p>true2</p>}
            {true3 && <p>true3</p>}
            {true4 && <p>true4</p>}
            {true5 && <p>true5</p>}
            {false3 ? <p>false3 is true</p> : <p>false3 is false</p>}
            <hr/>
        </div>
    )
}