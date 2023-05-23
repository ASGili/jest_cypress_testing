import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

  it('should add two numbers',()=>{
    const button1 = container.getByTestId('number1')
    const add = container.getByTestId('operator-add')
    const button4 = container.getByTestId('number4')
    const equals = container.getByTestId('operator-equals')
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button1);
    fireEvent.click(add);
    fireEvent.click(button4);
    fireEvent.click(equals)
    expect(runningTotal.textContent).toEqual('5');
  })

  it('should subtract two numbers', ()=>{
    const button7 = container.getByTestId('number7')
    const subtract = container.getByTestId('operator-subtract')
    const button4 = container.getByTestId('number4')
    const equals = container.getByTestId('operator-equals')
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button7);
    fireEvent.click(subtract);
    fireEvent.click(button4);
    fireEvent.click(equals)
    expect(runningTotal.textContent).toEqual('3');
  })
  
  it('should multiply two numbers',()=>{
    const button3 = container.getByTestId('number3')
    const multiply = container.getByTestId('operator-multiply')
    const button5 = container.getByTestId('number5')
    const equals = container.getByTestId('operator-equals')
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button3);
    fireEvent.click(multiply);
    fireEvent.click(button5);
    fireEvent.click(equals)
    expect(runningTotal.textContent).toEqual('15');
  })

  it('should divide two numbers',()=>{
    const button2 = container.getByTestId('number2')
    const button1 = container.getByTestId('number1')
    const divide = container.getByTestId('operator-divide')
    const button7 = container.getByTestId('number7')
    const equals = container.getByTestId('operator-equals')
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(divide);
    fireEvent.click(button7);
    fireEvent.click(equals)
    expect(runningTotal.textContent).toEqual('3');
  })

  it('should concatenate numbers',()=>{
    const button2 = container.getByTestId('number2')
    const button1 = container.getByTestId('number1')
    const equals = container.getByTestId('operator-equals')
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(equals)
    expect(runningTotal.textContent).toEqual('21');
  })

  it('should concatenate operators',()=>{
    const button2 = container.getByTestId('number2')
    const button1 = container.getByTestId('number1')
    const divide = container.getByTestId('operator-divide')
    const multiply = container.getByTestId('operator-multiply')
    const button7 = container.getByTestId('number7')
    const equals = container.getByTestId('operator-equals')
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(divide);
    fireEvent.click(button7);
    fireEvent.click(multiply);
    fireEvent.click(button2);
    fireEvent.click(equals)
    expect(runningTotal.textContent).toEqual('6');
  })

  it('should clear running total with affecting calculation',()=>{
    const button2 = container.getByTestId('number2')
    const button1 = container.getByTestId('number1')
    const divide = container.getByTestId('operator-divide')
    const multiply = container.getByTestId('operator-multiply')
    const button7 = container.getByTestId('number7')
    const equals = container.getByTestId('operator-equals')
    const runningTotal = container.getByTestId('running-total');
    const clearTotal = container.getByTestId('clear');
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(divide);
    fireEvent.click(button7); 
    fireEvent.click(multiply);
    fireEvent.click(clearTotal);
    fireEvent.click(button2);
    fireEvent.click(equals);
    expect(runningTotal.textContent).toEqual('6');
  })
})