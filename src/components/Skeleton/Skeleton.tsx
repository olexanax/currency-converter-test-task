import React from "react";
// import styles from "./styles.module.scss";
import classNames from "classnames";
import { Container } from "./styles";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> { }

const Skeleton: React.FC<SkeletonProps> = ({ className, ...props }) => {
  return <Container className={classNames(className)} {...props} />;
};

export default Skeleton;
