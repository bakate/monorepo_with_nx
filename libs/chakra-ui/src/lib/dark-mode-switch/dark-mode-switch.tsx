import { Switch, useColorMode } from "@chakra-ui/react";
import React from "react";

// export interface DarkModeSwitchProps {}

const DarkModeSwitch = () => {
  const { toggleColorMode } = useColorMode()

  return (
    <Switch onChange={toggleColorMode} />
  )
}

export default DarkModeSwitch
