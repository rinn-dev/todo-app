import {
  useRef,
  type FC,
  type ReactNode,
  Dispatch,
  SetStateAction,
  useEffect,
  useMemo,
  SyntheticEvent,
  MouseEvent,
} from 'react';
import './styles.scss';

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  onConfirm(): void;
  onCancel(): void;
}

export const Modal: FC<ModalProps> = ({
  children,
  setIsOpen,
  isOpen,
  onCancel,
}) => {
  const modalRef = useRef<HTMLDialogElement>(null);

  const modalClasses = useMemo(() => {
    const classnames = ['modal'];
    if (!isOpen) classnames.push('modal--closing');

    return classnames.join(' ');
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    modalRef.current!.close();
  };

  const handleOnCancel = (e: SyntheticEvent<HTMLDialogElement, Event>) => {
    e.preventDefault();
    setIsOpen(false);
    onCancel();
  };

  const handleAnimationEnd = () => {
    const dialog = modalRef.current!;
    console.log({ isOpen });
    if (!isOpen) dialog.close();
  };

  const handleClick = (e: MouseEvent<HTMLDialogElement>) => {
    const { target } = e;
    if (target === modalRef.current) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    isOpen && modalRef.current!.showModal();
  }, [isOpen]);

  return (
    <dialog
      ref={modalRef}
      className={modalClasses}
      onClose={handleClose}
      onAnimationEnd={handleAnimationEnd}
      onCancel={handleOnCancel}
      onClick={handleClick}
    >
      <div className="modal__container">{children}</div>
    </dialog>
  );
};
