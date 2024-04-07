'use client'
function Card({ children }) {
  return (
    <div className="border rounded-md border-gray-600 p-4">
      Card component: {children}
    </div>
  )
}
import React, { useState } from 'react';
export default function Home() {
  // const name = 'Piotr'
  // const [label, setLabel] = useState('Show');
  const [isVisible, setIsVisible] = useState(true);
  const [names, setNames] = useState(['Piotr', 'John', 'Terry'])
  const handleClick = (e) =>{
    e.preventDefault();
    console.log(e);
    // setLabel(label == 'Show' ? 'Hide' : 'Show');
    setIsVisible(!isVisible)
  }
  

  const cards = isVisible && names.map((name, index) => <Card key={name}> {name} </Card>)




  return (
    <>
      <div className="bg-gray-700">
        Hello, {name}
      </div>
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
      <button onClick={handleClick}>
        {isVisible ? 'Hide' : 'Show' }
        </button>
    </>
  );
}
