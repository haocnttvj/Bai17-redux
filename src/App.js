import { useState } from 'react';

function DemoComponent(props) {
  return (
      <>
        <div>Day la tuoi: {props.age}</div>
        <div>day la ten: {props.displayName}</div>
      </>
  );
};

function App() {
  const [age, setAge] = useState(0);
  const [name, setName] = useState('Hao');

  const onIncreaseAge = () => {
    setAge(age + 1);
  }
  return (
    <div className="App">
      <div>{age}</div>
      <div onClick={onIncreaseAge}>Click vao day de Tang age len 1</div>
      <DemoComponent age={age} displayName={name}/>
    </div>
  );
}

export default App;
