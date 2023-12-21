import React from 'react';
// libs
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
// components
import { Button } from '@/components/ui/Button/Button';
import { useOnClickOutside } from '@/hooks/use-click-outside';

interface ModalProps {
  title: React.ReactNode;
  content: React.ReactNode;
  footer?: React.ReactNode;
  onClose?: () => void;
  onSubmit?: () => void;
  onCancel?: () => void;
}

const Modal: React.FC<ModalProps> = ({
  title,
  content,
  onClose = () => {},
  onCancel = () => {},
  onSubmit = () => {},
  footer,
}) => {
  const clickOutsideRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    document.body.style.overflowY = 'hidden';
    document.documentElement.style.overflowY = 'hidden';

    return () => {
      document.body.style.overflowY = 'unset';
      document.documentElement.style.overflowY = 'unset';
    };
  }, []);

  useOnClickOutside(clickOutsideRef, onClose);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed right-0 top-0 z-[999999] flex h-full w-full items-center justify-center bg-gray-900/10 backdrop-blur-sm"
    >
      <div
        className="relative flex w-full max-w-lg flex-col justify-center rounded-md bg-white"
        ref={clickOutsideRef}
      >
        <div className="p-8">
          <div className="flex w-full items-center justify-between">
            <h2 className="text-2xl font-semibold leading-none">{title}</h2>
            <button aria-label="Close" onClick={onClose}>
              <X />
            </button>
          </div>
          <div className="mt-4 w-full">{content}</div>
        </div>

        <div className="border-input flex items-center gap-4 border-t">
          <div className="w-full px-8 py-4">
            {footer ?? (
              <div className="flex w-full items-center justify-end gap-2">
                <Button onClick={onCancel} variant="text" className="text-dark">
                  Cancel
                </Button>
                <Button onClick={onSubmit}>Save</Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Modal;
