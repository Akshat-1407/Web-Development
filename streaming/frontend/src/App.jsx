
function App() {
  return (
    <div>
      <h1 style={{padding: "3rem"}}>Video Streaming Example</h1>
      <video controls height={400} width={700}>
        <source src="http://localhost:3000/streaming" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default App
