export const classifyKeyword = (keyword: string) => {
  const categoryColors: { [key: string]: string } = {
    학업: "bg-kGreen",
    업무: "bg-kYellow",
    직장: "bg-kYellow",
    가족: "bg-kOrange",
    친구: "bg-kOrange",
    연인: "bg-kOrange",
    여행: "bg-kPink",
    취미: "bg-kPurple",
    건강: "bg-kBlue",
  };

  const color = categoryColors[keyword];

  return color || "해당하는 키워드가 없습니다.";
};
