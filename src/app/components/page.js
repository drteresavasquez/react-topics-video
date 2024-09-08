import React from 'react';
import SayHello from '@/components/SayHello';

export default function Components() {
  const array = [
    {
      name: 'Dr. T',
      greeting: 'I hope you are having a wonderful day!',
    },
    {
      name: 'Trinty',
      greeting: 'You are gorgous!',
    },
  ];
  return (
    <div>
      {array.map((item) => (
        <SayHello key={item.name} name={item.name} greeting={item.greeting} />
      ))}

      <SayHello name="Trinty" greeting="You are gorgous!" />
    </div>
  );
}
