export const setSlickAfterChange = ({
  options,
  setslickIndex,
  refSlick,
  length,
  setIsShowingLastElement,
}) => (i) => {
  setslickIndex(i);
  /* Due to problems accessing the innerstate of react-slick here we
    calculate the amount of elements that are shown on screen through the
    breakpoint and the initial configuration and the we calculate if we have
    reached the last of the carrousel elements with the slick index */
  let breakpoint = false;
  try {
    breakpoint = refSlick?.current?.state?.breakpoint;
    const maxRowsShown = breakpoint
      ? options.responsive.find(
        ({ breakpoint: b }) => b === breakpoint,
      ).settings?.slidesToShow || options.slidesToShow
      : options.slidesToShow;
    setIsShowingLastElement(length <= i + maxRowsShown);
  } catch (error) {
    console.log(breakpoint);
    console.error(error);
  }
};
