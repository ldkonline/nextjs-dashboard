import React from 'react';

export type InvoiceProps = {
  /** 名称 */
  name: string;
};

/**
 * @component  组件名称
 * @param props { InvoiceProps }
 * @returns {JSX.Element}
 */
export default function Invoice(props: InvoiceProps) {
  return <p>Invoice Page</p>;
}
