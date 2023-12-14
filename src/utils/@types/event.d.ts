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
  nickname: string;
  profile: string;
  title: string;
  content: string;
  reviewId?: number;
  updateTime?: string;
  keywords?: string[];
}

interface TextAreaType {
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setContent: React.Dispatch<React.SetStateAction<string>>;
}

interface PostType {
  title: string;
  content: string;
  updateTime: string;
}

interface DateType {
  date: string;
}
