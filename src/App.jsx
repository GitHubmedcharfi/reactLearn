import './App.css'
import { ContactForm } from './ContactForm.jsx'
import { ProductList } from './ProductList.jsx'
import { TodoList } from './TodoList.jsx'
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
      <TodoList />
      <h1>MOHAMED CHARFI</h1>
      <ButtonPress />
    </div>
  )
}

export default App
