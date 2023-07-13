interface ModalProps {
 top?: boolean;
 right?: boolean;
 bottom?: boolean;
 left?: boolean;
 children: React.ReactNode;
 containerClass?: string;
}

export default function Modal({
 top,
 right,
 bottom,
 left,
 children,
 containerClass,
}: ModalProps) {
 return (
  <aside
   className={`dark:bg-colorBlack dark:border-colorWhite fixed top-0 z-50 ${containerClass}`}
  >
   {children}
  </aside>
 );
}
