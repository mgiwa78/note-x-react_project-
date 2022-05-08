export const notesPageArray = (notesArray, page) => {
  console.log(notesArray, "from sort");

  const currentPage = page ? +page : 1;
  //   console.log(notesArray.filter((_, index) => index < 10));

  //   console.log(
  //     notesArray.filter(
  //       (_, index) =>
  //         index > currentPage * 10 - 10 && index < currentPage * 10 + 1
  //     )
  //   );
  console.log(currentPage);
  const newPage = (currentPage) => {
    if (currentPage === 1) {
      return notesArray.filter((_, index) => index < 10);
    } else if (currentPage > 1) {
      return notesArray.filter(
        (_, index) =>
          index + 10 > currentPage * 10 && index < currentPage * 10 + 1
      );
    }
  };

  console.log(newPage(currentPage), "sort result");

  return { notes: newPage(currentPage) };
};
