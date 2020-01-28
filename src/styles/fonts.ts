/**
 * export font family OpenSans-Regular
 */
export const FontFamilyRegular = {
  fontFamily: 'OpenSans-Regular',
};

/**
 * export font family OpenSans-SemiBold
 */
export const FontFamilySemiBold = {
  fontFamily: 'OpenSans-SemiBold',
};

const fonts = {
  titles: {
    small: {
      ...FontFamilySemiBold,
      fontSize: 12,
    },
    medium: {
      ...FontFamilySemiBold,
      fontSize: 21,
    },
    large: {
      ...FontFamilyRegular,
      fontSize: 32,
    },
    title: {
      ...FontFamilySemiBold,
      fontSize: 19,
    },
  },
  content: {
    extraLarge: {
      ...FontFamilyRegular,
      fontSize: 28,
    },
    small: {
      ...FontFamilyRegular,
      fontSize: 16,
    },
    medium: {
      ...FontFamilySemiBold,
      fontSize: 14.7,
    },
  },
};

export default fonts;
