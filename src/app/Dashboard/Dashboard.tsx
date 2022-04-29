import * as React from 'react';
import { PageSection, Title } from '@patternfly/react-core';

const Dashboard: React.FunctionComponent = () => {

  const [currentValue, setCurrentValue] = React.useState('')
  const [list, setList] = React.useState<String[]>([]);

  const Todo = (value) => {
    value.preventDefault();
    setList([...list, currentValue]);
    console.log(list);
  }
  return (
  <PageSection>
    <h1>TODO APP</h1>
<form className="input-box">
<input className="input" placeholder="enter you name" onChange={(value)=>{
  setCurrentValue(value.target.value)
}}/>

<button className="add-button" onClick={Todo}>Submit</button>

</form>
{list.map((singleTodo)=>{
  return<div>{singleTodo}</div>
})}



  </PageSection>

)
}
export { Dashboard };