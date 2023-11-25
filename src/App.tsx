import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";
import ListGroup from "./components/ListGroup";

function App() {
  const [buttonclick, setButtonClick] = useState(false);
  const textClose = "close";
  const color = "primary";
  const items = ["Oman", "Baltimore", "Bangalore", "Udupi"];
  const title = "Best City";
  const handleOnSelect = (city: string) => {
    console.log("city");
  };
  const handleOnClose = () => {
    setButtonClick(!buttonclick);
  };
  const decideAlert = () => {
    return buttonclick && <Alert children={children} />;
  };

  const children = (
    <h2>
      WTF<span>gg</span>
    </h2>
  );
  return (
    <div>
      {decideAlert()}
      <Button text={textClose} onClose={handleOnClose} color={color} />
      <ListGroup title={title} items={items} onSelectItem={handleOnSelect} />
    </div>
  );
}

export default App;
