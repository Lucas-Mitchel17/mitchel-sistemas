enum TAGS {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  SPAN = 'span',
  P = 'p',
}

enum VARIATIONS {
  DEFAULT = 'default',
  ERROR = 'error',
  HIGH = 'highlight',
  INACTIVE = 'inactive',
  SUCCESS = 'success',
  GRADIENT = 'gradient'
}

const BaseTextTypes = {
  TAGS, VARIATIONS
};

export { TAGS, VARIATIONS, BaseTextTypes };