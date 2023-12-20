//components
import Skeleton from "components/Skeleton/Skeleton";
//libs
import { ReactNode, FC } from "react";

interface Props {
  children: ReactNode;
  skeleton: boolean
}

const InputWrapper: FC<Props> = ({ children, skeleton }) => {

  return (
    skeleton ?
      <Skeleton style={{ height: "50px", flex: "1 1 auto" }} />
      : <>{children}</>
  )
}

export default InputWrapper