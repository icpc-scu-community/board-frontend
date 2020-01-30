import React from 'react';
import './App.css';
import { Trainee } from './Components';

const App = () => {
  const trainees = [
    { name: 'Ahmed Hossam', handle: 'ahmed.7oskaa' },
    { name: 'Abdalla Tarek', handle: 'Bodipie' },
    { name: 'Yousab Esaa', handle: 'Yousab_Esaa' },
    { name: 'Abdalla Nasser', handle: 'abdallanaser1432000' },
    { name: 'Mahmoud Aboelsoud', handle: 'aboelsoudJr' },
    { name: 'Abdelrehman Mamdouh', handle: 'Abdelrehman' },
    { name: 'Mahmoud Elsayed', handle: 'Mahmoudelsayed00' },
    { name: 'Yousef Mohamed', handle: 'Pixelise' },
    { name: 'Hadir Alnajdy', handle: 'Hdrnjd' },
    { name: 'Lama Salah', handle: 'LamaSalah' }
  ];

  return (
    <div className="App">
      {trainees.map(({ name, handle, photo }) => (
        <Trainee key={handle} name={name} handle={handle} />
      ))}
    </div>
  );
};

export default App;
