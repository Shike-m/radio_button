import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    height: 36px;
    width: 100%;
    margin: 20px 30px;
    padding: 10px;
`;
const CheckedMark = styled.span`
    position:absolute;
    width:20px;
    height:20px;
    border-radius:50%;
    border: 1px solid #000;
`;

const Button = styled.input`
    opacity:0;
    z-index: 1;
    width:20px;
    height:20px;
    &:checked+${CheckedMark}{
        border: 1px solid #000;
        &::after {
            content:"";
            width:10px;
            height:10px;
            margin:5px;
            border-radius:50%;
            background: blue;
            display: block;
        }
    }
`;

const RadioButton = (props) => {
    const takeChecked = (e) => {
        let value = e.target.value;
        props.onChange(value);
    }
    return (
        <Wrapper>
            <Button
                type="radio"
                name="radio"
                value={props.color}
                id={props.color}
                onChange={(e) => takeChecked(e) }
            />
            <CheckedMark/>
            {props.children}
        </Wrapper>
    )
}

export default RadioButton;