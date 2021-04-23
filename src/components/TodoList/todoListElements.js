import styled from 'styled-components'

export const TodoWrap = styled.div`
    width: 100%;
    height: 100vh;
    display: relative;
    background-color: black;
    color: white;
`

export const TodoContainer = styled.div`
    width: 25%;
    height: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 15px;
    border-radius: 10px;
    background-color: none;
`

export const ActionButton = styled.button`
    margin: 0 3px;
    padding: 2px;
    font-weight: bold;
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: blue;
`

export const TodoInput = styled.input`
    margin-right: 10px;
    
`
export const TodoItemContainer = styled.div`
    color: black;
`

export const TodoAddContainer = styled.div`
    display: flex;
    height: 50px;
    justify-content: space-between;
    background-color: white;
    margin-bottom: 20px;
    padding: 5px;
    padding-left: 10px;
`

export const TodoListContainer = styled.div`
    text-align: left;
    background-color: white;
    padding: 30px;
`

export const TodoInputBox = styled.input`
    border-width:0px;
    border:none;
`

export const TodoHr = styled.hr`
    background-color: #01bf71;
    width: 60%;
    height: 2px;
`

export const TodoH1 = styled.h1`
    text-align: center;
    color: #01bf71;
`

