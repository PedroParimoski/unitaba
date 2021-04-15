const authPage = document.querySelector("main#auth");

if (authPage) {
  const hideAuthForms = () => {
    document
      .querySelectorAll("auth form")
      .forEach((el) => el.classList.add("hide"));
  };
}
