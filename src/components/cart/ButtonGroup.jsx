/*import { ButtonGroup, Button, styled } from "@mui/material"


const Component = styled (ButtonGroup)({
    marginTop:'30px'
})

const ButtonStyle = styled(Button)({
    borderRadius:'50%'
})

const BtnGroup = () =>{
    return(
    <Component>
        <ButtonStyle>-</ButtonStyle>
        <Button>1</Button>
        <ButtonStyle>+</ButtonStyle>
    </Component>
    )
}

export default BtnGroup*/

import React, { useState } from 'react';
import { ButtonGroup, Button, styled } from "@mui/material";

const Component = styled(ButtonGroup)({
    marginTop:'30px'
})

const ButtonStyle = styled(Button)({
    borderRadius:'50%',
    cursor:'pointer'
})

const BtnGroup = () =>{
    const [count, setCount] = useState(1);

    const handleIncrease = () => {
        setCount(count + 1);
    }

    const handleDecrease = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    }

    return(
        <Component>
            <ButtonStyle onClick={handleDecrease}>-</ButtonStyle>
            <Button>{count}</Button>
            <ButtonStyle onClick={handleIncrease}>+</ButtonStyle>
        </Component>
    )
}

export default BtnGroup;
