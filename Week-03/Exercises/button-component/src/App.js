import Button from './components/Button'

function App() {
  return (
    <>          
      <Button primary outline>Buy Now</Button>
      <Button secondary rounded>Secondary Button</Button>
      <Button danger>Delete</Button>
      <Button warning outline rounded>Are you sure?</Button>
      <Button success outline>Success</Button>
    </>
  )
}

export default App;
