interface Color {
  border: string;
  bg: string;
}

const Logo = ({ border, bg }: Color) => {
  return (
    <div
      className={`
        border-4 ${border} h-72 w-72 rounded-full flex items-center justify-center
      `}
    >
      <div
        className={`border-4 ${border} h-64 w-64 rounded-full flex items-center justify-center`}
      >
        <div
          className={`border-4 ${border} h-54 w-54 rounded-full flex items-center justify-center`}
        >
          <div
            className={`border-4 ${border} h-44 w-44 rounded-full flex items-center justify-center`}
          >
            <div
              className={`border-4 ${border} h-34 w-34 rounded-full flex items-center ${bg} justify-center`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logo;
