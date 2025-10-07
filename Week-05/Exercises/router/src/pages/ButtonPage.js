import Button from '../components/Button'

const ButtonPage = () => {
    return (
        <>
          <Button primary outline onClick={() => {console.log('click')}}>Buy Now</Button>
          <Button secondary rounded className="fixed right-0">Secondary Button</Button>
          <Button danger>Delete</Button>
          <Button warning outline rounded id={1}>Are you sure?</Button>
          <Button success outline>Success</Button>
        </>
      )
}

export default ButtonPage;
