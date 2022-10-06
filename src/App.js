import "./App.css";
import { useRef, useState} from 'react';
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import SignaturePad from "react-signature-canvas";
import "./signatureCanvas.css";

function App() {
  const [imageURL, setImageURL] = useState(null);
  const sigCanvas = useRef({});
  const handeClear = () =>  sigCanvas.current.clear();
  // const handleSave = () => console.log(sigCanvas.current.getTrimmedCanvas().toDataURL("image/png"));
  const handleSave = () => setImageURL(sigCanvas.current.getTrimmedCanvas().toDataURL("image/png"));

  return (
    <div className="App">
      <h1>E-signature</h1>

      <Popup modal trigger={<button>Show</button>} closeOnDocumentClick={false}>
        { close => (
          <>
            <SignaturePad
              ref={sigCanvas}
              canvasProps={{
                className: "signatureCanvas",
              }}
            />
            <button onClick={close}>Close</button>
            <button onClick={handeClear}>Clear</button>
            <button onClick={handleSave}>Save</button>
          </>
        )}
      </Popup>

      <br />
      <br />

      {imageURL ? (<img
      src={imageURL}
      alt="mi firma"
      style={{
        display: "block",
        margin: "0 auto",
        border: "1px solid black",
        width: "300px",
      }}
      />) : null }
    </div>
  );
}

export default App;
