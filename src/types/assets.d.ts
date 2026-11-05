declare module "*.css";
declare module "*.scss" {
  const classNames: { readonly [className: string]: string };
  export default classNames;
}
