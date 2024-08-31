import { IChildrenProps } from "@/common/interface/children-props.interface";

interface IHomeLayout extends IChildrenProps {}

function HomeLayout({ children }: IHomeLayout) {
  return <div>{children}</div>;
}

export default HomeLayout;
