import uFuzzy from "@leeoniya/ufuzzy";
let isSearchExact = false;
function setIsSearchExact(value = !isSearchExact) {
  isSearchExact = value;
}
let u = new uFuzzy({ intraMode: 1 });
function changeSearchMode() {
  isSearchExact = !isSearchExact;
  if (isSearchExact) {
    u = new uFuzzy({ intraMode: 0, interLft: 1, interRgt: 1 });
  } else {
    u = new uFuzzy({ intraMode: 1, interLft: 0, interRgt: 0 });
  }
}
function debounce(func, wait) {
  let timeout;
  return (...args) => {
    const context = this;
    return new Promise((resolve, reject) => {
      const later = () => {
        timeout = null;
        resolve(func.apply(context, args));
      };
      const callNow = !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) resolve(func.apply(context, args));
    });
  };
}
function _fuzzySearch(items, selectedCategories, search) {
  const filteredItems = items.filter((item) => {
    if (selectedCategories?.length < 1) return true;
    return selectedCategories.map((element) => {
      return element.toLowerCase();
    }).includes(item.category.toLowerCase());
  });
  if (search) {
    const haystack = filteredItems.map(
      (v) => [
        v.title,
        v.subtitle,
        v.tags.map((tag) => "hashtag-" + tag),
        // add #tag so as to enable tag search
        v.content,
        v.description
      ].join(" ")
    );
    const idxs = u.filter(haystack, search);
    const info = u.info(idxs, haystack, search);
    const order = u.sort(info, haystack, search);
    const mark = (part, matched) => matched ? '<b style="color:var(--brand-accent)">' + part + "</b>" : part;
    const list = order.map((i) => {
      const x = filteredItems[info.idx[order[i]]];
      const hl = uFuzzy.highlight(
        haystack[info.idx[order[i]]].replaceAll("<", " ").replaceAll("/>", "  ").replaceAll(">", " "),
        info.ranges[order[i]],
        mark
      ).slice(Math.max(info.ranges[order[i]][0] - 200, 0), Math.min(info.ranges[order[i]][1] + 200, haystack[info.idx[order[i]]].length)).split(" ").slice(1, -1).join(" ");
      return { ...x, highlightedResults: hl };
    });
    return list;
  } else {
    return filteredItems;
  }
}
function fuzzySearch(items, selectedCategories, search) {
  return debounce(_fuzzySearch, 100)(items, selectedCategories, search);
}
export {
  changeSearchMode,
  fuzzySearch,
  isSearchExact,
  setIsSearchExact
};
