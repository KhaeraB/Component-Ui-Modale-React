# ui-modale-kb 

## Description
A modal pluggin for react using `create-react-app`.

## Installation
Run the following command:

`npm install ui-modale-kb`


## How to use ?
**1 - Import the pluggin :**

`import {Modale} from "ui-modale-kb"`


**2 - Use this state :**

`const [displayModal, setDisplayModal] = useState(false)`


**3 - Return the modal :**
```
<Modale
    title="Enter your modal title here" 
    content ="Hello, your message here" 
    displayModale={displayModale} 
    onHide={() => setDisplayModale(false)} 
/>
```



