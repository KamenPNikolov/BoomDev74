import "./App.css";
import {useState,useMemo} from "react";

function App() {
  const [text, setText] = useState("");
  const isNumber = useMemo(()=>{
                                return !isNaN(text);
                                },[text]);

  return (
    <div className="App">
     <div className="control has-icons-right">
        <input
          className="input is-large"
          type="text"
          placeholder="Enter number..."
          onChange={(event)=>{
                              setText((text)=>{
                                console.log(event.target.value);
                                return event.target.value; 
                              });
                            }
                  }

        />
        <span className="icon is-small is-right">
          <i className={'fas ' + (isNumber?"fa-check":"fa-times")} />
        </span> 
      </div>
    </div>
  );
}

export default App;
