declare module '*.scss' {
  const content: { readonly [className: string]: string };
  export default content;
}

declare module "*.jpeg" {
  const value: any;
  export = value;
}