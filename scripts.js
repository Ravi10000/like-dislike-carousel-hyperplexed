let activeIndex = 0;

const groups = document.querySelectorAll(".card-group");

const handleLoveClick = () => {
  const nextIndex = activeIndex + 1 < groups.length ? activeIndex + 1 : 0;
  console.log(groups.length, activeIndex, nextIndex);

  const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`),
    nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);

  console.log(currentGroup);
  console.log(nextGroup);

  currentGroup.dataset.status = "after";
  nextGroup.dataset.status = "becoming-active-from-before";

  setTimeout(() => {
    nextGroup.dataset.status = "active";
  });
  activeIndex = nextIndex;
};
const handleHateClick = () => {
  const prevIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : groups.length - 1;
  console.log(groups.length, activeIndex, prevIndex);

  const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`),
    prevGroup = document.querySelector(`[data-index="${prevIndex}"]`);

  //   console.log(currentGroup);
  //   console.log(nextGroup);

  currentGroup.dataset.status = "before";
  prevGroup.dataset.status = "becoming-active-from-after";

  setTimeout(() => {
    prevGroup.dataset.status = "active";
  });
  activeIndex = prevIndex;
};

const buttons = document.querySelectorAll("button");
