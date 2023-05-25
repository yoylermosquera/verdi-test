import React from 'react';
import Button from '../../button';
import Icon from '@/components/icon';
import { IconName } from '../../icon/index';
import Modalbase, { ModalBaseProps } from '../modalBase';

interface ErrorMessageModalProps extends ModalBaseProps {
  onClickRetry?: () => void;
  retryText?: string;
  iconName?: IconName;
  message: string;
}

function ErrorMessageModal(props: ErrorMessageModalProps) {
  const {
    onClickRetry,
    iconName = 'CrossBoxLarge',
    message = 'Se presento un error al eliminar la carpeta inténtalo nuevamente',
    retryText = 'VOLVER A INTENTAR',
    ...restProps
  } = props;
  return (
    <Modalbase {...restProps}>
      <section className="w-[20.625rem] h-[21.125rem] flex flex-col justify-center">
        <section className=" w-[17.5rem] h-[14.375rem] flex flex-col justify-between mx-auto gap-8 mt-1">
          <Icon
            iconName={iconName}
            color="black"
            size={75}
            className="mx-auto"
          />
          <p className="text-center text-paragraph">{message}</p>
          <Button className="mx-auto px-2 " size="medium">
            {retryText}
          </Button>
        </section>
      </section>
    </Modalbase>
  );
}

export default ErrorMessageModal;
