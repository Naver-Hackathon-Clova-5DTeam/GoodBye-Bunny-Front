// interface 정의
interface ButtonType {
  text: string;
  isActive: boolean;
  version?: string;
  func?: function;
}

interface MaxWidthContainerProps {
  children: ReactNode;
}

interface KeyWordType {
  text: string;
}

interface CommentType {
  profile: string;
  commentId?: number;
  commentContent: string;
  updateTime: string;
  memberNickname: string;
}

interface CommentBoxProps {
  comments: CommentData[];
  setIsPost: React.Dispatch<React.SetStateAction<boolean>>;
}

interface CardType {
  nickname: string;
  profile?: string;
  title: string;
  content: string;
  reviewId?: number;
  updateTime?: string;
  keywords?: string[];
  comments?: CommentType[];
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
  updateTime: string;
  isTime?: boolean;
}

interface ReviewType {
  title: string;
  content: string;
  review_id?: number;
}

interface CommentGetType {
  review_id: number;
}

interface CommentPostType {
  review_id: number;
  commentContent: string;
}
