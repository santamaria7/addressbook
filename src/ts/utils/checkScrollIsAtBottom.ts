export function checkScrollIsAtBottom() {
  const {offsetHeight} = document.body;
  const _windowHeight =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight,
    _scrollPos =
      window.scrollY ||
      window.pageYOffset ||
      document.documentElement.scrollTop;
  return offsetHeight - (_scrollPos + _windowHeight) <= 1;
}