
import { Modal, Box, Typography } from '@mui/material';

interface SuccessModalProps {
    isOpenModal: boolean;
    handleCloseModal: () => void;
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
  textAlign: 'center',
};

const  SuccessModal: React.FC<SuccessModalProps> = ({ isOpenModal, handleCloseModal }) => {
  return (
    <Modal
      open={isOpenModal}
      onClose={handleCloseModal}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-title" variant="h6" component="h2">
          Заявка успешно отправлена
        </Typography>
      </Box>
    </Modal>
  );
};

export default SuccessModal;
