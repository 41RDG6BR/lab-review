import './App.css'
// import FormikContainer from './components/FormikContainer'
import LoginForm from "./components/LoginForm";
// import RegistrationForm from "./components/RegistrationForm";
// import EnrollmentForm from './components/EnrollmentForm'
import { theme, ThemeProvider } from '@chakra-ui/react'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <LoginForm />
      </div>
    </ThemeProvider>
  );
}

export default App;
