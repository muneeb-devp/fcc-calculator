import React, { useState } from 'react'
import './App.css'
import Button from './components/button/button.component'
import Display from './components/display/display.component'

function App() {
  let [calculation, setCalculation] = useState('0')
  let [display, setDisplay] = useState('0')
  const [decimalAllowed, setDecimalAllowed] = useState(true)

  const buttons = 'AC / x 7 8 9 - 4 5 6 + 1 2 3 = 0 .'.split(' ')
  const operations = '+ - / x'.split(' ')
  const ids = 'clear divide multiply seven eight nine subtract four five six add one two three equals zero decimal'.split(' ')

  const clearScreen = (text = '') => { setDisplay(text); setCalculation(text) }

  const btnClicked = (e) => {
    const text = e.target.textContent
    switch (text) {
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
      case '0':
      case '.':
        if ((calculation.indexOf('.') === calculation.length - 1 || !decimalAllowed) && text === '.') return

        if (display === '-' || display === '+') {
          console.log(`Calculation: ${calculation}\nDisplay: ${display}\nText: ${text}`)

          setCalculation(calculation.at(calculation.length - 1) !== display ? `${calculation}${display}${text}` : `${calculation}${text}`)
          setDisplay(`${display}${text}`)
          return;
        }

        if (calculation.indexOf('=') !== -1) {
          setCalculation(text)
          setDisplay(text)
          return;
        }

        setDisplay(
          display !== '0' && operations.indexOf(display) === -1 ? `${display}${text}` : text
        )
        setCalculation(calculation !== '0' ? `${calculation}${text}` : text)

        if (text === '.' && decimalAllowed) setDecimalAllowed(false)

        break
      case '+':
      case '-':
      case 'x':
      case '/':
        const lastChar = display.length ? display.at(display.length - 1) : ''

        if (!decimalAllowed) setDecimalAllowed(true)

        if (lastChar === 'x' || lastChar === '/' || lastChar === '+' || lastChar === '-') {
          setDisplay(`${text}`)
          if (text !== '-')
            setCalculation(`${calculation.substring(0, calculation.length - 1)}${text}`)
        }

        if ((lastChar === 'x' || lastChar === '/') && (text === '+' || text === '-')) {
          setDisplay(`${text}`)
          return
        }

        if (calculation.indexOf('=') !== -1) {
          setCalculation(`${display}${text}`)
          setDisplay(text)
          return;
        }

        if (display.length > 0 && operations.indexOf(lastChar) === -1)
          setCalculation(`${calculation}${text}`)

        setDisplay(text)

        break
      case 'AC':
        if (!decimalAllowed) setDecimalAllowed(true)
        clearScreen('0')
        break
      case '=':
        let computation = calculation.replace(new RegExp('x', 'g'), '*')
        try {
          let expressionEval = eval(computation)
          let result = (expressionEval % 1) !== 0 ? expressionEval.toFixed(1) : expressionEval

          setDisplay(expressionEval)
          setCalculation(`${calculation}=${result}`)

          if (!decimalAllowed) setDecimalAllowed(true)
        } catch (error) {
          console.error(error)
        }
        break
      default:
        break
    }
  }

  return (
    <div>
      <div className="display">
        <Display text={display} calculation={calculation} />
      </div>
      <div className='calculator'>
        <div className='buttons'>
          {
            buttons.map(
              (btn, i) => <Button key={i} text={btn} idName={ids[i]} onClick={btnClicked} />
            )
          }
        </div>
      </div>
    </div>
  )
}

export default App
