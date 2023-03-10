import {Dispatch, SetStateAction, useState} from 'react';
import './App.css';
import {InputList} from "./components/InputList";
import {Input} from "./components/Input";

export type InputDataItem = {
  id: number;
  name: string;
  placeholder: string;
  setValue: Dispatch<SetStateAction<any>>
  value: any;
}

function App() {
  const [x, setX] = useState(undefined)
  const [y, setY] = useState(undefined)
  const [w, setW] = useState(undefined)
  const [g, setG] = useState(undefined)
  const [h, setH] = useState(undefined)
  const [l, setL] = useState(undefined)
  const [b, setB] = useState(undefined)
  const [result, setResult] = useState(undefined)

  const data: InputDataItem[] = [
    {
      id: 0,
      name: 'x',
      placeholder: 'Количество подписчиков',
      setValue: setX,
      value: x,
    },
    {
      id: 1,
      name: 'y',
      placeholder: 'Численность населения',
      setValue: setY,
      value: y,
    },
    {
      id: 2,
      name: 'w',
      placeholder: 'Количество просмотров записей',
      setValue: setW,
      value: w,
    },
    {
      id: 3,
      name: 'G',
      placeholder: 'Количество видов социальных медиа',
      setValue: setG,
      value: g,
    },
    {
      id: 4,
      name: 'H',
      placeholder: 'Количество комментариев',
      setValue: setH,
      value: h,
    },
    {
      id: 5,
      name: 'L',
      placeholder: 'Количество оценок записей сообщества',
      setValue: setL,
      value: l,
    },
    {
      id: 6,
      name: 'B',
      placeholder: 'Количество публикаций в день',
      setValue: setB,
      value: b,
    },
  ];

  const onCalculate = () => {
    // @ts-ignore
    setResult((((((2 * x) / y) + ((100 * w) / (7 * x) + g / 3)) / 3) + (((500 * h) / x) + ((1000 * l) / x)) / 2 + (b / 3)) / 3)
  }

  const isButtonDisabled = !(b && x && y && w && g && h && l)

  return (
    <div className="my-4">
      <InputList data={data} />
      <div className="flex space-x-2 justify-center">
        <button
          type="button"
          className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          onClick={onCalculate}
          disabled={isButtonDisabled}
        >
          {'Рассчитать E'}
        </button>
      </div>
      <Input label={'E'} placeholder={'E'} value={result} disabled />
    </div>
  )
}

export default App;
