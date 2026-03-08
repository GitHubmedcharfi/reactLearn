import './App.css'
import { ContactForm } from './ContactForm.jsx'
import { UserProfile } from './UserProfile.jsx'
function ButtonPress() {
  return (
    <button>Click me</button>
  )
}
function Bonjour() {
  return (
    <div>
      <h1>Bonjour</h1>
    </div>
  )
}
function App() {


  return (
    <div>
      <UserProfile name="Mohamed Charfi" isOnline={true} />
      <UserProfile name="MohamedCharfi" isOnline={false} />
      <ContactForm />
      <Bonjour />
      <h1>MOHAMED CHARFI</h1>
      <ButtonPress />
    </div>
  )
}

export default App
