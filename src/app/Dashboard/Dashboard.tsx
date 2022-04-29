import * as React from 'react';
import { PageSection, Title } from '@patternfly/react-core';

const Dashboard: React.FunctionComponent = () => (
  <PageSection>
    <Title headingLevel="h1" size="lg">Dashboard Page Title!</Title>
    const [fullname, setFullname] = useState([]);

const onSubmit = (e) => {
  
  console.log(fullname);
  
}
return (
  <div className="App">
<h1>TODO APP </h1>


<form onSubmit={onsubmit}>
<input type="text"
value={fullname}
placeholder="Enter your name"
onChange= {setFullname}/>

<div>
<button type="submit" onClick={onSubmit}>submit</button>
</div>

</form>

  </div>
);
}
  </PageSection>
)

export { Dashboard };
