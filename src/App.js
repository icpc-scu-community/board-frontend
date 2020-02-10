import React from 'react';
import './App.css';
import { Board, Footer } from './Components';

const App = () => {
  const trainees = [
    {
      name: 'Ahmed Hossam',
      handle: 'ahmed.7oskaa',
      states: { solved: 3, tried: 5, submissions: 530 }
    },
    {
      name: 'Abdalla Tarek',
      handle: 'Bodipie',
      states: { solved: 3, tried: 5, submissions: 530 }
    },
    {
      name: 'Yousab Esaa',
      handle: 'Yousab_Esaa',
      states: { solved: 3, tried: 5, submissions: 530 }
    },
    {
      name: 'Abdalla Nasser',
      handle: 'abdallanaser1432000',
      states: { solved: 3, tried: 5, submissions: 530 }
    },
    {
      name: 'Mahmoud Aboelsoud',
      handle: 'aboelsoudJr',
      states: { solved: 3, tried: 5, submissions: 530 }
    },
    {
      name: 'Abdelrehman Mamdouh',
      handle: 'Abdelrehman',
      states: { solved: 3, tried: 5, submissions: 530 }
    },
    {
      name: 'Mahmoud Elsayed',
      handle: 'Mahmoudelsayed00',
      states: { solved: 3, tried: 5, submissions: 530 }
    },
    {
      name: 'Yousef Mohamed',
      handle: 'Pixelise',
      states: { solved: 3, tried: 5, submissions: 530 }
    },
    {
      name: 'Hadir Alnajdy',
      handle: 'Hdrnjd',
      states: { solved: 3, tried: 5, submissions: 530 }
    },
    {
      name: 'Lama Salah',
      handle: 'LamaSalah',
      states: { solved: 3, tried: 5, submissions: 530 }
    },
    {
      name: 'Mariem Osama',
      handle: 'Mariem_Osama',
      states: { solved: 3, tried: 5, submissions: 530 }
    },
    {
      name: 'Abdelrahman Elwardany',
      handle: 'Abdelrahman_Elwardany',
      states: { solved: 3, tried: 5, submissions: 530 }
    },
    {
      name: 'Ibrahim Abdalrhman',
      handle: 'ibrahimpepo',
      states: { solved: 3, tried: 5, submissions: 530 }
    },
    {
      name: 'Mohamed AboElkhair',
      handle: 'Mohamed_AboELkhair',
      states: { solved: 3, tried: 5, submissions: 530 }
    },
    {
      name: 'Salma Ahmed',
      handle: 'Sa310',
      states: { solved: 3, tried: 5, submissions: 530 }
    },
    {
      name: 'Hala Ibrahim',
      handle: 'Hala_ibrahim7',
      states: { solved: 3, tried: 5, submissions: 530 }
    },
    {
      name: 'Omnia Adel',
      handle: 'omnia_adel',
      states: { solved: 3, tried: 5, submissions: 530 }
    },
    {
      name: 'Merna Tarek',
      handle: 'Merno',
      states: { solved: 3, tried: 5, submissions: 530 }
    },
    {
      name: 'Ahmed AbdElsalam',
      handle: 'Genius22',
      states: { solved: 3, tried: 5, submissions: 530 }
    },
    {
      name: 'Emad Moenes',
      handle: 'emadmoenes',
      states: { solved: 3, tried: 5, submissions: 530 }
    }
  ];

  const sheets = [
    {
      id: '219158',
      name: 'Sheet #1 (Data type - Conditions)',
      problems: [
        { id: 'A', name: 'Say Hello With C++', solved: 15 },
        { id: 'B', name: 'Basic Data Types', solved: 15 },
        { id: 'C', name: 'Extremely Basic', solved: 15 },
        { id: 'D', name: 'Difference', solved: 15 },
        { id: 'E', name: 'Four Numbers', solved: 15 }
      ]
    },
    {
      id: '219432',
      name: 'Sheet #2 (Loops)',
      problems: [
        { id: 'A', name: '1 to N', solved: 15 },
        { id: 'B', name: 'Even Numbers', solved: 15 },
        { id: 'C', name: 'Summation using Loops', solved: 15 },
        { id: 'D', name: 'Even, Odd, Positive and Negative', solved: 15 },
        { id: 'E', name: 'Fixed Password', solved: 15 }
      ]
    },
    {
      id: '219856',
      name: 'Sheet #4 (Strings)',
      problems: [
        { id: 'A', name: 'Create A New String', solved: 15 },
        { id: 'B', name: 'Find Length', solved: 15 },
        { id: 'C', name: "Let's use Getline", solved: 15 },
        { id: 'D', name: 'Compare', solved: 15 },
        { id: 'E', name: 'Strings', solved: 15 }
      ]
    },

    {
      id: 'fake-1',
      name: 'Sheet #4 (Strings)',
      problems: [
        { id: 'A', name: 'Create A New String', solved: 15 },
        { id: 'B', name: 'Find Length', solved: 15 },
        { id: 'C', name: "Let's use Getline", solved: 15 },
        { id: 'D', name: 'Compare', solved: 15 },
        { id: 'E', name: 'Strings', solved: 15 }
      ]
    },
    {
      id: 'fake-2',
      name: 'Sheet #4 (Strings)',
      problems: [
        { id: 'A', name: 'Create A New String', solved: 15 },
        { id: 'B', name: 'Find Length', solved: 15 },
        { id: 'C', name: "Let's use Getline", solved: 15 },
        { id: 'D', name: 'Compare', solved: 15 },
        { id: 'E', name: 'Strings Strings Strings', solved: 15 }
      ]
    }
  ];

  const submissions = {
    'ahmed.7oskaa': {
      '219158-A': {
        verdict: 'AC',
        triesBeforeAC: 1,
        list: [
          {
            id: '70693734',
            message: 'Time limit exceeded on test 9',
            verdict: 'TLE'
          },
          { id: '70694112', message: 'Accepted', verdict: 'AC' }
        ]
      },
      '219158-B': {
        verdict: '',
        triesBeforeAC: 1,
        list: [
          {
            id: '70693734',
            message: 'Time limit exceeded on test 9',
            verdict: 'TLE'
          }
        ]
      },
      '219158-C': {
        verdict: '',
        triesBeforeAC: 2,
        list: [
          {
            id: '70693734',
            message: 'Time limit exceeded on test 9',
            verdict: 'TLE'
          },
          {
            id: '70693734',
            message: 'Time limit exceeded on test 9',
            verdict: 'TLE'
          }
        ]
      },
      '219158-D': {
        verdict: 'AC',
        triesBeforeAC: 0,
        list: [{ id: '70694112', message: 'Accepted', verdict: 'AC' }]
      }
    }
  };

  return (
    <div className="App">
      <Board sheets={sheets} trainees={trainees} submissions={submissions} />
      <Footer />
    </div>
  );
};

export default App;
