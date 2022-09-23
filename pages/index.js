import Box from "../components/box/box";
import Button from "../components/button/button";
import Card from "../components/card/card";
import Input from "../components/input/input";
import Text from "../components/text/text";

const Home = () => {

  return (
    <Card>
      <Box />
      <Text firstText={'Expenses Tracker'} secondText={'To Do List'} />
      <Input label={'Who you be?'} placeholder={'Enter username'} />
      <Input label={'Password'} placeholder={'Enter password'} isPassword/>

      <Button text={'LEGGO!'} url={ '/' } />
    </Card>
  )
}

export default Home