'use client'

import React, { useState } from 'react';
import Card from "@/components/card";

export default function Home() {
  
  // const [label, setLabel] = useState('Show');
  const [isVisible, setIsVisible] = useState(true);
  const [names, setNames] = useState(['Piotr', 'John', 'Terry'])
  const name = 'Piotr'
  const handleClick = (e) =>{
    e.preventDefault();
    console.log(e);
    // setLabel(label == 'Show' ? 'Hide' : 'Show');
    setIsVisible(!isVisible)
  }

  const handleAdd = (e) =>{
    setNames([...names,'New element!'])
  }
  

  const cards = isVisible && names.map((name, index) => <Card key={index}> {name} </Card>)

  return (
    <>
      <div className="space-y-4">
          Hello, {names}
          <div className="flex justify-between mb-6">
            <div className="p-2">Flex item</div>
            <div className="p-2">Flex item</div>
            <div className="p-2">Flex item</div>
            <div className="p-2">Flex item</div>
            <div className="p-2">Flex item</div>
            <div className="p-2">Flex item</div>
          </div>
          <Card>This is being passed from the parent</Card>
          <Card>
            <div>This is JS!</div>
            <Card>
              <div className="flex justify-between mb-6">
                <div className="p-2">Flex item</div>
                <div className="p-2">Flex item</div>
                <div className="p-2">Flex item</div>
                <div className="p-2">Flex item</div>
                <div className="p-2">Flex item</div>
                <div className="p-2">Flex item</div>
              </div>
            </Card>
          </Card>
          <Card />
          {cards}
          <div className='flex space-x-4'>
            <button onClick={handleClick}>
              {isVisible ? 'Hide' : 'Show' }
              </button>
            <button onClick={handleAdd}>Add</button>
          </div>
      </div>
    </>
  );
}
