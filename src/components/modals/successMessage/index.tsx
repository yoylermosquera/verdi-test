import React from 'react';
import Button from '../../button';
import Icon, { IconName } from '@/components/icon';
import Modalbase, { ModalBaseProps } from '../modalBase';

interface SuccessMessageModalProps extends ModalBaseProps {
  message: string
  iconsName?: IconName
  confirmText?: string;
  onClickConfirmBtn?: VoidFunction 
}

function SuccessMessageModal(props: SuccessMessageModalProps) {
  const {
    message,
    confirmText = "CONFIRMAR",
    onClickConfirmBtn = props?.onClose,
    iconsName = "TickBoxLarge",
     ...restProps 
  } = props;
  return (
    <Modalbase {...restProps}>
      <section className="w-[20.625rem] h-[19rem] flex flex-col justify-center">
        <section className=" w-[11.75rem] h-[13rem] flex flex-col justify-between mx-auto gap-8">
          <Icon
            iconName={iconsName}
            color="black"
            size={75}
            className="mx-auto"
          />
          <p className="text-center text-paragraph">{message}</p>
          <Button onClick={onClickConfirmBtn} className="mx-auto" size="medium">
            {confirmText}
          </Button>
        </section>
      </section>
    </Modalbase>
  );
}

export default SuccessMessageModal;
