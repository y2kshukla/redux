import { AddIcon } from "@chakra-ui/icons";
import { Center, Heading, IconButton, Input, InputGroup, InputRightElement, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addList } from "../redux/reducers/list";

const Add = () => {
  const [add, setAdd] = useState('');
  const dispatch = useDispatch();
    return (
        <Stack border={`1px`} borderRadius={`base`} padding={`10`}>
          <Center>
            <Heading>React reducer tutorial</Heading>
          </Center>
          <InputGroup>
            <Input
              value={add}
              onChange={(e) => {
                setAdd(e.target.value)
              }} 
              placeholder='Add item' 
            />
            <InputRightElement children={
              <IconButton onClick={() => {
                if (add !== '') {
                  dispatch(addList(add));
                }
                setAdd('');
              }} color={`whiteAlpha.700`} icon={<AddIcon color={`blackAlpha.900`}/>}/>
            }/>
          </InputGroup>
        </Stack>
    );
}

export default Add;