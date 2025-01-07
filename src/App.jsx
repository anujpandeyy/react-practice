import './App.css'
import Footer from './components/Footer';
import Header from './components/Header';
import Food from './components/Food';
import Card from './components/Card';
import Button from './components/Button';
import Student from './components/Student';
import UserGreeting from './components/UserGreeting';
function App() {
  return(
    <>
      <Header></Header>
      <Food></Food>
      <Card></Card>
      <Button></Button>
      <Student name= "Shiva" age={21} isStudent={false}></Student>
      <Student name= "Ram" age={22} isStudent={false}></Student>
      <Student name= "Anuj" age={21} isStudent={true}></Student>
      <Student></Student>
      <UserGreeting isLoggedIn = {true} username = "Anuj"></UserGreeting>
      <Footer></Footer>
    </>
  );
}

export default App;
