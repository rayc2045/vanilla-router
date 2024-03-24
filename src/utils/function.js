export async function getData(api) {
  const res = await fetch(api);
  return await res.json();
}

export function getHost() {
  return location.host.startsWith("http")
    ? location.host
    : `${location.protocol}//${location.host}`;
}

export function select(selector, parent = document) {
  return parent.querySelector(selector);
}

export function selectAll(selector, parent = document) {
  return [...parent.querySelectorAll(selector)];
}

export function toTitle(str) {
  str = str.trim();
  return `${str.charAt(0).toUpperCase()}${str.toLowerCase().slice(1)}`
    .replaceAll("-", " ")
    .replaceAll("_", " ")
    .split(" ")
    .filter((f) => f.length)
    .join(" ");
}

export function getNumbers(value) {
  return value.toString().match(/\d+/g);
}

export function currencyFormat(number, fixed = 2, first = "$", last = "") {
  return (
    first +
    new Intl.NumberFormat().format(
      Math.round((number + Number.EPSILON) * 10 ** fixed) / 10 ** fixed,
    ) +
    last
  );
}

export function isNumber(value) {
  return !isNaN(+value);
}

export function isBoolean(value) {
  const text = value.toString().toLowerCase();
  return text === "true" || text === "false";
}

export function isEmail(value) {
  value
    .toString()
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
}

export function copyText(text) {
  navigator.clipboard.writeText(text);
}
