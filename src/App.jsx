import { useState } from "react"
import Button from "./components/Button"

function App() {

  const [number, setNumber] = useState("0")
  let newElement = 0

  const handleButtonPress = (event) => {

    const operators = ["*", "/", "-", "+", ".", "(", ")"]
    const digits = ["0","1","2","3","4","5","6","7","8","9"]
    const authorizedKey = [...operators,...digits,"=","%","Backspace", "Enter"]
    let calculation = event.target.value 
    const endsWithOperator = (
      calculation.endsWith("x ") ||
      calculation.endsWith("- ") ||
      calculation.endsWith("÷ ") ||
      calculation.endsWith(". ") ||
      calculation.endsWith("(") ||
      calculation.endsWith(")")
    )

    if (authorizedKey.includes(event.key))
    {
      console.log("la touche est autorisée")
      // je veux faire tous dans ce switch. 
      switch(event.key) {
        case '*':
          newElement = ' x '
          if (!endsWithOperator) {
            setNumber(calculation + newElement)
          } 
          break
        case '-':
          newElement = ' - '
          if (!endsWithOperator) {
            setNumber(calculation + newElement)
          } 
          break
        case '/':
          newElement = ' ÷ '
          if (!endsWithOperator) {
            setNumber(calculation + newElement)
          }
          break 
        case '+':
          console.log("wassup");
          newElement = ' + '
          if (!endsWithOperator) {
            setNumber(calculation + newElement)
          }
          break 
        case '.':
          newElement = ','
          if (!endsWithOperator) {
            setNumber(calculation + newElement)
          } 
          break
        case '(':
          newElement = '('
          if (!endsWithOperator) {
            setNumber(calculation + newElement)
          } 
          break  
        case ')':
          newElement = ')'
          if (!endsWithOperator) {
            setNumber(calculation + newElement)
          } 
          break  
        case '%':
          newElement = event.key
          if (endsWithOperator) {
            setNumber(calculation.str.substr(-3) + newElement)
          }
          setNumber(calculation + newElement)
          break
        case '=' || 'Enter':
          break
        case 'Backspace':
          break
        default:
          newElement = event.key
          console.log(calculation)
          if (calculation == 0) {
            setNumber(newElement)
            console.log("c'était un 0")
          } else {
            setNumber(calculation + newElement)
            console.log("c'était pas un 0")
          }
          break
      }
    }
  }


  return (
    <>
    <main className="bg-black flex items-center justify-center h-screen">
      <div>
        <div>
          <input name="number" type="text" value={number} onKeyDown={handleButtonPress} className="w-full bg-white p-6 border border-black focus:border-orange-500 text-right outline-none" readOnly/>
        </div>
        <div>
          <Button name="AC" currentValue={number}/>
          <Button name="+/-" currentValue={number}/>
          <Button name="%" currentValue={number}/>
          <Button name="÷" bgcolor="bg-orange-500" textcolor="text-white" currentValue={number}/>
        </div>
        <div>
          <Button name="7" currentValue={number}/>
          <Button name="8" currentValue={number}/>
          <Button name="9" currentValue={number}/>
          <Button name="x" bgcolor="bg-orange-500" textcolor="text-white" currentValue={number}/>
        </div>
        <div>
          <Button name="4" currentValue={number}/>
          <Button name="5" currentValue={number}/>
          <Button name="6" currentValue={number}/>
          <Button name="-" bgcolor="bg-orange-500" textcolor="text-white" currentValue={number}/>
        </div>
        <div>
          <Button name="1" currentValue={number}/>
          <Button name="2" currentValue={number}/>
          <Button name="3" currentValue={number}/>
          <Button name="+" bgcolor="bg-orange-500" textcolor="text-white" currentValue={number}/>
        </div>
        <div>
          <Button name="0" width="w-1/2" currentValue={number}/>
          <Button name="," currentValue={number}/>
          <Button name="=" bgcolor="bg-orange-500" textcolor="text-white" currentValue={number}/>
        </div>
      </div>
    </main>
    </>
  )
}

export default App
