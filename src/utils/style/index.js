export const getClassnames = (classnames) => {
    const classes = classnames.join(' ');
    const sanitised = classes.replace(/\s+/g, ' ').trim();
    return sanitised;
  };