import Button from "./components/Button"

function App() {

  return (
    <>
    <main>
      <div>
        <Button name="0" width="full"/>
      </div>
      <div>
        <Button name="AC"/>
        <Button name="+/-"/>
        <Button name="%"/>
        <Button name="÷" bgcolor="orange" textcolor="white"/>
      </div>
      <div>
        <Button name="7"/>
        <Button name="8"/>
        <Button name="9"/>
        <Button name="x" bgcolor="orange" textcolor="white"/>
      </div>
      <div>
        <Button name="4"/>
        <Button name="5"/>
        <Button name="6"/>
        <Button name="-" bgcolor="orange" textcolor="white"/>
      </div>
      <div>
        <Button name="1"/>
        <Button name="2"/>
        <Button name="3"/>
        <Button name="+" bgcolor="orange" textcolor="white"/>
      </div>
      <div>
        <Button name="0" width="1/2"/>
        <Button name=","/>
        <Button name="=" bgcolor="orange" textcolor="white"/>
      </div>
    </main>
    </>
  )
}

export default App
