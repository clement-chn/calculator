import Button from "./components/Button"

function App() {

  return (
    <>
    <main className="bg-black flex items-center justify-center h-screen">
      <div> 
      {/* je voulais revoir la taille ici ^ */}
        <div>
          <input type="text" className="w-full bg-white p-6 border border-black text-right outline-none"/>
        </div>
        <div>
          <Button name="AC"/>
          <Button name="+/-"/>
          <Button name="%"/>
          <Button name="÷" bgcolor="bg-orange-500" textcolor="text-white"/>
        </div>
        <div>
          <Button name="7"/>
          <Button name="8"/>
          <Button name="9"/>
          <Button name="x" bgcolor="bg-orange-500" textcolor="text-white"/>
        </div>
        <div>
          <Button name="4"/>
          <Button name="5"/>
          <Button name="6"/>
          <Button name="-" bgcolor="bg-orange-500" textcolor="text-white"/>
        </div>
        <div>
          <Button name="1"/>
          <Button name="2"/>
          <Button name="3"/>
          <Button name="+" bgcolor="bg-orange-500" textcolor="text-white"/>
        </div>
        <div>
          <Button name="0" width="w-1/2"/>
          <Button name=","/>
          <Button name="=" bgcolor="bg-orange-500" textcolor="text-white"/>
        </div>
      </div>
    </main>
    </>
  )
}

export default App
