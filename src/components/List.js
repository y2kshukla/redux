import { CloseIcon } from "@chakra-ui/icons";
import { Heading, IconButton, Stack, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { removeList } from "../redux/reducers/list";

const List = () => {
    const currentState = useSelector((state) => state.listState);
    const dispatch = useDispatch();

    return (
        <Stack spacing={`5`}>
            <Heading as='h2' size={`md`}>
                List:
            </Heading>
            <Stack overflow={`auto`} height={`400`}>
                {currentState.map((data, index) => {
                    return (
                        <Stack alignItems={`center`} direction={`row`} justify={`space-between`} key={index} border={`1px`} borderRadius={`base`} padding={`5`}>
                            <Text>{ data }</Text>
                            <IconButton onClick={() => {
                                dispatch(removeList(index))
                            }} icon={<CloseIcon color={`blackAlpha.900`}/>}/>
                        </Stack>
                    )
                })}
            </Stack>
        </Stack>
    );
}
 
export default List;