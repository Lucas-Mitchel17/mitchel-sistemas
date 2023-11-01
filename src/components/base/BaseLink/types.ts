enum POLICIES {
  NO_REFERRER = 'no-referrer',
  NO_REFERRER_DOWNGRADE = 'no-referrer-when-downgrade',
  ORIGIN = 'origin',
  ORIGIN_CROSS = 'origin-when-cross-origin',
  STRICT_ORIGIN = 'strict-origin-when-cross-origin',
  UNSAGE = 'unsafe-url',
}

enum TARGETS {
  BLANK = '_blank',
  SELF = '_self',
}

enum VARIATIONS {
  ACTION = 'action',
  ERROR = 'error',
  INFO = 'info',
  INACTIVE = 'inactive',
  LINK = 'composed',
  SUCCESS = 'success',
  OUTSIDE = 'outside',
  CARD = 'card',
  TOPNAV = 'topnav',
}

const BaseLinkProps = {
  POLICIES,
  TARGETS,
  VARIATIONS,
};

export { BaseLinkProps, POLICIES, TARGETS, VARIATIONS };