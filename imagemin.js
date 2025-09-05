import imagemin from "imagemin";
import imageminWebp from "imagemin-webp";

await imagemin(["public/media/*.{jpg,png,jpeg}"], {
  destination: "public/optimized",
  plugins: [imageminWebp({ quality: 70 })],
});

console.log("Images optimized");
