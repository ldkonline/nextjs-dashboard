import React from 'react';

export type CustomersProps = {
  /** 名称 */
  name: string;
};

/**
 * @component  组件名称
 * @param props { CustomersProps }
 * @returns {JSX.Element}
 */
export default function Customers(props: CustomersProps) {
  return <p>Customers page</p>;
}
