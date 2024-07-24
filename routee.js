import React, { useState } from 'react';


const Routee = () => {
    const [name,namechanged]=useState('ihuoma')
    return (
        <div>
            <input value={name} id='see'onChange={(a)=>chkch(a.target.value)}></input>
            <label for='see'>lh</label>
        </div>
    );
}

export default Routee;
