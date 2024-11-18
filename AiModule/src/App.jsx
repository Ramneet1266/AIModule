import { useState } from "react"
import "./App.css"
import axios from "axios"

function App() {
	const [prompt, setPrompt] = useState("")
	const [response, setResponse] = useState("")

	const handleSubmit = (e)=>{
		e.preventDefault()

		axios.post("http://localhost:8000/chat",{prompt}).then((res)=>{
			setResponse(res.data)
		}).catch((err)=>{
			console.log(err);
			
		})
	}
	return (
		<>
			<div>
				<form onSubmit={handleSubmit}>

				<textarea type="text" value={prompt} onChange={(e)=>setPrompt(e.target.value)}></textarea>
				<div className="btns">

				<button>Experience</button>
				<button>Designation</button>
				</div>
				</form>
				<p>{response}</p>
			</div>
		</>
	)
}

export default App
