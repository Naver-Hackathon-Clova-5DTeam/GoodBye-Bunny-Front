// interface 정의
interface ButtonType {
  text: string;
  isActive: boolean;
}

interface MaxWidthContainerProps {
  children: ReactNode;
}

interface KeyWordType {
  text: string;
}

interface CardType {
  title: string;
  content: string;
  keywords: string[];
}
