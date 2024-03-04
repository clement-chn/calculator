import { useState } from "react"
import Button from "./components/Button"

function App() {

  const [number, setNumber] = useState("0")
  let newElement = 0

  const handleButtonPress = (event) => {

    const authorizedKey = ["1","2","3","4","5","6","7","8","9","*","/","%","-","+","=",".","Backspace", "Enter"]

    let percentage = false
    let equal = false
    let remove = false

    if (authorizedKey.includes(event.key))
    {
      // ici on check, transforme et aussi prépare les variables
      switch(event.key) {
        case '*':
          newElement = 'x'
          break
        case '.':
          newElement = ','
          break
        case '%':
          percentage = true
          newElement = false
          break
        case '=' || 'Enter':
          equal = true
          newElement = false
          break
        case 'Backspace':
          remove = true
          newElement = false
          break
        default:
          newElement = event.key
          break
      }
      console.log("la touche après transfo est " + newElement);

      // on ajoute l'élément (switch case)
      if (calculation.endsWith('x')) {
        console.log('Il y a un x à la fin.');
      }

      let calculation = event.target.value
      setNumber(calculation + newElement)

    }
  }

  // const handleInputChange = (event) => {
  //   const numberInput = (event.target.value).slice(-1)
  //   console.log(numberInput);
  //   let calculation = event.target.value
  //   console.log('la value de linput est ' + numberInput)
  //   console.log('le calcul de base avant input est ' + number)

  //   if (numberInput == 0 && number == 0) {
  //       console.log('oui c\'est bien égal à 0 et le clavier appuie sur 0')
  //       setNumber(0)
  //       calculation = 0
  //   } else if (numberInput !== 0 && number == 0) {
  //     console.log("le clavier appuie sur un autre chiffre que 0 et avant il y avait un 0");
  //       setNumber(numberInput)
  //   } else {
  //     console.log("le clavier appuie sur un autre chiffre que 0 et avant il y avait un autre chiffre que zero");
  //     setNumber(number + numberInput)
  //   }

  //   console.log('le calcul actuel est ' + calculation)
  // };


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
