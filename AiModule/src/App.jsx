import { useState } from "react"
import "./App.css"
import axios from "axios"

function App() {
	const [prompt, setPrompt] = useState("")
	const [response, setResponse] = useState("")

	const handleSubmit = async()=>{
		try {
            const result = await axios.post("http://localhost:5000/generate", { prompt });
            setResponse(result.data.generated_text);
        } catch (error) {
            console.error("Error generating text:", error);
        }
	}
	return (
		<>
			<div>

				<textarea type="text" value={prompt} onChange={(e)=>setPrompt(e.target.value)}></textarea>
				<div className="btns">

				<button onClick={handleSubmit}>Experience</button>
				<button>Designation</button>
				</div>
				{/* </form> */}
				{response && (
                <div style={{ marginTop: "20px", padding: "10px", border: "1px solid #ddd" }}>
                    <h3>Generated Text:</h3>
                    <p>{response}</p>
                </div>)}
			</div>
		</>
	)
}

export default App
