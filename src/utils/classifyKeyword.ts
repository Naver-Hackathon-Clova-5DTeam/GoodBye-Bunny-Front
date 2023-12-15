export const classifyKeyword = (keyword: string) => {
  const categoryColors: { [key: string]: string } = {
    학업: "kGreen",
    업무: "kYellow",
    직장: "kYellow",
    가족: "kOrange",
    친구: "kOrange",
    연인: "kOrange",
    여행: "kPink",
    취미: "kPurple",
    건강: "kBlue",
  };

  const color = categoryColors[keyword];

  return color || "해당하는 키워드가 없습니다.";
};
