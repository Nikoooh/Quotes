import { Spinner } from "react-bootstrap";
import { Backdrop } from '@mui/material'

interface Props {
  open: boolean
}

const Loading: React.FC<Props> = ({ open }): React.ReactElement  => {
  return (
    <Backdrop open={open}>
      <Spinner animation="border" role="status" />
    </Backdrop>
    
  )
}

export default Loading