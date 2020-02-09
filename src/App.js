import React from 'react';
import './App.css';
import { Board } from './Components';

const App = () => {
  const trainees = [
    {
      name: 'Ahmed Hossam',
      handle: 'ahmed.7oskaa',
      states: { solved: 26, tried: 5, missed: 120, submissions: 530 }
    },
    {
      name: 'Abdalla Tarek',
      handle: 'Bodipie',
      states: { solved: 26, tried: 5, missed: 120, submissions: 530 }
    },
    {
      name: 'Yousab Esaa',
      handle: 'Yousab_Esaa',
      states: { solved: 26, tried: 5, missed: 120, submissions: 530 }
    },
    {
      name: 'Abdalla Nasser',
      handle: 'abdallanaser1432000',
      states: { solved: 26, tried: 5, missed: 120, submissions: 530 }
    },
    {
      name: 'Mahmoud Aboelsoud',
      handle: 'aboelsoudJr',
      states: { solved: 26, tried: 5, missed: 120, submissions: 530 }
    },
    {
      name: 'Abdelrehman Mamdouh',
      handle: 'Abdelrehman',
      states: { solved: 26, tried: 5, missed: 120, submissions: 530 }
    },
    {
      name: 'Mahmoud Elsayed',
      handle: 'Mahmoudelsayed00',
      states: { solved: 26, tried: 5, missed: 120, submissions: 530 }
    },
    {
      name: 'Yousef Mohamed',
      handle: 'Pixelise',
      states: { solved: 26, tried: 5, missed: 120, submissions: 530 }
    },
    {
      name: 'Hadir Alnajdy',
      handle: 'Hdrnjd',
      states: { solved: 26, tried: 5, missed: 120, submissions: 530 }
    },
    {
      name: 'Lama Salah',
      handle: 'LamaSalah',
      states: { solved: 26, tried: 5, missed: 120, submissions: 530 }
    },
    {
      name: 'Mariem Osama',
      handle: 'Mariem_Osama',
      states: { solved: 26, tried: 5, missed: 120, submissions: 530 }
    },
    {
      name: 'Abdelrahman Elwardany',
      handle: 'Abdelrahman_Elwardany',
      states: { solved: 26, tried: 5, missed: 120, submissions: 530 }
    },
    {
      name: 'Ibrahim Abdalrhman',
      handle: 'ibrahimpepo',
      states: { solved: 26, tried: 5, missed: 120, submissions: 530 }
    },
    {
      name: 'Mohamed AboElkhair',
      handle: 'Mohamed_AboELkhair',
      states: { solved: 26, tried: 5, missed: 120, submissions: 530 }
    },
    {
      name: 'Salma Ahmed',
      handle: 'Sa310',
      states: { solved: 26, tried: 5, missed: 120, submissions: 530 }
    },
    {
      name: 'Hala Ibrahim',
      handle: 'Hala_ibrahim7',
      states: { solved: 26, tried: 5, missed: 120, submissions: 530 }
    },
    {
      name: 'Omnia Adel',
      handle: 'omnia_adel',
      states: { solved: 26, tried: 5, missed: 120, submissions: 530 }
    },
    {
      name: 'Merna Tarek',
      handle: 'Merno',
      states: { solved: 26, tried: 5, missed: 120, submissions: 530 }
    },
    {
      name: 'Ahmed AbdElsalam',
      handle: 'Genius22',
      states: { solved: 26, tried: 5, missed: 120, submissions: 530 }
    },
    {
      name: 'Emad Moenes',
      handle: 'emadmoenes',
      states: { solved: 26, tried: 5, missed: 120, submissions: 530 }
    }
  ];

  const sheets = [
    {
      id: '219158',
      name: 'Sheet #1 (Data type - Conditions)',
      problems: [
        { id: 'A', name: 'Say Hello With C++' },
        { id: 'B', name: 'Basic Data Types' },
        { id: 'C', name: 'Extremely Basic' },
        { id: 'D', name: 'Difference' },
        { id: 'E', name: 'Four Numbers' }
      ]
    },
    {
      id: '219432',
      name: 'Sheet #2 (Loops)',
      problems: [
        { id: 'A', name: '1 to N' },
        { id: 'B', name: 'Even Numbers' },
        { id: 'C', name: 'Summation using Loops' },
        { id: 'D', name: 'Even, Odd, Positive and Negative' },
        { id: 'E', name: 'Fixed Password' }
      ]
    },
    {
      id: '219856',
      name: 'Sheet #4 (Strings)',
      problems: [
        { id: 'A', name: 'Create A New String' },
        { id: 'B', name: 'Find Length' },
        { id: 'C', name: "Let's use Getline" },
        { id: 'D', name: 'Compare' },
        { id: 'E', name: 'Strings' }
      ]
    },

    {
      id: 'fake-1',
      name: 'Sheet #4 (Strings)',
      problems: [
        { id: 'A', name: 'Create A New String' },
        { id: 'B', name: 'Find Length' },
        { id: 'C', name: "Let's use Getline" },
        { id: 'D', name: 'Compare' },
        { id: 'E', name: 'Strings' }
      ]
    },
    {
      id: 'fake-2',
      name: 'Sheet #4 (Strings)',
      problems: [
        { id: 'A', name: 'Create A New String' },
        { id: 'B', name: 'Find Length' },
        { id: 'C', name: "Let's use Getline" },
        { id: 'D', name: 'Compare' },
        { id: 'E', name: 'Strings Strings Strings' }
      ]
    }
  ];

  const submissions = {
    'ahmed.7oskaa': {
      // '219158-A': {
      //   verdict: 'AC',
      //   list: [{ id: '' }]
      // },
      // '219158-B': {
      //   verdict: 'WA',
      //   list: [
      //     // { id:  }
      //   ]
      // }
    }
  };

  return (
    <div className="App">
      <Board sheets={sheets} trainees={trainees} submissions={submissions} />
    </div>
  );
};

export default App;
