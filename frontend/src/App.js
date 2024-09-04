import axios from "axios";
const backendAddress = 'http://localhost:3000';

function App() {
    const controller = new AbortController();

    async function getData() {
        try {
            await axios.get(`${backendAddress}/`, { signal: controller.signal });
        }

        catch (error) {
            console.log(error);
        }
    }

    async function handleAbort () {
        controller.abort();
    }

    return (
        <div className="App">
            <button onClick={getData}>Click to get data!</button>
            <button onClick={handleAbort}>Click to abort!</button>
        </div>
    );
}

export default App;
