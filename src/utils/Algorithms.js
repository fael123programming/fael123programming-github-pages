function getAge() {
  const date = new Date();
  const birthYear = 2002,
    birthMonth = 6,
    birthDay = 11;
  const currentYear = date.getFullYear(),
    currentMonth = date.getMonth() + 1,
    currentDay = date.getDate();
  let age = currentYear - birthYear;
  if (
    currentMonth < birthMonth ||
    (currentMonth === birthMonth && currentDay < birthDay)
  ) {
    age--;
  }
  return age;
}

export { getAge };