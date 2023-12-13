// interface 정의
interface ButtonType {
  text: string;
  isActive: boolean;
  version?: string;
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

interface TextAreaType {
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setContent: React.Dispatch<React.SetStateAction<string>>;
}
