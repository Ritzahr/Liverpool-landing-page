const ChevronDown = ({ height=20, width=20, fill='currentColor' }) => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 20 20">
        <path fill={fill} d="M10 9.727l6.364-6.363L20 7l-6.364 6.364L10 17 0 7l3.636-3.636z" />
      </svg>
    );
  };
  
  export { ChevronDown };