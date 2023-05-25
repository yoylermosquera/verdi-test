import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import Icon from '@/components/icon';
import { useOuterClick } from '@/hooks/useOuterClick';

export interface ModalBaseProps {
  children?: React.ReactNode;
  open: boolean;
  // handlers
  onClose: () => void;

  //clases
  dialogClassName?: string;
  contentWrapperClassName?: string;
  className?: string;
  showCloseIcon?: boolean;
}

function Modalbase({
  open,
  children,
  dialogClassName = '',
  contentWrapperClassName = '',
  className = '',
  onClose,
  showCloseIcon = true,
}: ModalBaseProps) {
  const ref = useRef<Element | null>(null);

  const [mounted, setMounted] = useState(false);

  const elementRef = useOuterClick(() => {
    if (open) onClose();
  });

  useEffect(() => {
    ref.current = document.querySelector<HTMLElement>('#portal-root');
    setMounted(true);
  }, []);
  
  useLayoutEffect(() => {
    if(document.body && open) {
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.body.style.overflow = '';
    }
  }, [open])

  if (!mounted || !ref.current) return null;

  if (!open) return null;

  return (
    <>
      {createPortal(
        <dialog
          className={`z-50 bg-transparent fixed px-0 py-0 m-0 top-0 left-0  h-screen w-full ${dialogClassName}`}
          open={open}
          accessKey="modal"
        >
          <div
            className={`z-50 bg-black15 mix-blend-screen h-full w-full flex justify-center items-center ${contentWrapperClassName}`}
          >
            <div
              ref={elementRef}
              className={`z-50 bg-[white] top-0 ${className}`}
            >
              {showCloseIcon && (
                <div className="flex justify-end">
                  <Icon
                    className="cursor-pointer"
                    iconName="Close"
                    onClick={onClose}
                    size={12}
                  />
                </div>
              )}

              {children}
            </div>
          </div>
        </dialog>,
        ref.current,
      )}
    </>
  );
}

export default Modalbase;
