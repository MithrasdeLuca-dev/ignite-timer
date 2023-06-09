import { ThemeProvider } from 'styled-components';

import { useState } from 'react'
import { Button } from './components/Button'

import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/global';

export function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <ThemeProvider theme={defaultTheme}>
        <Button variant="primary" />
        <Button variant="secondary" />
        <Button variant="success" />
        <Button variant="danger" />
        <Button />
        
        <GlobalStyle />
      </ThemeProvider>
    </div>
  )
}
