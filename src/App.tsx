import * as React from 'react';
import './App.css';

const numberArray = [1, 5, 22];

const arrayOfNames = [
  'Some name',
  'lower cased name',
  'Upper cased name',
  'das',
  'asd',
  'Bam'
];

const numberSortingWithProblem = () => numberArray.sort();

const numberSorting = () => 
  numberArray.sort((a: number, b: number) => a - b);

const numberSortingReverse = () => 
  numberArray.sort((b: number, a: number) => a - b);

const stringSortingWithProblem = () =>
  arrayOfNames.sort();

const stringSorting = () =>
  arrayOfNames.sort((a: string, b: string) => a.toLowerCase().localeCompare(b.toLowerCase()));

const renderList = (list: any) => list.map((item: any, index: number) =>
<li key={index}>{item}</li>
);

class App extends React.Component {
  public render() {
    const numberErrorList = numberSortingWithProblem();
    const numberList = numberSorting();
    const numberListReverse = numberSortingReverse();
    const stringListError = stringSortingWithProblem();
    const stringList = stringSorting();
    return (
      <div className="App">
        <div>---------------Wrong sorting: used sort()---------------</div>
        {renderList(numberErrorList)}
        <div>---------------Right sorting: used a-b---------------</div>
        {renderList(numberList)}
        <div>---------------Right sorting: reverse---------------</div>
        {renderList(numberListReverse)}
        <div>---------------String wrong sorting---------------</div>
        {renderList(stringList)}
        <div>---------------String wrong sorting---------------</div>
        {renderList(stringListError)}
        <div>---------------String right sorting---------------</div>
        {renderList(stringList)}
      </div>
    );
  }
}

export default App;
