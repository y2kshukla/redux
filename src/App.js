import { Center, Stack } from '@chakra-ui/react';
import Add from './components/Add';
import List from './components/List';
function App() {
  return (
    <Center bg={`blackAlpha.900`} h={`100vh`} color={`whiteAlpha.700`} sx={{overflow: 'auto'}}>
      <Stack spacing={`10`}>
        <Add/>
        <List/>
      </Stack>
    </Center>
  );
}

export default App;
