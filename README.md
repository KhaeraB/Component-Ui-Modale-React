# ui-modale-kb

## Description

A modal pluggin for react using `create-react-app`.

## Installation

Run the following command:

`npm install ui-modale-kb`

## How to use ?

**1 - Import the pluggin :**

`import Modale from "ui-modale-kb"`

**2 - Use this state :**

`const [displayModale, setDisplayModale] = useState(false)`

**3 - Return the modal :**

```
    <Modale
        title="Success"
        content="New employee created !"
        displayModale={displayModale}
        onHide={() => setDisplayModale(false)}
    />
```
### Example 

```
  const [displayModale, setDisplayModale] = useState(false); 
  
  return (
    <div className="App">
      <h1>Ui Modale Kb Example</h1>
    <button id="myBtn"  onClick={() => setDisplayModale(true)}>Open Modal</button>
      <Modale  displayModale={displayModale} onHide={() => setDisplayModale(false)} title="Modal title here" content="Your message here"  />
    </div>
  );
  
```
