interface FavoriteProps {
  width: string;
  height: string;
}
export default function FavoriteFillSVG({ width, height }: FavoriteProps) {
  return (
    <svg
      fill="#000000"
      height={height}
      width={width}
      version="1.1"
      id="Filled_Icons"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 24 24"
      enableBackground="new 0 0 24 24"
      xmlSpace="preserve"
    >
      <g id="Favorite-Filled">
        <path
          d="M12,22C9.63,20.17,1,13.12,1,7.31C1,4.38,3.47,2,6.5,2c1.9,0,3.64,0.93,4.65,2.48L12,5.78l0.85-1.3
   C13.86,2.93,15.6,2,17.5,2C20.53,2,23,4.38,23,7.31C23,13.15,14.38,20.18,12,22z"
        />
      </g>
    </svg>
  );
}
