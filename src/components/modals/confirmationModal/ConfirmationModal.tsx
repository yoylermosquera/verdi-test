import Button from '@/components/button';
import React from 'react';
import Modalbase, { ModalBaseProps } from '../modalBase';

interface ConfirmationModalProps extends ModalBaseProps {
  message: string;
  confirmText?: string;
  cancelText?: string;

  //handlers
  onClickConfirm?: VoidFunction;
  onClickCancel?: VoidFunction;
}

function ConfirmationModal(props: ConfirmationModalProps) {
  const {
    message,
    confirmText = 'SI',
    cancelText = 'NO',
    onClickCancel,
    onClickConfirm,
    ...restProps
  } = props;
  return (
    <Modalbase {...restProps}>
      <div className="flex flex-col gap-8 justify-between w-[330px] h-[268px] pt-16 pb-14 px-14  bg-white">
        <p className="text-[14px] leading-5 text-center tracking-[0.98px]">{message}</p>
        <div className="flex w-full justify-between">
          <Button onClick={onClickCancel} size="small">
            {cancelText}
          </Button>
          <Button onClick={onClickConfirm} variant="white" size="small">
            {confirmText}
          </Button>
        </div>
      </div>
    </Modalbase>
  );
}

export default ConfirmationModal;
