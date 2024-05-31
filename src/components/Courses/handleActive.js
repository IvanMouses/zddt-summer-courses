import classes from "./Courses.module.css";

export default function handleActive(e) {
  document
    .querySelectorAll(`.${classes.coursesShowMoreCardProgrammScheduleRow}`)
    .forEach((schedule) => {
      if (e.target.closest("div").dataset.group === schedule.dataset.group) {
        schedule.classList.toggle(classes.active);
      }
    });
  document
    .querySelectorAll(
      `.${classes.coursesShowMoreCardProgrammScheduleColumnIcon}`
    )
    .forEach((icon) => {
      if (e.target.closest("div").dataset.group === icon.dataset.group) {
        icon.classList.toggle(classes.active);
      }
    });
  if (
    document.querySelectorAll(
      `.${classes.coursesShowMoreCardProgrammScheduleRow}.${classes.active}`
    ).length > 1
  ) {
    document
      .querySelectorAll(`.${classes.coursesShowMoreCardProgrammScheduleRow}`)
      .forEach((row) => {
        row.classList.remove(classes.active);
      });
    document
      .querySelectorAll(
        `.${classes.coursesShowMoreCardProgrammScheduleColumnIcon}`
      )
      .forEach((icon) => {
        icon.classList.remove(classes.active);
      });

    document
      .querySelectorAll(`.${classes.coursesShowMoreCardProgrammScheduleRow}`)
      [e.target.dataset.group].classList.add(classes.active);
    document
      .querySelectorAll(
        `.${classes.coursesShowMoreCardProgrammScheduleColumnIcon}`
      )
      [e.target.dataset.group].classList.add(classes.active);
  }
}
