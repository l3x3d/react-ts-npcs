import * as React from "react";

export default function MyComponent(props: any) {
  return (
    <>
      <div className="div">
        <div className="div-2" />
        <div className="div-3">NO PURPOSE COIN</div>
        <div className="div-4">NO PURPOSE COIN (FOR NPCS)</div>
        <div className="div-5">
          <picture>
            <source
              srcset="https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F85930e009173432b98e584067910bfec?format=webp&width=100 100w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F85930e009173432b98e584067910bfec?format=webp&width=200 200w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F85930e009173432b98e584067910bfec?format=webp&width=400 400w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F85930e009173432b98e584067910bfec?format=webp&width=800 800w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F85930e009173432b98e584067910bfec?format=webp&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F85930e009173432b98e584067910bfec?format=webp&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F85930e009173432b98e584067910bfec?format=webp&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F85930e009173432b98e584067910bfec"
              type="image/webp"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F85930e009173432b98e584067910bfec"
              srcset="https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F85930e009173432b98e584067910bfec?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F85930e009173432b98e584067910bfec?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F85930e009173432b98e584067910bfec?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F85930e009173432b98e584067910bfec?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F85930e009173432b98e584067910bfec?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F85930e009173432b98e584067910bfec?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F85930e009173432b98e584067910bfec?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F85930e009173432b98e584067910bfec"
              className="image"
            />
          </picture>
          <div className="builder-image-sizer image-sizer" />
        </div>
        <div className="no-purpose-coin-this-coin-has">
          NO PURPOSE COIN THIS COIN HAS NO PURPOSE CONTRACT: 0X...... SUPPLY:
          1234567891011 LP: 92.41% RESERVE: 6.9% NO PURPOSE RESERVE:.69%
        </div>
        <div className="div-6">© 2023 NPCS un-Inc.</div>
      </div>
      <style jsx>{`
        .div {
          display: flex;
          flex-direction: column;
          max-width: 1440px;
          justify-content: center;
          align-items: center;
          background-color: rgba(255, 255, 255, 1);
        }
        .div-2 {
          display: flex;
          max-width: 1440px;
          height: 126px;
          width: 1440px;
          background-color: rgba(137, 244, 254, 1);
        }
        .div-3 {
          max-width: 178px;
          margin-top: 23px;
          color: rgba(0, 0, 0, 1);
          font-size: 20px;
          letter-spacing: 0%;
          text-align: left;
          font-family: "Share Tech Mono", sans-serif;
        }
        @media (max-width: 640px) {
          .div-3 {
            max-width: 183px;
          }
        }
        .div-4 {
          max-width: 602px;
          margin-top: 23px;
          color: rgba(0, 0, 0, 1);
          font-size: 64px;
          letter-spacing: 0%;
          text-align: left;
          font-family: "Share Tech Mono", sans-serif;
        }
        @media (max-width: 640px) {
          .div-4 {
            max-width: 453px;
          }
        }
        .div-5 {
          display: flex;
          position: relative;
          min-width: 20px;
          min-height: 20px;
          max-width: 618px;
          width: 618px;
          margin-top: 23px;
        }
        @media (max-width: 640px) {
          .div-5 {
            width: 324px;
          }
        }
        .image {
          object-fit: cover;
          object-position: center;
          position: absolute;
          height: 100%;
          width: 100%;
          top: 0;
          left: 0;
        }
        .image-sizer {
          width: 100%;
          padding-top: 90.93851132686083%;
          pointer-events: none;
          font-size: 0;
        }
        .no-purpose-coin-this-coin-has {
          max-width: 644.3085327148438px;
          margin-top: 23px;
          color: rgba(0, 0, 0, 1);
          font-size: 49.277896881103516px;
          letter-spacing: 0%;
          text-align: left;
          font-family: "Share Tech Mono", sans-serif;
        }
        .div-6 {
          max-width: 348px;
          margin-top: 23px;
          color: rgba(0, 0, 0, 1);
          font-size: 20px;
          letter-spacing: 0%;
          text-align: left;
          font-family: "Share Tech Mono", sans-serif;
        }
      `}</style>
    </>
  );
}