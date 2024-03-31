/**
 * @jest-environment jsdom
 */

const home = require("./home");

test('toggleFilter functioning as expected', () => {
  const testElement = document.createElement("div");
  testElement.id = "test-dropdown";
  testElement.classList.add("hidden");
  document.body.append(testElement);
  home.toggleFilter("test");
  expect(testElement.classList.contains("hidden")).toBe(false);
});

test('search bar default text cleared on click', () => {
  const searchElement = document.createElement("input");
  searchElement.id = "searchBar";
  searchElement.value = "default text";
  document.body.append(searchElement);
  expect(searchElement.value).toBe("default text");
  home.clearSearchText();
  expect(searchElement.value).toBe("");
});